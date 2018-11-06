var dbLogin = require('../models/login');

process.env.MY_VARIABLE = 'tk';
var tk="";
var lk="";
exports.verify = (req,res) => {
            tk=req.body.token;
            
    if (!tk || tk==null)
    {
        res.json({
            msg:"nulled"
         })
    }

   else {
dbLogin.findOne({ token: tk}, (err, verifydata) => {

    // lk=verifydata.token;
 if(err)
 {
     res.json({
        msg:err
     }) }
     
    //  tk=verifydata.token;
    //  console.log(tk);
     else if(!verifydata||verifydata==null){
         res.json({
             success:false,
             msg:"notfound"
         })
     }
      else if(verifydata.active==true){
        res.json({
            msg:"yOUR ACCOUNT IS ALREADY ACTIVE"
        })

      }
     else if (verifydata.token == req.body.token)
     {
       res.json({
        msg:"found"
       })
       dbLogin.findOneAndUpdate({token: tk},{$set: {active: true}},(err,data)=>{
          if(err)
        {
            console.log(err);
        }
        console.log(data);
       })

      
    


     }
     
 
})
}

}