var resdata=require('../../models/restaurant')
var ids=[],catg,obj,flag=0
exports.showcat=(req,res)=>{
    if(!req.body.id){
        res.json({
           success:false,
           msg:"Please give the id of restaurant" 
        })
    }else{
        resdata.findOne({_id:req.body.id},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"something went wrong"
                })
            }else if(!data){
               res.json({
                   success:false,
                   msg:"restaurant data not found"
               })
            }else{
                catg=data.category
                for(let i=0;i<catg.length;i++){
                    if(catg[i]._id==req.body.catid){
                        obj=catg[i];
                        flag=1;
                    
                    }
                                  }
                if(flag==1){
                res.json({
                    success:true,
                    msg:"restaurant data using id",
                    data:obj
                })
            }
            else{
                res.json({
                    success:false,
                    msg:"category does not exist",
                    data:catg
                })
            }
            }
        })
    }
}