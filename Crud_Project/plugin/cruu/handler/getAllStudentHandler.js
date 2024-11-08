const Student = require("../schema/addStudentSchema.js");
exports.getAllStudent = async (request , h) => {
try{
   const FoundS= await Student.find()
   console.log(FoundS);
    return h.response({message:"Students found Successfully"}).code(201);
   }catch (error){
    console.error("Error getting student:", error);
    return h.response({ message: "Failed to get student" }).code(500);
  }
}
