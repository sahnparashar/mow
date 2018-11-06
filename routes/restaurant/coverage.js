var cover=require('../../models/restaurant')
var mongoose=require('mongoose')

exports.addpin=(req,res)=>{
    if(!req.body.id){
        res.json({
            success:false,
            msg:"please enter the id"
        })
    }else{
        cover.find({},(err,covData)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"something went wrong"
                })
            }else if(!covData){
                res.json({
                    success:false,
                    msg:"no data found"
                })
            }else{
                cover.findOneAndUpdate({_id:req.body.id},{$push:{coverage:req.body.coverage}},(err,data)=>{
                    if(err){
                        res.json({
                            success:false,
                            msg:"data not inserted"
                        })
                    }else{
                        res.json({
                            success:true,
                            msg:"data inserted",
                            coverage:data.coverage
                        })
                    }
                })
            }
        })
    }
}