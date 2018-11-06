var express=require('express')
var app=express()
var mongoose=require('mongoose')
var config=require('./config/config')
var routes=require('./routes/routes')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const PORT = process.env.port || config.port


mongoose.connect(config.mongo,(err,data)=>{
    if(err){
        console.error("Database not connected..",err);
    }
    else{
        console.log("Database connected");
    }
})
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use('/user',routes)

  app.use('/', express.static(__dirname + '/dist'));
app.use((req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
});

app.listen(PORT, () => {
    console.log("Sevrer started",PORT)
});
