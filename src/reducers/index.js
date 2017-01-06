import { combineReducers } from 'redux'
import {login,counter} from './login'
//const login = (state = {'login':false},action) => {
//    switch(action.type) {
//        case 'LOGININ':
//            return {'login':true}
//        case 'LOGINOUT':
//            return {'login':false}
//        default:
//            return state
//    }
//}
//const counter = (state = {count:0}, action) => {
//    const count = state.count
//    switch (action.type) {
//        case 'INCREMENT':
//            return {count:count+2}
//        case 'DECREMENT':
//            return {count:count - 1}
//        default:
//            return state
//    }
//}

const reducers = combineReducers({
    login,
    counter
})
//const login = (state = {islogin:true},action) => {
//    switch(action.type) {
//        case 'LOGIN':
//            return Object.assign({}, state, {
//                islogin: true
//            })
//        case 'LOGOUT':
//            return Object.assign({}, state, {
//                islogin: false
//            })
//        default:
//            return state
//    }
//}
//const counter = (state = {count:0}, action) => {
//    const count = state.count
//    switch (action.type) {
//        case 'INCREMENT':
//            return {count:count+2}
//        case 'DECREMENT':
//            return {count:count - 1}
//        default:
//            return state
//    }
//}
export default reducers
//export {login}