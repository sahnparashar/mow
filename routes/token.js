// var jwt=require('jsonwebtoken')



// exports.tokenVerify=(req,res,next)=>{
//     if(!req.header['x-access-token']){

//         res.json({
//             success:false,
//             msg:"you are not authenticated"
//         })
//     }else{
//         jwt.verify(req.headers['x-access-token'],'mow',(err,dec)=>{
//             if(err){
//                 res.json({
//                     success:false,
//                     msg:"Authentication failed"
//                 })
//             }else{
//                 req.dec=dec
//                 next()
//             }
//         })
//     }
// }