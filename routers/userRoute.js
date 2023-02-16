const express=require('express');
const router=express.Router();

router.post("/twofactorauth", (req, res)=>{
    try{   
        const user_key = req.body.user_keys
        var secret = speakeasy.generateSecret({
            name:user_key
        })
        console.log(secret)
        qrcode.toDataURL(secret.otpauth_url, function(err, data){
            // console.log(data);
            return res.status(200).json({status:true,data:"Data Send successfully",key:secret.ascii,message:data})
        }) 
 
    }catch(error) {
        res.status(400).send(error);
    }
})

router.post("/userverify", (req, res)=>{
    try {
        
        const user_token = req.body.user_tokens
        const secret_key = req.body.secret
        const verified = speakeasy.totp.verify({ 
            secret: secret_key,
            encoding: 'ascii',
            token: user_token, 
        });
            console.log(user_token)
            console.log(verified)
        return res.status(200).json({status:true,data:"Data fetches successfully",message:verified})

    } catch (error) {
        
    }
    res.render('login')
})

module.exports=router