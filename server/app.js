const express = require('express')
const multer = require('multer')
let app = express();

app.use(express.json())

const mongoose = require('mongoose');
const User = require('./db/user');

mongoose.connect('mongodb://localhost:27017/ShoeStore', (err, connection)=>{

    console.log(err || connection)

});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, 'server/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage })

app.post('/signup-form' , upload.single('file') , async (req, res)=>{
    try{
        console.log(req.body);
        req.body.pic = req.file.originalname;

        let newUser = new User(req.body)
        
        await newUser.save()
        
        res.json({success : true})

    }catch(e){
        res.json(e)
    }
})

app.post('/login-form' , async(req,res)=>{
    try{
        console.log(req.body);
        let userFound =await User.findOne({
            email : req.body.email,
            password: req.body.password
        })

        if(userFound){
            res.json({userFound})
            // console.log('Login Successful');
        }else{
            res.json(null)
        }
    }catch(e){
        res.json(e)
    }
})

app.use(express.static('./server/build'))
app.use(express.static('./server/uploads'))

app.listen(process.env.PORT ||4433, function () {
    console.log('Server Start');
})