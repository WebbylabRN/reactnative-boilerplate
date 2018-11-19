import { Navigation } from 'react-native-navigation';

import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen.js';

export function registerComponents() {
    Navigation.registerComponent('navigation.WelcomeScreen', () => WelcomeScreen);
}