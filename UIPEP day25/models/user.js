const mongoose = require('mongoose')

const UserScehma = new mongoose.Schema({
    fullname: {type: String, require: true, unique: true},
    email: {type: String, require: true},
    password: {type: String, require: true}
},
    {collection: 'users'})

const Users = mongoose.model('Users', UserScehma)

module.exports = Users