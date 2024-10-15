const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken"); 

//REGISTER
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email:req.body.email,
        password:CryptoJs.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });


    try{
        const user = await newUser.save()
        res.status(201).json(user)
    }catch(err){
        res.status(500).json(err)
    }

});

//LOGIN
router.post("/login", async (req,res)=>{
    try{
        const user = await User.findOne({email: req.body.email})
        !user && res.status(401).json("Wrong password or username!")

        const bytes = CryptoJs.AES.decrypt(user.password, process.env.SECRET_KEY);
        const ogPassword = bytes.toString(CryptoJs.enc.Utf8);

        ogPassword !== req.body.password &&
            res.status(401).json("Wrong password or username!")

            const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, 
                process.env.SECRET_KEY,{expiresIn: "5d"});

        const {password, ...info} = user._doc

        res.status(200).json({...info, accessToken})

    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;
