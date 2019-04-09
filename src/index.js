import React from 'react';
import ReactDOM from 'react-dom';
import RouterCom from '@/router/index'
import * as serviceWorker from './serviceWorker';
import '@/main.scss';
import store from '@/store';
import {Provider} from 'react-redux'

ReactDOM.render(<Provider store={store}><RouterCom /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();// 如果项目要上线，这里需要改成register()
