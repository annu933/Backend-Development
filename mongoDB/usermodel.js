const mongoose = require('mongoose');

// connect
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

// shcema
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})

// model
// to perform CRUD operations , have to create model
// module.exports = mongoose.model(modelname, schema)

module.exports = mongoose.model('user', userSchema);