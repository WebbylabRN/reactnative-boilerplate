import colors from '../constants/colors';

import buttons from './buttons.js';

export default {
    main : {
        topBar : {
            visible : true
        },
        layout : {
            backgroundColor : colors.PRIMARY_LIGHT,
            orientation     : [ 'portrait', 'landscape' ] // An array of supported orientations
        }
    },
    WelcomeScreen : {
        statusBar : {
            style           : 'light',
            backgroundColor : colors.PRIMARY_DARK
        },
        topBar : {
            ...(buttons.WelcomeScreen || {}),
            background : {
                color : colors.PRIMARY_MAIN
            },
            title : {
                color : colors.PRIMARY_TEXT,
                text  : 'Holidays'
            }
        }
    }
};
