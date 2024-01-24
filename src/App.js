
import logo from './logo.svg';
import './App.css';
import Home2 from './pages/Home2';
import Home from './pages/Home';
import Create from './components/Create'
import Navbar from './components/Navbar';
import Details from './pages/Details';
import { Route, Routes, Navigate } from 'react-router-dom'
import Signin from './pages/Signin'
import Login from './pages/Login';

import React, { useState } from 'react';
import Createbasket from './components/Createbasket';
import Mybasket from './pages/Mybasket';
import Explore from './components/Explore';
import Profile from './pages/Profile';
import Friends from './pages/Friends';
import Lists from './pages/Lists';
import ViewProfile from './pages/ViewProfile';
import Pro2 from './pages/Pro2';
import Prolisa from './pages/Prolisa';

function App() {

  const [basket, setBasket] = useState("");

  return (
    <div className="App gradient-bg-welcome">

      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home2 />} exact />
          <Route path="/home2" exact element={<Home basket={basket} setBasket={setBasket} />} />
          <Route path="/details" exact element={<Details basket={basket} setBasket={setBasket} />} />
          <Route path="/create" element={<Create />} />
          <Route path="/mybasket" element={<Mybasket basket={basket} setBasket={setBasket} />} />
          <Route path="/createbasket" element={<Createbasket />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/friends" element={<Friends />} />
          <Route path='/lists' element={<Lists />} />
          <Route path="/viewprofile" element={<ViewProfile />} />
          <Route path="/pro2" element={<Pro2 />} />
          <Route path="/prol" element={<Prolisa />} />
          
          
        </Routes>
      </div>
    </div>
  );
}

export default App;

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}