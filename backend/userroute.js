const mongoose = require("mongoose");



mongoose.connect('mongodb+srv://CTask:CTask@cluster0.3em5z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useFindAndModify: false }).then(e => {
    console.log('config connected')
}).catch(err => {
    console.log(err.message)
})

var plm = require("passport-local-mongoose");



var b = mongoose.Schema({

    username: String,

    password: String,

})

b.plugin(plm)

module.exports = mongoose.model("alluser", b);
