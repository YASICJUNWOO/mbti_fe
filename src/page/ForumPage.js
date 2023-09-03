// ForumPage.js 또는 해당 컴포넌트의 JavaScript 파일

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ForumPage() {
    // useParams를 사용하여 URL에서 MBTI 타입을 가져옴
    const { mbtiType } = useParams();

    // 선택한 MBTI 타입을 상태로 저장
    const [selectedMbti, setSelectedMbti] = useState('');

    // 해당 MBTI 타입에 대한 글 목록을 저장
    const [mbtiPosts, setMbtiPosts] = useState([]);

    // 선택한 MBTI 타입이 변경될 때마다 실행
    useEffect(() => {
        setSelectedMbti(mbtiType);
    }, [mbtiType]);

    // 해당 MBTI 타입에 대한 글 목록을 불러오는 함수 (API 호출 대신 가상 데이터 사용)
    useEffect(() => {
        async function fetchMbtiPosts() {
            try {
                // 실제로는 서버에서 해당 MBTI 타입의 글을 불러와야 하지만, 여기에서는 가상 데이터 사용
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?mbtiType=${mbtiType}`);
                const data = await response.json();
                setMbtiPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        if (selectedMbti) {
            fetchMbtiPosts();
        } else {
            setMbtiPosts([]);
        }
    }, [selectedMbti, mbtiType]);

    return (
        <div className="forum-page">
            <h1>{selectedMbti} 관련 포럼</h1>

            <div className="mbti-types">
                {/* MBTI 타입 목록 (이전 페이지로 이동) */}
                <Link to="/">뒤로 가기</Link>
            </div>

            <div className="posts">
                {/* 해당 MBTI 타입의 글 목록 표시 */}
                <h2>글 목록</h2>
                <ul>
                    <li>{mbtiType}</li>
                    {mbtiPosts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/forum/${post.id}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ForumPage;
