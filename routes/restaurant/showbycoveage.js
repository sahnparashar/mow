var showdata=require('../../models/restaurant')
 


exports.show=(req ,res)=>{
    if(!req.body.pin){
        res.json({
            success:false,
            msg:"please give the pincode to search for"
        })
    }else{
        showdata.find({coverage:{$all:[req.body.pin]}},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"Something went wrong"
                })
            }
            else if(!data||data==null){
        
                res.json({
                    success:"false",
                    msg:"not found"
                })
                             }
                else{
                    res.json({
                        success:true,
                        data:data
                    })
                }
        })

    }
}