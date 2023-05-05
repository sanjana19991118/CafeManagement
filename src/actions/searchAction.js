import axios from 'axios'

export const startSearchMenu = (search) => {
    // console.log('f', search)
    return (dispatch) => {
        axios.get(`http://localhost:3058/api/menuItems/search?menuName=${search}`)
          .then((response) => {
              const res = response.data
            //   console.log('r' , res)
            //   if(search.length >= 3){
                dispatch(setSearchMenu(res))
            //   }  
          })
          .catch((err) => { 
            // localhost:3058/api/menuItems/search?menuName=Oreo biscuit
             alert(err)
          })
    }
}

const setSearchMenu = (menu) =>  {
    // console.log('m', menu)
    return {
      type: "SEARCH",
      payload: menu
    }
}


