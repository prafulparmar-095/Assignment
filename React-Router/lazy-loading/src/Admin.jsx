import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AdminDashboard = lazy(() => import('./AdminDashboard'));
const AdminUsers = lazy(() => import('./AdminUsers'));

const Admin = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/admin" exact component={AdminDashboard} />
        <Route path="/admin/users" component={AdminUsers} />
      </Switch>
    </Suspense>
  </Router>
);

export default Admin;