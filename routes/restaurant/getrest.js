var dbshow=require('../../models/restaurant')
var mongoose=require('mongoose')
var restname=[]
var ids=[]
var phones=[]
var add=[]
var web=[]

var flag,status=[]

exports.restd=(req,res)=>{

    dbshow.find({},(err,data)=>{
        if(err){
            res.json({
                success:false,
                msg:"No data"
            })
        }else{
        for(let key in data){
            restname.push(data[key].rest_name)
            ids.push(data[key]._id)
            phones.push(data[key].phone)
            add.push(data[key].address)
            web.push(data[key].website)
             let systime=Date().slice(16,21).split(":")
            
            let temp=(parseInt(systime[0])*100)+parseInt(systime[1])
            // console.log(temp)
            let openingTime=data[key].openingTime
            let closingTime=data[key].closingTime
            if(openingTime==closingTime){
                flag="open"
            }
            else if(openingTime<closingTime){
                if(temp>openingTime&&temp<closingTime){
                    flag="open"
                }
                else{
                    flag="closed"
                }
            }
            else if(openingTime>closingTime){
                if((temp>openingTime) && (temp<=2359)){
                    flag="open"
                }
                else if((temp>=0)&&(temp<closingTime)){
                    flag="open"
                }
                else{
                    flag="closed"
                }
            }
            status.push(flag)
            //console.log("openingTime----------",openingTime,"closingTime--------",closingTime,"systime--",temp,"flag------",flag,"---------")
        }
            res.json({
                success:true,
                msg:"restaurantdata",
               name:restname,
            id:ids,
            phone:phones,
            address:add,
            websites:web,
            status:status
       
            

        })
        restname=[],ids=[]  ,phones=[],add=[],web=[],times=[],status=[]
        }
    })
}