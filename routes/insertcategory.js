var dbinsert=require('../models/insert')
var mongoose=require('mongoose')

exports.insertcategory=(req,res)=>{
    if(!req.body.category){
        res.json({
            success:false,
            msg:"plsease provide all the details"
        })
       
    } else{
        dbinsert.findOne({category:req.body.category},(err,insData)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"Something went wrong"
                })
            }else if(!insData || insData==null){
                new dbinsert({
                    category:req.body.category,
                    item:[ ]
                }).save((err,saveData)=>{
                    if(err){
                        res.json({
                            success:false,
                            msg:"Please try after sometime"
                        })
                    }else{
                        res.json({
                            success:true,
                            msg:"data insterted",
                            data:saveData
                        })
                    }
                })
            }else{
            
                res.json({
                    success:false,
                    msg:"Item already insterted"
                })
            }
        })
    }
}