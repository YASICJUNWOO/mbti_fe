// PopularPosts.js

import React, {useEffect, useState} from 'react';
import '../css/Home.css';
import axios from 'axios'; // Axios 라이브러리를 import

function PopularPosts() {
    const [posts, setPost] = useState([]); // 데이터를 저장할 상태

    useEffect(() => {
        // Axios를 사용하여 GET 요청 보내고 데이터 가져오기
        axios.get('http://mbti.ap-northeast-2.elasticbeanstalk.com/entity') // API의 엔드포인트 URL을 여기에 입력
            .then((response) => {
                // 응답 데이터를 상태에 저장
                console.log('API 응답 데이터:', response.data);
                setPost(response.data);
            })
            .catch((error) => {
                // 오류 처리
                console.error('Error fetching data:', error);
            });
    }, []); // 빈 종속성 배열로 컴포넌트가 처음 렌더링될 때 한 번만 실행

    return (
        <section className="featured-content">
            <header>
                <h2>인기 있는 포스트</h2>
                <a href="/post/create">글 작성</a>
            </header>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>유저이름 : {post.username} mbti 타입 : {post.mbtiType} 내용 : {post.content}</li>
                ))}
            </ul>
        </section>
    );
}

export default PopularPosts;
