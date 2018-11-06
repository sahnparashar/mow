var dbins=require('../../models/restaurant')
var mongoose=require('mongoose')
var cat;

exports.restinsert=(req,res)=>{
    {cat=req.body.catname;
    if(!cat)
    
    {
        res.json({
            success:false,
            msg:"Please provide all the details"
        })
    }
    else
        dbins.findOne({catname:cat},(err,inData)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"somethig went wrong"
                })
            }else if(!inData||inData==null)
            {
                new dbins({
                    category:{
                        catname:req.body.catname,
                        item:[],
                        price:[],
                        image:[],
                        variant:[]
                    }
                
                }).save((err,saveData)=>{
                    if(err){
                        res.json({
                            success:false,
                            msg:"Please try after some time",
                            errpr:err
                        })
                    }else{
                        res.json({
                            success:true,
                            msg:"data inserted",
                            data:saveData
                        })
                    }
                })
            }else{
                res.json({
                    success:false,
                    msg:"item already inserted"
                })
            }
        })
    }
}   