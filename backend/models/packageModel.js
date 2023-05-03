const {Schema, model} = require('../connection');     

const mySchema = new Schema({
    state : String,
    city : String,
    price : Number,
    duration : String,
    description : String,
    image : String,
});



module.exports = model('package', mySchema);