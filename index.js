const express = require('express');
const {connections} = require('./db');
const { userRouter } = require('./Routes/userRoutes');
const {noteRouter} = require("./Routes/noteRoutes");
const dotenv = require('dotenv').config;
const cors = require('cors');
const app = express();

const PORT = process.env.PORT
app.use(cors())
app.use(express.json());
app.use("/users" , userRouter)
app.use("/note" , noteRouter);

app.get("/" , (req, res) => {
     res.send("Homepage")
})


app.listen(PORT, async() => {
    try{
        await connections
        console.log(`server is running on port ${PORT} and db is also connected`)
    }catch(error){
        console.log(error)
    }
    
})

