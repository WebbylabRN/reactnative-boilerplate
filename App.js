import { Navigation } from 'react-native-navigation';

import { registerComponents } from './src/navigation';
import options                from './src/navigation/options';

registerComponents();


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions(options.main);

    Navigation.setRoot({
        root : {
            stack : {
                children : [
                    {
                        component : {
                            name : 'navigation.WelcomeScreen'
                        }
                    }
                ]
            }
        }
    });
});
