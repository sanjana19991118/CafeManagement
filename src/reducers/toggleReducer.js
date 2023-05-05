const initialValues = {
    toggle: []
}


const toggleReducer = (state = initialValues, action) => {
     console.log('s' , state)
    //  console.log('toggle', toggle)
    //  console.log('a', action.payload)
      switch(action.type) {
          case "SET_MENU_TOGGLE" :  {
             return {...state, toggle:action.payload}
         }

          default : {
              return {...state}
          }
      }
} 

export default toggleReducer