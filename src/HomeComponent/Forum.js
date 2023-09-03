// Forum.js 또는 해당 컴포넌트의 JavaScript 파일

import React from 'react';
import '../css/Forum.css';

function Forum() {
    // 주요 MBTI 유형 배열 선언
    const mbtiTypes = [
        'INFJ', 'INTJ', 'INFP', 'INTP', 'ISFJ', 'ISTJ', 'ISFP', 'ISTP',
        'ENFJ', 'ENTJ', 'ENFP', 'ENTP', 'ESFJ', 'ESTJ', 'ESFP', 'ESTP',
    ];

    return (
        <div className="mbti-grid">
            {/* MBTI 배열을 반복하여 링크 생성 */}
            {mbtiTypes.map((mbtiType) => (
                <a key={mbtiType} href={`/forum/${mbtiType}`}>
                    {mbtiType}
                </a>
            ))}
        </div>
    );
}

export default Forum;
