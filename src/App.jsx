/*
 * @Date: 2020-02-13 15:53:17
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors  : ferried
 * @LastEditTime : 2020-02-14 12:48:50
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
import React from 'react';
import { connect } from 'react-redux';
import { Tabs, WhiteSpace } from 'antd-mobile';
import ince from './actions/CountAction';

const tabs = [
  { title: 'First Tab' },
  { title: 'Second Tab' },
  { title: 'Third Tab' },
];

class App extends React.PureComponent {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  onClick() {
    // eslint-disable-next-line react/prop-types
    const { dispatch } = this.props;
    dispatch(ince());
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { number } = this.props;
    return (
      <div>
        <div>
          current number：
          {number}
          <button type="submit" onClick={this.onClick}>点击+1</button>
        </div>
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
export default connect(
  (state) => ({
    number: state.number,
  }),
)(App);
