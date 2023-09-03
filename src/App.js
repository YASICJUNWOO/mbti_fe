// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CreatePost from './CreatePost';
import ForumPage from './page/ForumPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/create" element={<CreatePost />} />
                <Route path="/forum/:mbtiType" element={<ForumPage />} />
                {/* 다른 라우트 추가 가능 */}
            </Routes>
        </Router>
    );
}

export default App;
