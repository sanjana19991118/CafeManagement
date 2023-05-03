const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
      menuName: {
        type : String,
        required: true
      }, 
      type: {
         type: String,
         required: true
      },
      price : {
          type: Number,
          required: true
      }
})


const MenuItems = mongoose.model('MenuItems', menuSchema)
module.exports =  MenuItems