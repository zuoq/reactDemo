import React from 'react'
import ReactDOM from 'react-dom'
import "./indexr.less"



//export default class RightTest extends React.Component {
//    render() {
//        const {count,onIncreaseClick} = this.props
//        return (
//            <div className="right">
//                <span>{count}</span>
//                <button onClick = {onIncreaseClick}>Increase</button>
//            </div>
//        )
//    }
//}

export default class RightTest extends React.Component {
    renderRight () {
        const {login,logOut,logIn,toLogin,toRegister} = this.props
        if(login) {
            return (
                <div className="have_login">
                    <ul className="clearfix">
                        <li><a href="#" onClick={logOut}>你已经登陆</a></li>
                    </ul>
                </div>
            )
        }else {
            return (
                <div className="notlogin">
                    <ul className="clearfix">
                        <li><a href="#/register" onClick={toRegister}>注册</a></li>
                        <li><a href="#/login" onClick={toLogin}>登陆</a></li>
                    </ul>
                </div>
            )
        }

    }

    render() {
        return (
            <div className="right">
                {this.renderRight()}
            </div>
        )
    }
}