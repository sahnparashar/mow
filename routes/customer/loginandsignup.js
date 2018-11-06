var dbLogin = require('../../models/login');
const jwt = require("jsonwebtoken");
const randomstring = require("randomstring");
var nodemailer = require('nodemailer');
require('dotenv').config();
var express = require('express')
var router = express.Router()
const tokenstring = randomstring.generate();
// var bcrypt = require('bcrypt');

exports.signup = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.phone || !req.body.password) {
        res.json({
            success: false,
            msg: "enter all signup details"
        })
    } else {
        dbLogin.findOne({ email: req.body.email }, (err, loginData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Something went wrong."
                })
            }


            else if (!loginData || loginData == null) {
                new dbLogin({
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                    //this hashpassword fn is imported from login.js
                    password: dbLogin.hashPassword(req.body.password),
                    Createdon: Date.now(),
                    updatedon: Date.now(),
                    token: tokenstring,
                    active: false
                }).save((err, savedData) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: "phone number is already registered"
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: "Registration done. Please login to continue." + process.env.Email
                        })

                        var transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: process.env.EMAIL,
                                pass: process.env.PASS
                            }
                        });

                        let mailOptions = {
                            from: '"MEALS ON WHEELS" <onwheelmeals@gmail.com>', // sender address
                            to: req.body.email, // list of receivers
                            subject: 'Please verify your email', // Subject line
                            text: 'You need to verify your email by clicking on this link', // plain text body
                            html: '<h1>please click on this email</h1> <br> <a href="http://localhost:5678/login/verify">link</a>  <br> and your token is <br> ' + tokenstring  // html body
                        };

                        transporter.sendMail(mailOptions, function (err, info) {
                            if (err)
                                console.log(err)
                            else
                                console.log(info);
                        });













                    }
                })
            }


            else {
                res.json({
                    success: false,
                    msg: "You have already registered."
                })
            }


        })


    }
}

exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Please enter all details."
        })
    }
    else {
        dbLogin.findOne({ email: req.body.email }, (err, login) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Please try after some time."
                })

            }
            else if (!login || login == null) {
                res.json({
                    success: false,
                    msg: "Please register first."
                })
            }

            else if (true) {
                // to fill the schema column updatedon
                var date = Date.now();

                dbLogin.findOneAndUpdate({ email: req.body.email }, { $set: { updatedon: Date.now() } }, (err, data) => {

                    if (err) {
                        res.json({
                            msg: "yup"
                        })
                    }
                })
                ///////////////////////////////////
                // to check wheater the account is active or not
                if (login.active == false) {
                    res.json({
                        msg: "please"
                    })
                }

                else {

                    // main work fter successful login and active acccunts

                    let token = jwt.sign({ user: login.email }, 'sparks2k16', { expiresIn: '3h' })

                    res.json({
                        token: token,
                        msg: token
                    })
                }
            }
            else (
                res.json({
                    msg: "password is inccorect"
                })
            )

        })
    }
}

function verifyToken(req, res, next) {
    let token = req.query.token;
    jwt.verify(token, 'sparks2k16', function (err, tokendata) {
        if (err) {
            res.json({
                msg: err
            })
        }
        else {

        }
    })
}






            // if (err) {
            //     res.json({
            //         success: false,
            //         msg: "Please try after some time."
            //     })
            // } else  if (!login || login == null) {
            //         res.json({
            //             success: false,
            //             msg: "Please register first."
            //         })
            // }
            // } else if (dd.isValid(req.body.password)) {
            //     res.json({
            //         success: false,
            //         msg: "password is correct"
            //     })

            // } else if(login.active == false) 
            // {
            //     res.json({
            //         success:false,
            //         msg:"please"
            //     })
            // }
            // else {



            // // );
            // //     // var date=Date.now();
            // //     // res.json({
            // //     //     msg:date
            // //     // })
            // dbLogin.findOneAndUpdate({email:req.body.email},{$set: {updatedon:Date.now()}},(err,data)=>{

            //     if(err){
            //         res.json({
            //             msg:"yup"
            //         })
            //     }
            // })                
            // }

