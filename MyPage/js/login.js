// login.html 전용 스크립트

document.addEventListener('DOMContentLoaded', function() {
    // 로그인 폼 처리
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            const loginError = document.getElementById('loginError');
            
            // 에러 메시지 초기화
            loginError.style.display = 'none';
            
            // 등록된 사용자 확인
            const users = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
            const user = users[email];
            
            if (!user) {
                loginError.textContent = '등록되지 않은 이메일입니다.';
                loginError.style.display = 'block';
                return;
            }
            
            if (user.password !== password) {
                loginError.textContent = '비밀번호가 올바르지 않습니다.';
                loginError.style.display = 'block';
                return;
            }
            
            // 로그인 성공
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = 'success.html';
        });
    }
});