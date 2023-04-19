const { pool } = require('./config/db')
const express = require("express");
const body_parser = require("body-parser");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())
app.use(body_parser.urlencoded({ extended: true }));
app.use("/api/student", require("./routes/student.js"));
app.use("/api/staff", require("./routes/staff.js"));
app.use("/api/unallocated_room", require("./routes/unallocated_room.js"));
app.use("/api/warden", require("./routes/warden.js"));
app.use("/api/wing", require("./routes/wing.js"));
app.use("/api/allocated_room", require("./routes/allocated_room.js"));
app.use("/api/department", require("./routes/department.js"));
app.get("/", (req, res) => {
    res.send("Hello everyone")
})

app.listen(5000, () => {
    console.log("server started at http://localhost:5000");
})

