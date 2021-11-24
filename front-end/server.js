const express = require('express');

const app = express();

const configureServer = () => {
  const PROJECT_NAME = 'restoApp';

  app.use(express.static(__dirname + `/dist/${ PROJECT_NAME }`));

  app.get('/*', function (req, res) {
    res.sendFile('index.html', {
      root: `dist/${ PROJECT_NAME }`
    })
  });
};

const startServer = () => {
  console.log('Server: Starting server...');

  const PORT = process.env.PORT || 4500;
  const PORT_TYPE = 'PRODUCTION PORT';
  const MODE_TYPE = 'PRODUCTION';

  const message = console.log(`Server: Running in ${ MODE_TYPE } mode on ${ PORT_TYPE } ${ PORT }`);

  const server = app.listen(PORT, message);

  console.log('Server: Started successfully...');

  process.on('unhandledRejection', (error, promise) => {
    console.log(`Error: ${ error.message }`);

    server.close(() => process.exit(1));
  });
};

configureServer();
startServer();
