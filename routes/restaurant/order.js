var add=require('../../models/order')
var mongoose=require('mongoose')
exports.orderadd=(req,res)=>{
    if(!req.body.customerid||!req.body.restaurantid){
        res.json({
            success:false,
            msg:"please provide the restaurantid and customerid"
        })
    }else{
        new add({
            item:{
                itemname:req.body.itemname,
                quantity:req.body.quantity,
                categoryName:req.body.categoryname,
                variant:req.body.variant,
                datetime:Date(),
               
                
            },
address:{
    landmark:req.body.landmark,
    street:req.body.street
},
status:"confirm"
        }).save((err,data)=>{
            if(err){
                res.json({
                    success:false,
                    err:err,
                    msg:"try after sometime"
                })
            }else{
                res.json({
                    success:true,
                    msg:"data inserted",
                    data :data
                })            }
        })
    }
}