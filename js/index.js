// index.html 전용 스크립트

// 페이지 로드 시 로그인 상태 확인
document.addEventListener('DOMContentLoaded', function() {
    // 로그인되어 있으면 success 페이지로 리다이렉트
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        window.location.href = 'success.html';
    }
});