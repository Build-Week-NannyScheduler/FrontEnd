import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Login';
import ParentDashboard from './components/ParentDashboard';
import NannyDashboard from './components/NannyDashboard';
import NannyForm from './components/NannyForm';
import ParentForm from './components/ParentForm'

import './App.css';

function App() {
  return (
    <div className="App">
     <h1>NANDA</h1>
     <Router>
      <Route path="/login" component={Login} />
      {/* If the user is not logged in, the Private Route will redirect to the Login */}
      {/* 
      user.isNanny === true ? render={<PrivateRoute exact path="/" component={NannyDashboard} />} : <PrivateRoute exact path="/" component={ParentDashboard} />
      */}
      {/* <PrivateRoute exact path="/" component={ParentDashboard} /> */}
      <PrivateRoute exact path="/" component={NannyDashboard} />
      <Route exact path='/nannysignup' component={NannyForm}/>
      <Route exact path='/parentsignup' component={ParentForm}/>
     </Router>
     
    </div>
  );
};




export default App;

