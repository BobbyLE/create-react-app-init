import { createBrowserHistory } from 'history'
import React from 'react'
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom'

const history = createBrowserHistory()

const AppRouter = () => (
  <>
    <Router history={history}>
      <Switch>
        <Route exact path='/'>
          { () => 'Home'}
        </Route>
      </Switch>
    </Router>
  </>
)

export default AppRouter
