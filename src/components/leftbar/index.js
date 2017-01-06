/**
 * Created by zuoq on 2016/10/2.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'

export default class LeftBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            actTab: 1,
        };
    }

    _onClick (index) {
        this.setState({
            actTab:index
        });
    }

    render () {

        let picStyle = {
            backgroundImage:'url(' + 'http://upload.jianshu.io/daily_images/images/xdz4cGjgbwutgmM5rnn_.jpg' + ')'
        }
        return (
            <div className={this.props.hasLeftPic?'left_con':'left_con_noimg'}>
                <div id="left_bar">
                    <ul className="left_top" id="left">
                        <a className={this.state.actTab==1?"active":""} onClick={this._onClick.bind(this,1)}>
                            <i className="iconfont">简</i><span><b className="iconfont">&#xe600;</b>首页</span>
                        </a>
                        <a className={this.state.actTab==2?"active":""} onClick={this._onClick.bind(this,2)}>
                            <i className="iconfont">&#xe602;</i><span><b className="iconfont">&#xe602;</b>首页</span>
                        </a>
                        <a className={this.state.actTab==3?"active":""} onClick={this._onClick.bind(this,3)}>
                            <i className="iconfont">&#xe601;</i><span><b className="iconfont">&#xe601;</b>首页</span>
                        </a>
                    </ul>
                </div>



                <div className={this.props.hasLeftPic?'pic_con':'hide_pic_con'} style={picStyle}>
                    <div className="bottom_lock">
                        <h1>{this.props.picText.h1}</h1>
                        <h2>{this.props.picText.h2}</h2>
                        <p>{this.props.picText.p}</p>
                        <a href="#" className="new">{this.props.picText.btn}</a>
                    </div>
                </div>

            </div>



        )
    }
}
