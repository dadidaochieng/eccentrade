const winston = require('winston');

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: 'logs/all.log',
            handleExceptions: true,
            json: true,
            maxFiles: 5,
            colorize: fasle,
        }),
        new winston.transports.Console({
            hadnleExceptions: true,
            json: true,
            colorize: true,
        })
    ],
    exitOnError: false,
});

logger.stream = {
    write: message => {
        logger.log('info', message);
    },
};

module.exports = logger;