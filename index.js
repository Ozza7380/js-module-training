import { add, sub } from './math.js';
import log from './logger.js';
import config from './config.js';

log(config.appName);
log(add(2, 3));
log(sub(5, 3));