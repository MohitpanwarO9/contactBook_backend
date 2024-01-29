const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require('./config/dbConnection')

connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server is running at a port ${port}`);
})

app.use(express.json());
app.use('/api/users',require("./routes/userRoutes"));
app.use('/api/contacts',require("./routes/contactRoutes"));

