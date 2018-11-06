var mongoose=require('mongoose')
var Schema=mongoose.Schema

var order=new Schema({
    rest_id:String,
    cust_id:String,
    item:[{
        itemname:[{type:String}],
        quantity:Number,
        categoryName:[{
            type:String,
        }],
        variant:{type:String},
        datetime:{
            type:String
        },
        total:{
            type:Number
        }
 
    }],
    status:String,
    address:[{
      landmark:{
          type:String,

      },
      street:{
          type:String
      }

    }]
})
module.exports=mongoose.model('orderdata',order)