const getAllStudentHandler=require("../handler/getAllStudentHandler")
module.exports={
    method:"GET",
    path:"/api/gAllStudent",
    handler: getAllStudentHandler.getAllStudent,
}