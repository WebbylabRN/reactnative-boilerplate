import ApiClient from './ApiClient';

import HolidaysAPI from './Holidays.js';

export default function apiConstruct(config) {
    const api = new ApiClient({ prefix: config.apiPrefix });

    return {
        apiClient : api,
        holidays  : new HolidaysAPI({ apiClient: api })
    };
}
