const studentHandler = require("../handler/addStudentHandler");
module.exports = {
  method: "POST",
  path: "/api/student",
  handler: studentHandler.addStduent,
};

