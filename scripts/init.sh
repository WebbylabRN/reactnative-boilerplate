COLOR='\033[0;35m'
NC='\033[0m'
CONFIGFILE=$1
START_PWD=$(pwd)

read_var() {
    VAR=$(grep $1 $2 | xargs)
    IFS="=" read -ra VAR <<< "$VAR"
    echo ${VAR[1]}
}

init_webbylab_app() {
    CONFIGFILE=$CONFIGFILE
    APP_NAME=$(read_var APP_NAME $CONFIGFILE)
    BUNDLE_ID=$(read_var BUNDLE_ID $CONFIGFILE)
    APPLE_ID=$(read_var APPLE_ID $CONFIGFILE)
    TEAM_ID=$(read_var TEAM_ID $CONFIGFILE)
    CRASHLYTICS_API_TOKEN=$(read_var CRASHLYTICS_API_TOKEN $CONFIGFILE)
    GIT_REPO=$(read_var GIT_REPO $CONFIGFILE)

    echo -e "${COLOR}CLONE REPO${NC}"
    mkdir $APP_NAME
    git clone git@github.com:WebbylabRN/reactnative-boilerplate.git $APP_NAME

    echo -e "${COLOR}SET .env variables${NC}"
    FILE=$APP_NAME/.env
    if [ -f $FILE ]; then
        rm $FILE
    fi

    declare -a env_vars=("BUNDLE_ID" "APPLE_ID" "TEAM_NAME" "TEAM_ID" "APP_NAME" "CRASHLYTICS_API_TOKEN" "CRASHLYTICS_BUILD_SECRET" "CRASHLYTICS_EMAILS" "CERTIFICATES_REPO")

    for i in "${env_vars[@]}"
    do
        VAR=$(read_var $i $CONFIGFILE)
        echo 'export' $i=$VAR >> $FILE
    done

    cd $APP_NAME

    echo -e "${COLOR}INSTALL react-native-rename${NC}"
    # npm i -g react-native-rename

    echo -e "${COLOR}RENAME APP: $APP_NAME ${NC}"
    react-native-rename $APP_NAME -b $BUNDLE_ID

    cd ios
    
    echo -e "${COLOR}[iOS] INSTALL gems${NC}"
    sudo gem install unf_ext -v '0.0.7.5'
    sudo gem install dotenv

    echo -e "${COLOR}[iOS] POD install${NC}"
    pod install

    cd $APP_NAME.xcodeproj
    
    echo -e "${COLOR}[iOS] Add FABRIC_API_KEY to build settings${NC}"
    sed -i'.original' 's/FABRIC_API_KEY = .*;/FABRIC_API_KEY = '$CRASHLYTICS_API_TOKEN';/g' project.pbxproj
    rm project.pbxproj.original
    
    cd ../

    echo -e "${COLOR}[iOS] ADD APP TO THE AppleDeveloperConsole${NC}"
    # fastlane produce -u $APPLE_ID -a $BUNDLE_ID -b $TEAM_ID -q $APP_NAME --skip_itc
    # fastlane match appstore
    # fastlane match development
    # fastlane match adhoc

    cd ../android

    echo -e "${COLOR}[Android] INSTALL gems${NC}"
    sudo gem install unf_ext -v '0.0.7.5'
    sudo gem install dotenv

    cd ../
    echo -e "${COLOR}INSTALL DEPENDENCIES${NC}"
    npm i

    echo -e "${COLOR}INIT GIT${NC}"
    rm -rf .git
    git init

    echo -e "${COLOR}${NC}"
}

init_webbylab_app
