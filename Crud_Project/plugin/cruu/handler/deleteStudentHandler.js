const Student=require("../schema/addStudentSchema.js")
exports.deleteStudent=async(request,h)=>{
try{
    const id=request.params.id;
    const idd=  {_id : id };
  const FoundS=await Student.findByIdAndDelete(idd)
  if (!FoundS) {
    return h.response({ error: 'Student not found to delete' }).code(404);
}
return h.response({message:"Student deleted Successfully"}).code(201);
}catch(error){
    console.error("Error adding student:", error);
    return h.response({ message: "Failed to delete student" }).code(500);
}
}