const express = require('express')
const multer = require('multer')
let app = express();

app.use(express.json())

const jsToken = require('jsonwebtoken');

const mongoose = require('mongoose');
const User = require('./db/user');
const Ad = require('./db/ad')

mongoose.connect('mongodb://localhost:27017/ShoeStore', (err, connection) => {

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

app.post('/signup-form', upload.single('file'), async (req, res) => {
    try {
        console.log(req.body);
        req.body.pic = req.file.originalname;

        let newUser = new User(req.body)

        await newUser.save()

        res.json({ success: true })

    } catch (e) {
        res.json(e)
    }
})

app.post('/login-form', async (req, res) => {
    try {
        console.log(req.body);
        let userFound = await User.findOne({
            email: req.body.email,
            password: req.body.password
        })

        if (userFound) {
            jsToken.sign({ myIndex: userFound.id }, "cat says mioon", { expiresIn: '1d' }, (err, nishani) => {

                res.json({
                    userFound,
                    nishani
                })

            })

        } else {
            res.json(null)
        }
    } catch (e) {
        res.json(e)
    }
})

app.post('/check-session', async (req, res) => {

    try {

        jsToken.verify(req.body.nishani, "cat says mioon", async (err, verifyHogya) => {

            if (verifyHogya) {

                let user = await User.findById(verifyHogya.myIndex);
                res.json(user);
            } else {
                res.json(null);
            }
            console.log(verifyHogya)
        })

    } catch (e) {
        res.json(null);
    }
});

app.post('/create-ad',upload.single('file'), async (req,res)=>{
    console.log(req.body)
    try{
        req.body.pic = req.file.originalname;
        let ad = new Ad(req.body)

        await ad.save();
        res.json({success:true})
    }catch(e){
        res.json(e)
    }

})

app.use(express.static('./server/build'))
app.use(express.static('./server/uploads'))

app.listen(process.env.PORT || 4433, function () {
    console.log('Server Start');
})