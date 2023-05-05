import React, { useState, useEffect } from 'react'
import {  useSelector, useDispatch } from "react-redux"
import { startGetMenuItems } from '../actions/menuAction'
import { startToggleMenuItems } from '../actions/toggleAction'
import SearchItem from './SearchItem'
import './css/style.css'

const MenuItemList = () => {
      let result = []
     const [menuList, toggleList] = useSelector((state) => {
        console.log('comp',state.toggle.toggle)
         return [state.menu.menu, state.toggle.toggle]
     })
     const [toggle, setToggle] = useState('')
    // console.log('u', menuList)
    
     result = toggleList.map((ele,i) => {
     return ele.type
     })
                    
     const dispatch = useDispatch() 

     useEffect(() => {
       dispatch(startGetMenuItems())
     },[dispatch])
   

     const handleRadio = event => {
        console.log(event.target.value);
        setToggle(event.target.value);
     } 

      useEffect(() => {
        // console.log('ololo' , toggle)
       dispatch( startToggleMenuItems(toggle))
     },[dispatch, toggle])


    return (
        <div>
             <h2 className="text-success text-center">Cafe Order Management</h2> 
                  <h4 className="text-success"  style={{ marginLeft: "50px"}} > Total Items - {menuList.length}</h4> 
                        <div className="toggle Radio" >
                            <div className="radio-child">
                                 <input type="radio"
                                    id="food"
                                    className="radio1"
                                    name="choose"
                                    value="food"
                                    onChange={handleRadio}
                                    checked = { toggle === "food"}  
                            />
                            <label >Food</label>
                            <input type="radio"
                                   id="drink"
                                   className="radio2"
                                   name="choose"
                                   value="drink"  
                                   onChange={handleRadio}  
                                   checked = { toggle === "drink"} 
                             />
                            <label >Drink</label>
                            </div>
                        </div>
                    {
                         result.includes('food') ? (
                             <table className="table  table-striped table-hover" style={{ marginLeft: "50px", width: "1200px"}}>
                    <thead className="bg-secondary">
                        <tr >
                        <th scope="col" >#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toggleList.map((ele,i) => {
                                return <tr   key={i} className="table-light border-success" >
                        <th scope="row">{i}</th>
                        <td >{ele.menuName}</td>
                        <td >{ele.type}</td>
                        <td >{ele.price}</td>
                        </tr>
                            })
                        }
                        </tbody>
                    </table>
                         ) : (
                             <table className="table  table-striped table-hover" style={{ marginLeft: "50px", width: "1200px"}}>
                    <thead className="bg-secondary">
                        <tr >
                        <th scope="col" >#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toggleList.map((ele,i) => {
                                return <tr   key={i} className="table-light border-success" >
                        <th scope="row">{i}</th>
                        <td >{ele.menuName}</td>
                        <td >{ele.type}</td>
                        <td >{ele.price}</td>
                        </tr>
                            })
                        }
                        </tbody>
                    </table>
                         )
                    }
                    <SearchItem />   
        </div>
    )
}

export default MenuItemList

//https://akd3257.medium.com/how-to-make-a-table-in-react-with-hooks-aa55dd8829

// {/* <table border='2'>
//                  <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Type</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {
//                     menuList.map((ele) => {
//                         return <tr>
//                             <td>{ele.name}</td>
//                             <td>{ele.type}</td>
//                             <td>{ele.price}</td>
//                             </tr>
//                     })
//                 }
//                 </tbody>
            // </table>  */}