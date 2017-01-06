/**
 * Created by zuoq on 2016/10/3.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import * as Datas from '../../data/findDate'
import './index.less'
export default class MiddleFind extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: Datas.findItem,
            lists: Datas.RM
        };
    };

    _onClickItem(index,list) {
        let navItems = this.state.navItems;
        let newList = list;
        let len = navItems.length;
        for(let i=0;i<len;i++) {
            if(navItems[i].isActive) {
                this.state.navItems[i].isActive = "";
            }
        }
        navItems[index].isActive = "active";
        this.setState(navItems);
        this.setState({lists:newList});
    }

    render () {
        let items = this.state.navItems.map((item,index)=> {
            //let newList = item.id;
            //console.log(newList);
            return (
                    <li onClick={this._onClickItem.bind(this,index,Datas[item.id])} key={index} className={item.isActive}>
                    <a href="#">{item.title}</a>
                </li>
            )
        });

        let lists = this.state.lists.map((items,index)=>{
            return (
                <div key={index} className="lists clearfix">
                    <div className="list_left">
                        <p>
                            <a href="#">{items.author_name}</a>
                            <em> · </em>
                            <span>{items.time}</span>
                        </p>
                        <h4><a href="#">{items.title}</a></h4>
                        <div className="list_footer">
                            <a href="#">阅读 {items.read_num}</a>
                            <em> · </em>
                            <a href="#">评论 {items.comment}</a>
                            <em> · </em>
                            <span>喜欢 {items.like_num}</span>
                        </div>
                    </div>
                    <div className={items.img_src?"list_right":"no_img"}>
                        <a href="#">
                            <img src={items.img_src} alt=""/>
                        </a>
                    </div>
                </div>
            )
        });

        return (
            <div className="middle_find">
               <ul className="mid_top_nav">
                   <li className="active"><a href="#">发现</a></li>
                   <li><a href="#">2015精选</a></li>
                   <input type="search" placeholder="搜索"/>
               </ul>

                <div className="nav_items clearfix">
                    {items}
                </div>

                <div className="article_list">
                    {lists}
                </div>

                <div className="get_more">点击查看更多</div>
            </div>
        )
    }
}