var mongoose=require('mongoose')
var Schema=mongoose.Schema
// var bcrypt=require('bcrypt')




var login=new Schema({

    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        
    },
    token:{
        type:String   
    },
    active:{
        type:Boolean
    }
    ,
    Createdon:{
        type:Date
    },
    updatedon:{
        type:Date
    },
    submitted:{
        type:String
    }

}) 
login.statics.hashPassword= function hashPassword(password){
    // return bcrypt.hashSync(password,10)
    return 0;
}


module.exports=mongoose.model('customer',login)