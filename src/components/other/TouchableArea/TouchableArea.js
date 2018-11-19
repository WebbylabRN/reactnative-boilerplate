import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import {
    TouchableOpacity,
    TouchableNativeFeedback
} from 'react-native';

import { isIOS }         from '../../../utils/platformUtils.js';
import { DebounceClass } from '../../../utils/debounceUtils.js';

const debounce = new DebounceClass();

export default class TouchableArea extends Component {
    static propTypes = {
        children      : PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]).isRequired,
        isTransparent : PropTypes.bool,
        onPress       : PropTypes.func,
        Touchable     : PropTypes.func,
        delay         : PropTypes.number,
        activeOpacity : PropTypes.number
    };

    static defaultProps = {
        Touchable     : isIOS ? TouchableOpacity : TouchableNativeFeedback,
        isTransparent : false,
        onPress       : () => {},
        delay         : 500,
        activeOpacity : 0.6
    };

    render() {
        const { Touchable, children, onPress, delay, ...props } = this.props;

        return (
            <Touchable
                onPress = {debounce.delay(onPress, delay)}
                {...props}
            >
                {children}
            </Touchable>
        );
    }
}
