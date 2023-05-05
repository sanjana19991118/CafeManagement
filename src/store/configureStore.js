import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import menuReducer from '../reducers/menuReducer'
import searchReducer from '../reducers/searchReducer'
import toggleReducer from '../reducers/toggleReducer'
import orderReducer from '../reducers/orderReducer'


const configureStore = () => {
    const store = createStore(combineReducers({
       menu : menuReducer,
       search : searchReducer,
       toggle : toggleReducer,
       order: orderReducer
    }), applyMiddleware(thunk))
    return store
}

//ES5 - callback
//ES6 - promises
//ES7 - async and await features ( in try and await )


// npm install redux@4.0.5
// 2) npm install react-redux@7.2.2 --force
// 3) npm install redux-thunk@2.3.0 -- force 


export default configureStore

// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import budgetReducer from '../reducers/budgetReducer'
// import categoryReducer from '../reducers/categoryReducer'
// // import expenseReducer from '../reducers/expenseReducer'
// import userReducer from '../reducers/userReducer'


// const configureStore = () => {
//     const store = createStore(combineReducers({
//           budget : budgetReducer,
//           category : categoryReducer,
//     //    expenseReducer : expenseReducer,
//           user: userReducer
//     }), applyMiddleware(thunk))
//     return store
// }

// export default configureStore

// we do not want to export a variable from the file , so we have the function