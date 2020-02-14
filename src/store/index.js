/*
 * @Date: 2020-02-14 13:29:37
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors  : ferried
 * @LastEditTime : 2020-02-14 13:57:20
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
import { createStore, combineReducers } from 'redux';
import counter from '../reducers/CountReducer';

const reducers = () => combineReducers({ counter });

export default createStore(reducers());
