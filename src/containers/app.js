/**
 * Created by zuoq on 2016/10/15.
 */

import React from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Counter extends React.Component {
    render() {
        const {value,onIncreaseClick} = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick = {onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const value = state.counter.count
    console.log(state.login.islogin)
    return {
        value
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onIncreaseClick: ()=> {
            dispatch(actions.count())
        }
    }
}

const App = connect(mapStateToProps,mapDispatchToProps)(Counter)
export {App}