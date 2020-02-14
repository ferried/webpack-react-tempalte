/*
 * @Date: 2020-02-14 14:26:30
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors  : ferried
 * @LastEditTime : 2020-02-14 15:32:26
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DefaultLayout from '../layout/DefaultLayout';

class Routes extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <DefaultLayout>
              <Router>
                <Switch>
                  <Route path="/home" component={Home} />
                </Switch>
              </Router>
            </DefaultLayout>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
