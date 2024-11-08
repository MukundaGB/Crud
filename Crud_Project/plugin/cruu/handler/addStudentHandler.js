const Student = require("../schema/addStudentSchema.js");
exports.addStduent = async (request , h) => {

    const data = request.payload;
  try {
    await Student.create(data);
    return h.response({ message: "Student added successfully" }).code(201);
  } catch (error) {
    console.error("Error adding student:", error);
    return h.response({ message: "Failed to add student" }).code(500);
  }
};