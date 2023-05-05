import axios from 'axios'
 
export const startGetMenuItems = () => {
     return(dispatch) =>  {
          axios.get('http://localhost:3058/api/menuItems')
              .then((response) => {
                  const result = response.data
                //   console.log('r', result)
                  dispatch(setMenuItem(result))
              })
              .catch((err) => {
                 alert(err)
              })
     }
}


const setMenuItem = (menu) =>  {
    // console.log('m', menu)
    return {
      type: "SET_MENU",
      payload: menu
    }
}

