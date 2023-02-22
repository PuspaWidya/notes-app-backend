// import NotesHandler from "./handlers";
// import routes from "./routes";
//! gak bisa import kayak di atas!

const NotesHandler = require("./handlers");
const routes = require("./routes");

module.exports = {
  name: "notes",
  version: "1.0.0",
  register: async (server, { service, validator }) => {
    const notesHandler = new NotesHandler(service, validator);
    server.route(routes(notesHandler));
  },
};
