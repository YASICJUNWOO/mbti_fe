// App.js

import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './Home';
import Forum from './page/Forum'; // Forum 컴포넌트를 import합니다.

function App() {
    return (
        <Router>
            {/*<nav>
                <ul>
                    <li>
                        <Link to="/">홈</Link>
                    </li>
                    <li>
                        <Link to="/forum">포럼</Link>
                    </li>
                </ul>
            </nav>*/}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forum" element={<Forum />} />
                {/* 다른 라우트 추가 가능 */}
            </Routes>
        </Router>
    );
}

export default App;
