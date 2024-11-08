const deletestudentHandler=require("../handler/deleteStudentHandler")
module.exports = {
    method: "DELETE",
    path: "/api/dStudent/{id}",
    handler: deletestudentHandler.deleteStudent,
  };