var restsign=require('../../models/restaurant')
var mongoose=require('mongoose')

exports.rsignup=(req,res)=>{
    if(!req.body.name||!req.body.phone||!req.body.email||!req.body.rest_name||!req.body.password)
    {
        res.json({
            success:false,
            msg:"please enter all the details"
        })
    }
    else
    {
        restsign.findOne({email:req.body.email},{phone:req.body.phone},(err,signData)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"Something went wrong"
                })
            }
            else if(!signData||signData==null)
            {
                new restsign({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password,
                    phone:req.body.phone,
                    rest_name:req.body.rest_name,
                    website:req.body.website,
                   openingTime:req.body.openingTime,
                   closingTime:req.body.closingTime,
                    address:{
                        city:req.body.city,
                        landmark:req.body.landmark,
                        pincode:req.body.pincode,
                        street:req.body.street,
                        lane:req.body.lane

                    },
                   coverage:[req.body.pincode]             
                   }).save((err,resData)=>
                {
                    if(err)
                    {

                        res.json({
                            success:false,
                            msg:"error check console",
                            err:err
                        })
                    }
                    else{
                        res.json({
                            success:true,
                            msg:"Registration done..Please login to continue"
                        })
                    }
                })
            }else{
                res.json({
                    success:false,
                    msg:"YOu r already Registered"
                })
            }
        })
    }
}

exports.restlogin=(req,res)=>{
    if(!req.body.email||!req.body.password){

        res.json({
            success:false,
            msg:"please enter all the details"
        })
    }else{


        restsign.findOne({email:req.body.email},(err,login)=>{
            if(err){
                res.json({
                    success:false,
                    msg:"please try after sometimes"
                })
            }else if(!login ||login==null){
                res.json({
                    success:false,
                    msg:"plesase register first"
                })

            }
            else if(login.password!=req.body.password){
                res.json({
                    success:false,
                    msg:"Incorrect Password"
                })
            }else{
                // var tokenD={
                //     name:login.name,
                //     email:login.name
                // }
                // var token=jwt.sign(tokenD,'mow')

                res.json({
                    success:false,
                    // token:token,
                    msg:"login Done"

                })
            }
        })
    }
}