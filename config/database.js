const mongoose = require('mongoose')
const  configDB = () => {
     mongoose.connect('mongodb://localhost:27017/order')
         .then(() => {
            console.log('connected to database successfully')
         })
         .catch(() => {
             console.log('error connecting the database')
         })
}

module.exports = configDB
