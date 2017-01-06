import React from 'react'
import ReactDOM from 'react-dom'


import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { routers } from './routers.js'
import './reset.less'




ReactDOM.render(
    routers,
    document.getElementById('main')
)
