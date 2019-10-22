import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Login';
import ParentDashboard from './components/ParentDashboard';
import NannyDashboard from './components/NannyDashboard';

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
     </Router>
     
    </div>
  );
}

export default App;

