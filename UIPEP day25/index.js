const express = require('express')
const path = require('path')
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const accessTokenSecret = "dasdfkjdfhkh1231798174jkfjkgkjdgkjb@#@"
const User = require('./models/user')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/localdb', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const app = express()

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/login',(req,res) => {
    res.render('login')
})

app.get('/register',(req,res) => {
    res.render('register')
})

app.post('/login', async(req,res) => {
    
    const { fullname, password } = req.body
	const user = await User.findOne({ fullname }).lean()

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

    const token = jwt.sign({
        id: user._id,
        fullname: user.fullname
    },accessTokenSecret)

    if(await bcrypt.compare(password, user.password)){
        return res.json({ status: 'ok', data: token })
    }

    return res.json({ status: 'error', error: 'Invalid username/password' })
})

app.post('/register',  async (req,res) => {
    const {fullname, email, password: pass} = req.body
    const password = await bcrypt.hash(pass, 10)

    if(pass.length < 5){
        return res.json({
            status: 'error',
            error: 'Password is too short'
        })
    }
    try {
        const response = await User.create({
            fullname,
            email,
            password
        })
    } catch (error) {
        return res.json({status: 'error', error:'Username already in use'})   
    }
    res.json({status: 'ok'})
})

app.listen(3000, () => {
    console.log("Server running at port 3000")
})
