// const routes = require("./service/notes");

const Hapi = require("@hapi/hapi");
require("dotenv").config();
const notes = require("./api/notes");

// const NotesService = require("./service/inMemory/NotesService");
const NotesService = require("./service/postgres/NotesService");
const NotesValidator = require("./validator/notes");

const init = async () => {
  const notesService = new NotesService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    // host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  // server.route(routes);
  await server.register({
    plugin: notes,
    options: {
      service: notesService,
      validator: NotesValidator,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
init();
