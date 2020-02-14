/*
 * @Date: 2020-02-13 15:41:53
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors  : ferried
 * @LastEditTime : 2020-02-14 12:37:45
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './stores/CountStore';
import './index.less';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
