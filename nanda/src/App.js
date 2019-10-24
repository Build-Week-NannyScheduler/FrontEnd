import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import SignUp from './components/SignUp';
import ChoicePage from './components/ChoicePage';
import ParentDashboard from './components/ParentDashboard';
import NannyDashboard from './components/NannyDashboard';
import Login from './components/auth/Login';
import NannyForm from "./components/NannyForm";
import ParentForm from './components/ParentForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Link to="/">NANDA</Link>
        <Switch>
          <PrivateRoute exact path='/protected/nanny' component={NannyDashboard} />
          <PrivateRoute exact path='/protected/parent' component={ParentDashboard} />
          <Route exact path="/protected" component={ChoicePage} />
          <Route exact path="/" component={Login} />
          <Route path='/signup' component={SignUp} />          
          <Route path='/parentsignup' render={() => <ParentForm />}/>
          <Route path='/nannysignup' render={() => <NannyForm />}/>
        </Switch>
      </Router>
    </div>
  );
};
        
export default App;