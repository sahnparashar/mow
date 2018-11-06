var dblogin=require('../models/insert')
exports.additem=(req,res)=>{
    if(!req.body.category||!req.body.item){
        res.json({
            success:false,
            msg:"plsease enter all the detals"
        })
    }else {
        dblogin.findOne({category:req.body.category},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"somethong wernt wrong"
                })
            }else if(!data){
                res.json({
                    success:false,
                    msg:"usernot found"
                })
            } else{
                dblogin.findOneAndUpdate({category:req.body.category},{$push: {item:req.body.item}},(err,data)=>{
                    if(err){
                        res.json({
                            success:false,
                            msg:"u r need to think more to run this code"
                        })
                    
                    }else{
                        res.json({  success:true,
                            msg:"Data updated"})
                      
                    }
                })
            }
        })
    }
}