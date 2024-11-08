const hapi = require("@hapi/hapi");
const connectToDb = require("./db");
const StudentPlugin = require("./plugin/cruu/index");

const init = async () => {
    connectToDb();
    const server = hapi.Server({    
      port: 3000,
      host: "localhost",
    });

    await server.register(StudentPlugin)
    await server.start();
    console.log("server is listing on port 3000");
}


init();