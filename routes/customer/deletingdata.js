var deleted=require('../../models/login')
exports.deletedata=(req ,res)=>{
    if(!req.body.email)
    {
        res.json({
            success:false,
            msg:"please provide email to delete data"
        })
    }else
    {
        deleted.findOne({email:req.body.email},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"something went wrong"
                })
            }else if(!data){
                res.json({
                    success:false,
                    msg:"No data matched to delete"
                })
            }else{
                deleted.findOneAndRemove({email:req.body.email},(err,data)=>{
                    if(err){
                        res.json({
                            success:false,
                            msg:"find error",
                            err:err
                        })
                    }else{
                        res.json({
                            success:true,
                            msg:"data deleted",
                            updated:data
                        })
                    }
                })
            }
        })
    }
}