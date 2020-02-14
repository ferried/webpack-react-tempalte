/*
 * @Date: 2020-02-13 15:41:53
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors  : ferried
 * @LastEditTime : 2020-02-14 13:31:25
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.less';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
