var dbinsert=require('../models/insert')
var mongoose=require('mongoose')
exports.finditem=(req ,res)=>{
    dbinsert.findOne({category:req.body.category},(err,data)=>
{
    if(err){
        res.json({
            success:false,
            msg:"not found"
        })
    }else{
        res.json({
            success:true,
            msg:"Specifically category",
            data:data,
        
        })
    }
})
}
exports.findcategory=(req,res)=>{
    dbinsert.find({},(err,data)=>{
        if(err){
            res.json({
                success:false,
                msg:"not data"
            })
        }else{
            res.json({
                success:true,
                msg:"All category",
                data:data
            })
        }
    })
}