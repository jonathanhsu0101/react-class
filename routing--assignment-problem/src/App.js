import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul style={{ listStyle: 'none', margin: 'auto', padding: '0' }}>
          <li style={{ margin: '10px', display: 'inline-block' }}>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li style={{ margin: '10px', display: 'inline-block' }}>
            <NavLink to="/users">Users</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/courses" component={Courses} />
          <Route path="/users" component={Users} />
          <Redirect from="/all-courses" to="/courses" />
          <Route component={Users} />
        </Switch>
      </div>
    );
  }
}

export default App;
