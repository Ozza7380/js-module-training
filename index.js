import { add, sub } from './math.js';
import log from './logger.js';
import config from './config.js';
import { count, increment } from './counter.js';

if (true) {
    const module = await import('./lazy.js');
    module.heavy();
}

console.log(count);// 0
increment();
console.log(count);// 1 (live binding)
log(config.appName);
log(add(2, 3));
log(sub(5, 3));