import axios from 'axios'

export const startAddOrder = (formData) => {
    //  console.log('id', formData)
      return (dispatch) => {
        axios.post('http://localhost:3058/api/order', formData)
        // axios.post('http://localhost:3058/api/order', { menuId : id })
              .then((response) => {
                const res = response.data
                console.log('o', res)

                dispatch(setOrderMenu(res))
              })
              .catch((err) => {
                 alert('2', err)
              })
    }
} 

// export const startSearchMenu = (search) => {
//     // console.log('f', search)
//     return (dispatch) => {
//         axios.get(`http://localhost:3058/api/menuItems/search?menuName=${search}`)
//           .then((response) => {
//               const res = response.data
//               console.log('r' , res)
//             //   if(search.length >= 3){
//                 dispatch(setSearchMenu(res))
//             //   }  
//           })
//           .catch((err) => { 
//             // localhost:3058/api/menuItems/search?menuName=Oreo biscuit
//              alert(err)
//           })
//     }
// }

const setOrderMenu = (order) =>  {
    // console.log('m', order)
    return {
      type: "ADD_ORDER",
      payload: order
    }
}


export const startGetOrderList = () => {
      return (dispatch) => {
        axios.get('http://localhost:3058/api/order')
              .then((response) => {
                const ord = response.data
                // console.log('ol', ord)
                dispatch(setOrderList(ord))
              })
              .catch((err) => {
                 alert('3', err)
              })
    }
} 


const setOrderList = (orderList) =>  {
    // console.log('m', orderList)
    return {
      type: "ORDER_LIST",
      payload: orderList
    }
}


export const startDeleteOrders = (id, menuList,orders) => {
    console.log('d', id)
      return (dispatch, getState) => {
        // console.log('gg' , getState)
        axios.put(`http://localhost:3058/api/order/update/${id}`)
              .then((response) => {
                const ord = response.data
                // console.log('ml', menuList)
                // console.log('oll', orders)
                console.log('gs', getState())
                const menuItem = getState().order.addOrder.find(ele => ele._id === ord._id)
                // console.log('mi', menuItem)
                // console.log('mi', menuItem.menuId)
                // console.log('mi', menuItem.menuId.menuName)
                const msg = `The ${menuItem.menuId.menuName} is complete !!!`
                console.log('ol', ord._id)
                dispatch(setDelete(ord._id))
                dispatch(setNotice(msg))
              })
              .catch((err) => {
                 alert(err)
              })
    }
} 


const setDelete = (id) =>  {
    // console.log('m', orderList)
    return {
      type: "ORDER_UPDATE",
      payload: id
    }
}

const setNotice = (msg) => {
    return {
         type: "ALERT",
         payload: msg   
     }
}






