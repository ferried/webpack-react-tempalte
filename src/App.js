/*
 * @Date: 2020-02-13 15:53:17
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors  : ferried
 * @LastEditTime : 2020-02-13 16:59:54
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
import React from 'react';

class App extends React.PureComponent {
  render() {
    for (let i in { a: 10, b: 20, c: 30 }) {
    }
    return <div>
      <h1 className="hello">Hello React & Webpack!</h1>
    </div>
  }
}

export default App;
