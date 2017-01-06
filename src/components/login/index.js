/**
 * Created by zuoq on 2016/10/17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './login.less'

export default class Login extends React.Component {
    renderForm () {
        const {loginOrReg} = this.props
        if(loginOrReg=="toLogin") {
            return (
                <form action="">
                    <div className="input_prepend domestic">
                        <span className="icon"></span>
                        <input type="text" placeholder="手机号码/电子邮件"/>
                    </div>
                    <div className="input_prepend password">
                        <span className="icon"></span>
                        <input type="password" placeholder="密码"/>
                    </div>
                    <button type="submit" className="submit_btn">登 录</button>
                </form>
            )
        }else if(loginOrReg=="toRegister"){
            return (
                <form action="">
                    <div className="input_prepend email">
                        <span className="icon"><i></i></span>
                        <input type="text" placeholder="你的电话号码" />
                    </div>
                    <div className="input_prepend name">
                        <span className="icon"><i></i></span>
                        <input type="text" placeholder="选一个昵称" />
                    </div>
                    <div className="input_prepend password">
                        <span className="icon"><i></i></span>
                        <input type="password" placeholder="输入密码" />
                    </div>
                    <button type="submit"  className="submit_btn">注 册</button>
                </form>
            )
        }
    }

    render () {
        const {loginOrReg,toLogin,toRegister} = this.props
        return (
            <div className="login">
                <div className="logo">
                </div>
                <h4>
                    <span>
                        <a href="#/login" className={loginOrReg=="toLogin"?"active_login":""} onClick={toLogin} >登录</a>
                        <b>·</b>
                        <a href="#/register" className={loginOrReg=="toRegister"?"active_reg":""} onClick={toRegister} >注册</a>
                    </span>
                </h4>
                {this.renderForm()}
            </div>
        )
    }
}

