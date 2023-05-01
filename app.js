const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const cors = require("cors");
const dotenv = require("dotenv");
const app = express()
app.use(express.json());

// middleware

app.use(cors());

// env
dotenv.config();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

mongoose
.connect(process.env.DB_CONNECTION, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
   })
   .then((x) => {
     console.log("Connect to DB");
   })
   .catch((err) => {
     console.error("Error connecting to mongo", err);
   });

app.use("/api/", require("./routes/router"));

app.listen(8080,()=>{
 console.log('server up and running')
})
