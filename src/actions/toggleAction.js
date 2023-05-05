import axios from 'axios'

export const startToggleMenuItems = (type) => {
    console.log('tt', type)
     return(dispatch) =>  {
          axios.get(`http://localhost:3058/api/menuItems/toggle?type=${type}`)
              .then((response) => {
                  const result = response.data
                  console.log('r', result)
                  dispatch(setToggleMenuItem(result))
              })
              .catch((err) => {
                 alert(err)
              })
     }
}


const setToggleMenuItem = (type) =>  {
    // console.log('m', menu)
    return {
      type: "SET_MENU_TOGGLE",
      payload: type
    }
}
