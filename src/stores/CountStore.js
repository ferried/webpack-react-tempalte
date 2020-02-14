/*
 * @Date: 2020-02-14 10:07:40
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors  : ferried
 * @LastEditTime : 2020-02-14 10:29:35
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */

import { createStore } from 'redux';
import ince from '../reducers/CountReducer';

const CountStore = createStore(ince);

export default CountStore;
