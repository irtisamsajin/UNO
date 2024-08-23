const express=require('express');
const cors = require('cors');
const dotenv=require('dotenv');
const newGame=require('./Routes/newGame');

const app=express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/newGame",newGame);

app.post('/',(req,res) => {
    console.log(req.body);
    console.log("Reached Server");
})

app.listen(process.env.PORT,() => {
    console.log(`Server is listening on port ${process.env.PORT}`)
})