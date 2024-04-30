import React from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';

function App() {
  return (
    <div className="wrap">
      <Routes>
        <Route path="/" element={<Main />} />
        
        {/* 로그인 화면 */}
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/login/oauth2/kakao"  />


        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
