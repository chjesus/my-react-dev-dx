import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import { LocaleProvider } from 'antd';
import en_US from 'antd/lib/locale-provider/en_US';
import 'moment/locale/en-au';

import Index from './pages/Index'

import './theme.ant';

class AppRoutes extends Component {
  componentWillMount = () => {
    console.log('server/client side')
  }

  componentDidMount = () => {
    console.log('client side')
  }

  render () {
    return (
      <LocaleProvider locale={en_US}>
        <Switch>
          <Route
            path='/'
            component={Index}
          />
        </Switch>
      </LocaleProvider>
    )
  }
}

export default AppRoutes