const StduentRoute = require("./routes/addStudentRoute");
const UpdateHandler= require("./routes/updateStudent")
const GetStudent= require("./routes/getStudentRoute")
const DeleteStudent=require("./routes/deleteStudent")
const GetAllStudent=require("./routes/getAllStudentsRoute")
const StudentPluginn = {
  name: "student",
  version: "1.0.0",
  register: (server, _options) => {
    server.route(StduentRoute);
  server.route(UpdateHandler);
  server.route(GetStudent)
  server.route(DeleteStudent)
  server.route(GetAllStudent)
  },
};4
module.exports = StudentPluginn;