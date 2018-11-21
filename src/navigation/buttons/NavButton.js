import React from 'react';
import Icon  from 'react-native-vector-icons/FontAwesome';

import colors from '../../constants/colors.js';
import { isIOS } from '../../utils/platformUtils.js';

// eslint-disable-next-line react/prop-types
export default ({ name = 'rocket', size = 25, color = colors.PRIMARY_TEXT }) => (
    <Icon
        name  = {name}
        size  = {size}
        color = {color}
        style = {{ paddingRight: isIOS ? 0 : 15 }}
    />
);
