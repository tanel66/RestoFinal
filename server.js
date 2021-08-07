const express = require('express');
const dotenv = require('dotenv');
const connectToDatabase = require('./database/db');

const app = express();

const configureServer = () => {
    dotenv.config({ path: './config/config.env' });
    connectToDatabase();
};

const configurePreRoutesMiddlewares = () => {
    const bodyParser = express.json();
    app.use(bodyParser);

    const cookieParser = require('cookie-parser');
    app.use(cookieParser());

    const mongoSanitize = require('express-mongo-sanitize');
    app.use(mongoSanitize());

    const helmet = require('helmet');
    app.use(helmet());

    const xssClean = require('xss-clean');
    app.use(xssClean());

    const expressRateLimit = require('express-rate-limit');
    const timeIn10Min = (10 * 60 * 1000);
    const maxRequests = 200;
    app.use(expressRateLimit({
        windowMs: timeIn10Min,
        max: maxRequests
    }));

    const httpParamPollution = require('hpp');
    app.use(httpParamPollution(undefined));

    const enableCors = require('cors');
    app.use(enableCors());

    const logger = require('./src/middlewares/logger');
    app.use(logger);
};

const configureRoutes = () => {
    const tablesRoute = require('./src/models/table/tablesRoutes');
    const tablesEndpoint = 'tables';
    app.use(`/api/${ process.env.API_VERSION }/` + tablesEndpoint, tablesRoute);
};

const configurePostRoutesMiddlewares = () => {
    const errorHandler = require('./src/middlewares/errorHandler');
    app.use(errorHandler);
};

const startServer = () => {
    console.log('Server: Starting server...');

    const PORT = process.env.PORT || process.env.DEFAULT_PORT;
    const PORT_TYPE = process.env.PORT ? 'PRODUCTION PORT' : 'DEFAULT PORT';
    const MODE_TYPE = (process.env.NODE_ENV).toUpperCase();

    const message = console.log(`Server: Running in ${ MODE_TYPE } mode on ${ PORT_TYPE } ${ PORT }`);

    const server = app.listen(PORT, message);

    console.log('Server: Started successfully...');

    process.on('unhandledRejection', (error, promise) => {
        console.log(`Error: ${ error.message }`);

        server.close(() => process.exit(1));
    });
};

configureServer();
configurePreRoutesMiddlewares();
configureRoutes();
configurePostRoutesMiddlewares();
startServer();