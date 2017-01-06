import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'topLink':[
                {'content':'关于简书','link':'http://www.jianshu.com/collection/jppzD2'},
                {'content':'联系我们','link':'void(0)'},
                {'content':'作者成书计划','link':'http://www.jianshu.com/collection/fc488cd78374'},
                {'content':'帮助中心','link':'http://www.jianshu.com/notebooks/547/latest'},
                {'content':'简书周边','link':'http://jianshucom.taobao.com/'},
                {'content':'合作伙伴','link':'http://www.jianshu.com/p/cabc8fa39830'}
            ],
        };
    }
    render () {
        return (
            <div className="footer">
                <div className="footer_left">
                    <p>
                        this is footsdasdasdasdssdadasdsdasd
                    </p>
                </div>
            </div>
        )
    }
}
