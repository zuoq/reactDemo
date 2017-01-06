const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const INCREMENT = 'INCREMENT'
const TO_LOGIN = 'TO_LOGIN'
const TO_REGISTER = 'TO_REGISTER'
export const count = () => ({type:INCREMENT})
export const logout = () => ({type:LOGOUT})
export const toLogin = (to) => ({type:TO_LOGIN,loginOrReg:to})
export const toRegister= (to) => ({type:TO_REGISTER,loginOrReg:to})