/*
 * @Date: 2020-02-14 13:29:37
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors  : ferried
 * @LastEditTime : 2020-02-14 13:38:12
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
import { createStore } from 'redux';
import counter from '../reducers/CountReducer';

export default createStore(counter);
