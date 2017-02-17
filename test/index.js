var retryFetch = require('../index.js');

retryFetch('https://.baidu.com', {}, 1000, 5);