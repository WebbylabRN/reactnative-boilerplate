import { Navigation } from 'react-native-navigation';

import WelcomeScreen from '../components/screens/WelcomeScreen/WelcomeScreen.js';

export function registerComponents() {
    Navigation.registerComponent('navigation.WelcomeScreen', () => WelcomeScreen);
}
