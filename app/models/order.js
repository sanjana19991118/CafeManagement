const mongoose = require('mongoose')
const Schema = mongoose.Schema
const orderSchema = new Schema({
     menuId:{
        type: Schema.Types.ObjectId,
        ref: 'MenuItems',
        required :true
     },
     status : {
        type : Boolean,
        default : false
     }
})

const Order = mongoose.model('Order', orderSchema)
module.exports =  Order