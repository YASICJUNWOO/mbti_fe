import React from 'react';
import './css/Home.css'; // 홈화면에 해당하는 CSS 파일을 import합니다.
import mbti from './img/mbti.png'; // 로고 이미지를 import합니다.
import PopularPosts from './HomeComponent/PopularPosts'; // 인기 있는 포스트 컴포넌트를 import합니다.
import RecentPost from './HomeComponent/RecentPosts';
import Forum from "./HomeComponent/Forum";

function Home() {
    return (
        <div className="home">
            <header>
                {/* 로고 */}
                <a href="/">
                    <img src={mbti} alt="MBTI 커뮤니티 로고" />
                </a>

                <Forum/>
                {/* 메뉴 바 */}
                <nav>

                    <li><a href="/test">MBTI 유형 테스트</a></li>
                    <li><a href="/membership">멤버십 가입</a></li>
                </nav>

            </header>

            <section >
            </section>

            <main>
                {/* 인기 있는 포스트 목록 */}
                <PopularPosts />

                <RecentPost />

                <section className="special-events">
                    <h2>특별한 이벤트 및 뉴스</h2>
                    {/* 이벤트 또는 뉴스 목록 */}
                </section>
            </main>

            <aside>
                {/* MBTI 유형 테스트 영역 */}
                <section className="mbti-test">
                    <h2>MBTI 유형 테스트</h2>
                    <p>자신의 유형을 발견하세요!</p>
                    <a href="/test">지금 테스트 시작</a>
                </section>
            </aside>

            <footer>
                {/* 푸터 */}
                <div className="footer-content">
                    {/* 소셜 미디어 링크 */}
                    <ul className="social-media">
                        {/*<li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>*/}
                    </ul>
                    {/* 연락처 정보 */}
                    <p className="contact-info">문의: joonoo3@inha.edu</p>
                </div>
                {/* 개인정보 처리 정책 */}
                <p className="privacy-policy"><a href="/privacy-policy">개인정보 처리 정책</a></p>
            </footer>
        </div>
    );
}

export default Home;
