import React, { Component } from 'react';
import { View, Text }       from 'react-native';

import styles from './WelcomeScreenStyles.js';

class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.layout}>
                <Text>Welcome To Boilerplate</Text>
            </View>
        );
    }
}

export default WelcomeScreen;