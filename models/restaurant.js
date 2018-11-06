var mongoose=require('mongoose')
var Schema=mongoose.Schema

var restsign=new Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        requied:true,
        unique:true
    },
    website:{
                type:String

    },
    openingTime:{
        type:Number,
        required:true
    },
    closingTime:{
        type:Number,
        required:true
    },
    rest_name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
password:{
   type:String,
   required:true,

},
rest:{ 
    type:String

},
address:{
  city:{
      type:String,
      required:true
  },
  pincode:{
      type:Number,
      requied:true,
     
  },
  street:{  type:String,
    required:true
},
  lane:{
      type:String,
      required:true
  },
  landmark:{
      type:String,
      required:true
  },

}
,
coverage:[{type:Number}],
category:[{
    catname:{
        type:String,
        
    },
    item:[{
        type:String,

    }],
    price:[{
        type:Number,

    }],
    image:[{
        type:String
    }],
    variant:[{
        type:String
    }]
 } ]



})

module.exports=mongoose.model('restaurant',restsign)