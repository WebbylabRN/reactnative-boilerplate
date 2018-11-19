import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { View, Text }       from 'react-native';

import styles from './WelcomeScreenStyles.js';

class WelcomeScreen extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <View style={styles.layout}>
                <Text>Welcome To Boilerplate</Text>
            </View>
        );
    }
}

export default WelcomeScreen;
