import Validator from '../Validator.js';

export default new Validator({
    apiPrefix : [ 'required', 'string' ],
    key       : [ 'required', 'string' ]
});
