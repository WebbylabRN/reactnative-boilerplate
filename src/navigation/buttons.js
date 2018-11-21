import colors from '../constants/colors.js';

export default {
    WelcomeScreen : {
        rightButtons : [
            {
                id        : 'buttonOne',
                component : {
                    name      : 'buttons.NavButton',
                    passProps : {
                        color : colors.PRIMARY_TEXT
                    }
                }
            }
        ]
    }
};
