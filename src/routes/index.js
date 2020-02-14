/*
 * @Date: 2020-02-14 14:26:30
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors  : ferried
 * @LastEditTime : 2020-02-14 15:07:32
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DefaultLayout from '../layout/DefaultLayout';

class Routes extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <DefaultLayout>
              <BrowserRouter>
                <Switch>
                  <Route path="/home" component={Home} />
                </Switch>
              </BrowserRouter>
            </DefaultLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
