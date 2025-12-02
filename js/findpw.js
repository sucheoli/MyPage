// findpw.html 전용 스크립트

document.addEventListener('DOMContentLoaded', function() {
    // 비밀번호 찾기 폼 처리
    const findpwForm = document.getElementById('findpwForm');
    if (findpwForm) {
        findpwForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('findpwEmail').value.trim();
            const findpwError = document.getElementById('findpwError');
            
            // 에러 메시지 초기화
            findpwError.style.display = 'none';
            
            const users = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
            
            if (!users[email]) {
                findpwError.textContent = '등록되지 않은 이메일입니다.';
                findpwError.style.display = 'block';
                return;
            }
            
            alert(`${email}로 비밀번호 재설정 링크가 전송되었습니다.`);
            window.location.href = 'login.html';
        });
    }
});