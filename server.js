const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());


MONGO_CONN = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6'
mongoose.connect(MONGO_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to DB")).catch(console.error);


const Todo = require("./Models/Todo")


app.get("/todos", async (req, res) => {
    const todos = await Todo.find();
    //console.log(todos)

    res.json(todos.rows);
})

app.post("/user/signup", async (req, res) => {
    

    const todos = await Todo.find();
    //console.log(todos)

    res.json(todos.rows);
})

app.post("/todos/delete", async (req,res)=>{
    const result = await Todo.findByIdAndDelete(req.body.id);

    res.json(result);
})


app.listen(3001, () => console.log("server started : localhost:3001"));
