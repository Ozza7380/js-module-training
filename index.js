const { add, sub } = require('./math');
const log = require('./logger');
const config = require('./config');

log(config.appName);
log(add(2, 3));
log(sub(5, 3));