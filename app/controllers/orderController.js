const Order = require('../models/order')
const orderController = {}

orderController.list = (req,res) => {
    Order.find({status: false}).populate('menuId')
      .then((order) => {
        console.log(order)
         res.json(order)
      })
      .catch((err) => {
          res.json(err)
      })
}

orderController.create = (req, res) => {
     const body = req.body
     const ord = new Order(body)
       ord.save()
         .then((order) => {
            Order.findById(order._id).populate("menuId")
                .then((orders) => {
                    console.log('ooo', orders)
                     res.json(orders)
                })
                .catch((err) => {
                     res.json(err)
                })
            console.log('oo', order)
            //  res.json(order)
         })
         .catch((err) => {
             res.json(err)
         })
}

orderController.show = (req,res) => {
   const id = req.params.id
       Order.find()
       .then((order) => {
        // console.log(req.userId)
          res.json(order)
       })
       .catch((err) => {
          res.json(err)
       })
}

orderController.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    Order.findByIdAndUpdate(id, { status : true }, {new: true, runValidators : true }).populate('menuId')
         .then((ord) => {
             res.json(ord)
         })
         .catch((err) => {
             res.json(err)
         })
}


// orderController.delete = (req,res) => {
//     const id = req.params.id
//     Order.findByIdAndDelete(id)
//          .then((ord) => {
//              res.json(ord)
//          })
//          .catch((err) => {
//              res.json(err)
//          })
// }


module.exports = orderController