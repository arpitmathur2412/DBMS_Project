const { pool } = require('../config/db.js')
const express = require("express");
const body_parser = require("body-parser");

const app = express()

app.use(express.json())
app.use(body_parser.urlencoded({ extended: true }));
const router = express.Router();

router.get("/", (req, res) => {
    pool.query("select * from allocated_room", (err, result) => {
        if (err) {
            res.send(err);
        }
        else res.send(result);
    })
    // res.send("this is student");
})

router.post("/insert", (req, res) => {
    pool.query("insert into allocated_room set ?", req.body, (err, result) => {
        if (err) {
            res.send(err)
        }
        else res.send(result)
    })
})

router.delete("/delete/:id", (req, res) => {
    pool.query("delete from allocated_room where roll_no=?", req.params.id, (err, result) => {
        if (err) {
            res.send(err)
        }
        else res.send(result)
    })
})

// router.update("/update/:id",(req,res)=>{
//     const data=[req.body.name,]
//     pool.query("insert into student set ?",req.body,(err,result)=>{
//         if(err){
//             res.send(err)
//         }
//         else res.send(result)
//     })
// })


module.exports = router;