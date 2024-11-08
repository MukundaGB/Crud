const Student = require("../schema/addStudentSchema.js");
exports.updateStduent = async (request , h) => {
  try {
    const id=request.params.id
    const filter = { _id : id };
    const update = {name:request.payload.name ,class : request.payload.class} ;
  
 await Student.findOneAndUpdate(filter,update , {upsert : true})
    return h.response({ message: "Student updated successfully" }).code(201);
  } catch (error) {
    console.error("Error adding student:", error);
    return h.response({ message: "Failed to update student" }).code(500);
  }
};