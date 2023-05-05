const MenuItems = require('../models/menuItem')
const menuItemsController = {}


menuItemsController.list = (req,res) => {
   MenuItems.find()
      .then((menu) => {
         // console.log(menu)
          res.json(menu)

      })
      .catch((err) => {
          res.json(err)
      })
}

menuItemsController.create = (req,res) => {
    const body = req.body
    const menu = new MenuItems(body)
         menu.save()
            .then((menu) => {
               res.json(menu)
            })
            .catch((err) => {
               res.json(err)
            })
}

 menuItemsController.show = (req,res) => { // search 
     const { menuName } = req.query
     console.log(menuName)
     MenuItems.find({ 'menuName' : { $regex : menuName , $options: "i"}})
        .then((menu) => {
            // console.log(menu)
            res.json(menu)
        })
        .catch((err) => {
            res.json(err)
        })
 }

  menuItemsController.toggle = (req,res) => { // search 
    //  const body = req.body
    //  console.log(req.body)
    //localhost:3058/api/menuItems/toggle
     const { type } = req.query
     console.log(type)
     MenuItems.find({ 'type' : { $regex : type , $options: "i"}})
        .then((menu) => {
            console.log(menu)
            res.json(menu)
        })
        .catch((err) => {
            res.json(err)
        })
 }


module.exports = menuItemsController