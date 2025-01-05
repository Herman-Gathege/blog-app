import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import NewPost from './components/NewPost';
import Navbar from './components/Navbar';
// import Layout from './components/Layout';

function App() {
  return (
    <Router>
      {/* <Layout> */}
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
