const login = (state = {islogin:false},action) => {
    switch(action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                islogin: false,
                loginOrReg:action.loginOrReg

            })
        case 'LOGOUT':
            return Object.assign({}, state, {
                islogin: false
            })

        case 'TO_LOGIN':
            return Object.assign({}, state, {
                islogin: false,
                loginOrReg:action.loginOrReg
            })

        case 'TO_REGISTER':
            return Object.assign({}, state, {
                islogin: false,
                loginOrReg:action.loginOrReg
            })
        default:
            return state
    }
}
const counter = (state = {count:0}, action) => {
    const count = state.count
    switch (action.type) {
        case 'INCREMENT':
            return {count:count+2}
        case 'DECREMENT':
            return {count:count - 1}
        default:
            return state
    }
}
export {login,counter}

