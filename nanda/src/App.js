import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import LandingPage from './components/LandingPage';
import ParentDashboard from './components/ParentDashboard';
import NannyDashboard from './components/NannyDashboard';
import ParentLogin from './components/auth/ParentLogin';
import NannyLogin from './components/auth/NannyLogin';
import NannyForm from './components/NannyForm';
import ParentForm from './components/ParentForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Link exact to="/">NANDA</Link>
        {/* <ul>
        <li>
            <Link exact to="/">Home</Link>
          </li>
          <li>
            <Link to="/parent">Parent Member Sign In</Link>
          </li>
          <li>
            <Link to="/nanny">Nanny Member Sign In</Link>
          </li>
          <li>
            <Link to="/nannysignup">I want to use Nanda for my Nanny service scheduling!</Link>
          </li>
          <li>
            <Link to="/parentsignup">I am a Parent that needs assistance with my kids!</Link>
          </li>
        </ul> */}

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/parent" component={ParentLogin} />
          <Route exact path="/nanny" component={NannyLogin} />

          <Route exact path='/parentsignup' render={() => <ParentForm />}/>
          <Route exact path='/nannysignup' component={NannyForm}/>
          {/* <PrivateRoute exact path="/p" component={ParentDashboard}  />
          <PrivateRoute exact path="/n" component={NannyDashboard}  /> */}
        </Switch>
      </Router>
    </div>
  );
};
        

export default App;