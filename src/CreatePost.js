// src/components/PostForm.js

import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // 글 작성을 위한 POST 요청을 보냅니다.
            const response = await axios.post('http://api.example.com/posts', {
                title,
                content,
            });

            // 작성한 글이 성공적으로 저장된 경우, 성공 메시지를 출력하거나 리디렉션을 수행할 수 있습니다.
            console.log('글이 성공적으로 작성되었습니다.', response.data);

            // 작성한 글을 보여주는 페이지로 리디렉션
            // 예를 들어, 글 목록 페이지로 이동하는 경우:
            // history.push('/posts');
        } catch (error) {
            console.error('글 작성 중 오류가 발생했습니다.', error);
        }
    };

    return (
        <div>
            <h1>글 작성</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">제목:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content">내용:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">작성</button>
            </form>
        </div>
    );
}

export default CreatePost;
