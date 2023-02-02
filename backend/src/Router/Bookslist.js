const express = require("express");
const Books = require("../Model/books");
const router = express.Router();
// activity: String,
// status: String,
// action: String,
// date: String,
// time: String,
router.post("/",async(req,res)=>{
    try {
        const BooksData = await Books.create({
          activity : req.body.activity,
          status : req.body.status,
          action : req.body.action,
          date: req.body.date,
          time : req.body.time,
          user : req.user
        });
        res.status(200).json({
          status: "Success",
          BooksData,
        });
      } catch (e) {
        res.status(500).json({
          status: "Failed",
          message: e.message,
        });
      }
})

router.get("/",async(req, res) => {
    try {
      const BooksData = await Books.find();
      res.status(200).json({
        status: "Success",
        BooksData,
      });
    } catch (e) {
      res.status(500).json({
        status: "Failed",
        message: e.message,
      });
    }
  });

router.put("/:id",async (req,res)=>{
  try{
    const BooksData = await Books.findOneAndUpdate({_id: req.params.id}, req.body);

    res.status(200).json({
        status: "Success",
        BooksData
  })}catch(e){
    res.status(500).json({
      status: "failed",
      message: e.message
  })
}});
  
router.delete("/:id",async (req,res)=>{
  try{
    const BooksData = await Books.deleteOne({_id : req.params.id});

          res.status(200).json({
              status: "Sucess",
              BooksData
          })
  }catch(e){
    res.status(500).json({
            status: "failed",
            message: e.message
         })
  }
})
router.get("*", (req, res) => {
  res.status(404).json({
      status: "failed",
      message: "Invalid request"
  })
});

module.exports = router;

