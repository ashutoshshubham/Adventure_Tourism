
const {Schema, model, Types} = require('../connection');  
const mySchema = new Schema({
    package : {type : Types.ObjectId, ref: 'package'},
    user : {type : Types.ObjectId, ref: 'users'},
    amount : Number,
    paymentDetails : String,
    createdAt: Date,
})

module.exports = model('book', mySchema);