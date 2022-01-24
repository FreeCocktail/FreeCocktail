import React from 'react';
import { Routes, Route } from 'react-router-dom'; // In react-router-dom v6, "Switch" is replaced by routes "Routes"
import GlobalStyle from 'styles/GlobalStyle';
import './App.css';
import Landing from './Pages/Landing';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import MyPage from './Pages/MyPage/MyPage';
import RecipeList from './Pages/RecipeList';
import RecipeWrite from './Pages/RecipeWrite';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/signupPage" element={<SignUpPage />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/recipeList" element={<RecipeList />} />
        <Route path="/recipeWrite" element={<RecipeWrite />} />
      </Routes>
    </>
  );
}

export default App;
