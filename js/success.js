// success.html 전용 스크립트

document.addEventListener('DOMContentLoaded', function() {
    // 로그인 상태 확인
    const currentUser = localStorage.getItem('currentUser');
    
    if (!currentUser) {
        // 로그인되지 않았으면 index 페이지로
        window.location.href = 'https://sucheoli.github.io/MyPage/index.html';
        return;
    }
    
    // 사용자 정보 표시
    const user = JSON.parse(currentUser);
    const userInfo = document.getElementById('userInfo');
    
    if (userInfo) {
        userInfo.innerHTML = `
            <p><strong>이름:</strong> ${user.name}</p>
            <p><strong>이메일:</strong> ${user.email}</p>
            <p><strong>가입일:</strong> ${user.signupDate}</p>
        `;
    }
});

// 로그아웃 함수
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'https://sucheoli.github.io/MyPage/index.html';
}

// 테스트용 사용자 초기화
if (!localStorage.getItem('registeredUsers')) {
    const testUsers = {
        'test@example.com': {
            name: '테스트',
            email: 'test@example.com',
            password: 'test1234',
            signupDate: new Date().toLocaleString('ko-KR')
        }
    };
    localStorage.setItem('registeredUsers', JSON.stringify(testUsers));
}