const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message,
  });


   const{ID,MechanicalHours} = req.body;

   if(!ID || !MechanicalHours){
    return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
    });
   }

   const depot = new Depot({
    ID,
    MechanicalHours,
   });  

   const{TaskID,Duration,Impact} = req.body;

   if(!TaskID || !Duration || !Impact){
    return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
    });
   }
   const vehicle = new Vehicle({
    TaskID,
    Duration,
    Impact,
   });


};

module.exports = errorHandler;