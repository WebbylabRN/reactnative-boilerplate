const DEVELOPMENT = {
    apiPrefix : 'https://holidayapi.com/v1/',
    key       : '501fbced-d18b-4022-847b-90ab7c51c665'
};

const PRODUCTION = {
    apiPrefix : 'https://holidayapi.com/v1/',
    key       : '501fbced-d18b-4022-847b-90ab7c51c665'
};

const CONFIGS = {
    DEVELOPMENT,
    PRODUCTION
};

export const CURRENT_CONFIG_TYPE = 'DEVELOPMENT';

export default CONFIGS[CURRENT_CONFIG_TYPE];
