import React, { Component } from 'react';
import { View, Text }       from 'react-native';
import Icon                 from 'react-native-vector-icons/FontAwesome';

import colors    from '../../../constants/colors.js';
import { isIOS } from '../../../utils/platformUtils.js';

import styles from './WelcomeScreenStyles.js';

class WelcomeScreen extends Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        const text = 'Welcome To Boilerplate';

        return (
            <View style={styles.layout}>
                <Icon name={isIOS ? 'apple' : 'android'} size={50} color={colors.PRIMARY_MAIN} />
                <Text>{text}</Text>
            </View>
        );
    }
}

export default WelcomeScreen;
