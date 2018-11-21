import React, { Component } from 'react';
import { Navigation }       from 'react-native-navigation';

import WelcomeScreen from '../components/screens/WelcomeScreen/WelcomeScreen.js';

import NavButton from './buttons/NavButton.js';

import navOptions  from './options.js';

export function registerComponents() {
    Navigation.registerComponent('navigation.WelcomeScreen', () => renderScreen(WelcomeScreen, null, 'WelcomeScreen'));

    Navigation.registerComponent('buttons.NavButton', () => NavButton);
}

function renderScreen(Page, Layout, id) {
    return class Screen extends Component {
        static options = navOptions[id];

        render() {
            return Layout
                ? (
                    <Layout>
                        <Page />
                    </Layout>
                )
                : (
                    <Page />
                );
        }
    };
}
