const Student = require("../schema/addStudentSchema.js");
exports.getStudent = async (request , h) => {
try{
    const id=request.params.id
    // console.log(id);
    const idd=  {_id : id };
   const FoundS= await Student.findOne(idd)
   console.log(FoundS);
    if (!FoundS) {
        return h.response({ error: 'Student not found ' }).code(404);
    }
    return h.response({message:"Student found Successfully"}).code(201);
}catch (error){
    console.error("Error getting student:", error);
    return h.response({ message: "Failed to get student" }).code(500);
  }
}


