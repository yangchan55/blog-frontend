import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PostListPage />}>
          <Route path="/:username" element={<PostListPage />}></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/write" element={<WritePage />}></Route>
        <Route path="/:username/:postId" element={<PostPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
