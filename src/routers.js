/**
 * Created by zuoq on 2016/10/2.
 */

import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import {Home} from './containers/home/index'
import {App} from './containers/app'
import {loginPageComponent} from './containers/loginAndReg/loginPage'
import {count} from './actions'

const store = createStore(reducers);
const state= store.getState();
console.log(state);
//let unsubscribe = store.subscribe(() =>
//    console.log(store.getState())
//)
//store.dispatch(count())
//console.log(state);
//store.dispatch(count(2))
//console.log(state);
//unsubscribe();
const routers = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component = {Home} />
            <Route path="/app" component = {App} />
            <Route path="/login" component = {loginPageComponent} />
            <Route path="/register" component = {loginPageComponent} />
        </Router>
    </Provider>
)

export {routers}