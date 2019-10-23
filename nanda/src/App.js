import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import LandingPage from './components/LandingPage';
import ParentDashboard from './components/ParentDashboard';
import NannyDashboard from './components/NannyDashboard';
import ParentLogin from './components/auth/ParentLogin';
import NannyLogin from './components/auth/NannyLogin';
import NannyForm from "./components/NannyForm";
import ParentForm from './components/ParentForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Link exact to="/">NANDA</Link>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/parent" component={ParentLogin} />
          <Route exact path="/nanny" component={NannyLogin} />
          {/* <Route exact path="/parentdashboard" component={ParentDashboard}/> */}
          <Route exact path='/parentsignup' render={() => <ParentForm />}/>
          <Route exact path='/nannysignup' render={() => <NannyForm />}/>
          <Route exact path='/nannydashboard' component={NannyDashboard}/>

        </Switch>
      </Router>
    </div>
  );
};
        
export default App;