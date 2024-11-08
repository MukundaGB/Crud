const getHandler=require("../handler/getHandler")
    module.exports={
    method:"GET",
    path:"/api/gStudent/{id}",
    handler: getHandler.getStudent,
}