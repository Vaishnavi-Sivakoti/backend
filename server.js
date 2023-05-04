//server to connect to database and port number

const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./route/route');
const cors = require('cors');

app.use(cors(
  {
    origin: "http://localhost:3000"
  }

));

app.listen(9999,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});

mongoose.connect("mongodb://0.0.0.0:27017/alumini",{useNewUrlParser: true,  useUnifiedTopology: true },
function checkDb(error)
{
    if(error)
    {
        console.log("Error Connecting to DB");
    }
    else
    {
        console.log("successfully Connected to DB");
    }
});
app.use(express.json());
app.use(routes);