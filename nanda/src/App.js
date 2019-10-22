import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
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
     <h1>NANDA</h1>
     <Router>
      
      <ul>
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
      </ul>
      <Route path="/parent" component={ParentLogin} />
      <Route path="/nanny" component={NannyLogin} />

      <Route exact path='/parentsignup' component={ParentForm}/>
      <Route exact path='/nannysignup' component={NannyForm}/>
      {/* <Route exact path="/" component={ParentDashboard} /> */}
      {/* If the user is not logged in, the Private Route will redirect to the Login */}
      {/* 
      user.isNanny === true ? render={<PrivateRoute exact path="/" component={NannyDashboard} />} : <PrivateRoute exact path="/" component={ParentDashboard} />
      */}
      <PrivateRoute exact path="/p" component={ParentDashboard}  />
      <PrivateRoute exact path="/n" component={NannyDashboard}  />
     </Router>
     
    </div>
  );
};




export default App;

