/**
 * Created by izqcool on 2016/10/2.
 */

import React from 'react'
import ReactDom from 'react-dom'
//import { createStore } from 'redux'
import { connect } from 'react-redux'
import LeftBar from '../../components/leftbar'
import Login from '../../components/login'
import RightTest from '../../components/right'
import Footer from '../../components/footer'
import * as actions from '../../actions'


class loginPage extends React.Component {
    //constructor(props) {
    //    super(props);
    //}


    render () {
        let picText = {
            h1: '简书',
            h2: '交流故事，沟通想法',
            p: '一个基于内容分享的社区',
            btn: '提笔篇文章'
        };

        let hasLeftPic = 'false';
        const {login,logOut,toLogin,toRegister,loginOrReg} = this.props

        //const {value} = this.props
        //console.log(store)
        return (
            <div>
                <LeftBar picText={picText} />
                <Login loginOrReg={loginOrReg} toLogin={toLogin} toRegister={toRegister} />
                <RightTest login={login} logOut={logOut} toLogin={toLogin} toRegister={toRegister}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    //const count = state.count
    console.log(state)
    const login = state.login.islogin
    const loginOrReg = state.login.loginOrReg
    return {
        login,
        loginOrReg
    }
}

//console.log(state.count);
//const mapDispatchToProps = dispatch => ({
//    loginClick: ()=> console.log(this)
//})

const mapDispatchToProps = (dispatch) => {
    return {
        //onIncreaseClick: ()=> {
        //    dispatch(actions.count())
        //},
        logOut: () => {
            dispatch(actions.logout())
        },
        toLogin: () => {
            dispatch(actions.toLogin("toLogin"))
        },
        toRegister: () => {
            dispatch(actions.toRegister("toRegister"))
        }
    }
}
const loginPageComponent = connect(mapStateToProps,mapDispatchToProps)(loginPage)
export {loginPageComponent}
