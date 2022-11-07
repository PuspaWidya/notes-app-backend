const Hapi = require('@hapi/hapi');
const routes = require('./router')

const init = async () => {
    const server = Hapi.server({
        port: 5100,
        host: 'localhost',
        routes: {
            cors: {
              origin: ['*']
            },
          },
    });

    server.route(routes);
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}
init();