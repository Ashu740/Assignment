import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import LoginForm from './components/LogInForm';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/users" element={<UserListPage/>} />
    </Routes>
  </Router>
);

export default App;
