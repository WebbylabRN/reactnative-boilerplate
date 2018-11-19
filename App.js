import { Navigation } from 'react-native-navigation';

import { registerComponents } from './src/navigation';

registerComponents();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.WelcomeScreen'
      }
    }
  });
});
