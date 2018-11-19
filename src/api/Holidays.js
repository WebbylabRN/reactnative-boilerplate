import Base from './Base.js';

import config from '../etc/config.js';

export default class HolidaysAPI extends Base {
    async load({ country = 'UA', year, month }) {
        return this.apiClient.get({
            requestURL : `holidays?key=${config.key}&country=${country}&year=${year}&month=${month}`
        });
    }
}
