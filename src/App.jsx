/*
 * @Date: 2020-02-13 15:53:17
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors  : ferried
 * @LastEditTime : 2020-02-14 13:12:44
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
import React from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';

const tabs = [
  { title: 'First Tab' },
  { title: 'Second Tab' },
  { title: 'Third Tab' },
];

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <WhiteSpace />
          <Tabs tabs={tabs} initialPage={2} animated useOnPan>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff',
            }}
            >
              Content of first tab
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff',
            }}
            >
              Content of second tab
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff',
            }}
            >
              Content of third tab
            </div>
          </Tabs>
          <WhiteSpace />
        </div>
      </div>
    );
  }
}

export default App;
