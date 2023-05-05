import React, {useState, useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { startSearchMenu } from '../actions/searchAction'
import { startAddOrder } from '../actions/orderAction'
import { startDeleteOrders } from '../actions/orderAction'
// import { startGetOrderList } from '../actions/orderAction'


const SearchItem = () => {
     
     const [searchMenu, orders, alertmessage, menuList] = useSelector((state) => {
        // console.log('comp',state.menu.menu)
         return [state.search.search, state.order.addOrder, state.order.alert, state.menu.menu]
     })
    const [search, setSearch] = useState('')
    //console.log('sm', searchMenu)
    console.log('selects', orders)
    // const orders =  useSelector((state) => {
    //     console.log('selects', state.order.addOrder)
    //      return state.order.addOrder
    //  })
    const dispatch = useDispatch()
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
   
    useEffect(() => {
        if(search.length >= 3) {
               console.log('search', search)
            dispatch(startSearchMenu(search))
        }   
     },[search, dispatch])
     
     const addOrder = (ele) => {
        const formData = {
           menuId : ele._id,
           menuName: ele.menuName,
           type: ele.type,
           price : ele.price
        }
        // setOrder()
        dispatch(startAddOrder(formData))
    }



    const findSum = () =>{
      let sum = 0
      orders.forEach((ele)=>{
          sum = sum + ele.menuId.price
        // console.log('iii', ele)
        // return ele.menuId.price
      })
      return sum
    }

    const handleUpdate = (id, menuList) => {
         console.log('h' , id)
        //  orders.filter((fil) => {
             dispatch(startDeleteOrders(id, menuList, orders))
            //  return fil._id !== id
        //  })
    }
    

    //  useEffect(() => {
    //     dispatch(startDeleteOrders(id))
    //  },[dispatch])

    //  useEffect(() => {
         
    //  },[dispatch])

    // useEffect() => {
    //     e.preventDefault()
    //     // const formData = {
    //     //     search : search
    //     // } 
    //     // console.log('f', formData.search)
    //     dispatch(startSearchMenu(search))
    // }
    
      
    return (
        <div>
           <nav className="navbar">
                    <form className="form-inline"  style={{ marginLeft : "80px", width: "450px" , padding : "15px"}}>
                        <input className="form-control border border-success mr-sm-2" type="search" placeholder="Search Item here..." aria-label="Search"  onChange={handleSearch}/>
                    </form>
            </nav>
            <ul className="list-group" style={{ width : "350px", marginLeft: "120px"}}>
                  {
                     searchMenu.length > 0 && searchMenu.map((ele,i) => {
                        console.log('ele', ele.menuName)
                        //  console.log('e', ele._id)
                         return (
                            // <li key={i}>{ele.menuName}</li>
                             <li className="list-group-item border-secondary alert alert-success text-dark d-flex justify-content-between align-items-center" key={i}>
                              {ele.menuName} 
                              <button className="badge badge-secondary  border-success text-dark badge-pill" onClick={() => 
                                addOrder(ele)}>Add</button>
                            </li>
                          )
                     })
                  }
            </ul> 
            <div>
                <hr />
             <h2 className="text-success" style={{marginLeft: "70px"}}>Orders</h2> 
             <div className="alert alert-success" role="alert"  style={{ width: "500px" , margin: "auto"}} >
                {/* This is a success alert—check it out! */}
                  {/* The Hot Chocolate is ready !!! */}
                  {/* {
                    `The ${orders[0].menuId.menuName} is ready !!!` 
                  } */}
                  <strong>{alertmessage}</strong>
                  {/* {
                    orders.forEach((ord,i) => {
                        console.log('ord',ord.menuId.menuName)
                        return ord.menuId.menuName
                    })
                  } */}
             </div>
              <ul style={{ listStyle: 'none'}}>
              {
                    orders.map((item,i) => {
                             console.log('i', item)
                            // console.log('i', item._id)
                        return <li key={i} className="card-text">
            <span className="card text-white bg-secondary mb-3"   style={{ width: "250px" , marginLeft: "50px"}} >   
             { i === 0 && <input  type="checkbox" className="btn btn-success"  onClick = {() => handleUpdate(item._id, menuList)} style={{ marginLeft : "210px", marginTop: "10px", width: "25px", height: "25px", borderColor: "green"}} /> }
            <span className="card-header">{i}</span>
            <div className="card-body">
                {/* <h5 class="card-title">Secondary card title</h5> */}
                {/* <p class="card-text">{menuName}</p> */}  
                           {item.menuId.menuName}
                </div>
                </span>   
                </li>
                })
                }
            </ul>
            {/* {
                orders.map((item,i) => {
                    console.log('p', item.menuId.price)
                    return <p>{item.menuId.price}</p>
                })
            } */}
            <span className="card border-success mb-3"  style={{ width: "250px", marginLeft: "800px", }}>
            <div className="card-header">Amount Due</div>
            <div className="card-body text-secondary">
                {/* <h5 class="card-title">Secondary card title</h5> */}
                <p className="card-text">{findSum()}</p>
                {/* <p className="card-text">220</p> */}
            </div>
            </span>
            </div>
            
        </div>
    )
}

// search >= 0 && <Search />

// 

export default SearchItem


 