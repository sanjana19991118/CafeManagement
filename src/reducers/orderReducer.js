const initialValues = {
    addOrder: [],
    alert: ''

}


const orderReducer = (state = initialValues, action) => {
    //  console.log('s' , state)
    //  console.log('a', action.payload)
      switch(action.type) {
         case "ADD_ORDER" :  {
             return {...state, addOrder: [ ...state.addOrder,action.payload]}
         }
         case "ORDER_UPDATE" : {
             return {...state, addOrder:state.addOrder.filter(ele => ele._id !== action.payload)}
         }
         case "ALERT" : {
            return {...state, alert: action.payload}
         }

          default : {
              return {...state}
          }
      }
} 

export default orderReducer