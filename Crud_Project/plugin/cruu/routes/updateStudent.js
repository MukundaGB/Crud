const updateStudentHandler = require("../handler/updateStudentHandler");
module.exports = {
  method: "PATCH",
  path: "/api/uStudent/{id}",
  handler: updateStudentHandler.updateStduent,
} 