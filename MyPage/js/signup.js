// signup.html 전용 스크립트

// 비밀번호 강도 체크
document.addEventListener('DOMContentLoaded', function() {
    const signupPassword = document.getElementById('signupPassword');
    
    if (signupPassword) {
        signupPassword.addEventListener('input', function(e) {
            const password = e.target.value;
            const strengthBar = document.getElementById('strengthBar');
            const strengthText = document.getElementById('strengthText');
            
            let strength = 0;
            if (password.length >= 8) strength++;
            if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
            if (password.match(/[0-9]/)) strength++;
            if (password.match(/[^a-zA-Z0-9]/)) strength++;
            
            const colors = ['#e74c3c', '#e67e22', '#f39c12', '#2ecc71'];
            const texts = ['약함', '보통', '강함', '매우 강함'];
            const widths = ['25%', '50%', '75%', '100%'];
            
            if (password.length > 0) {
                strengthBar.style.width = widths[strength - 1] || '25%';
                strengthBar.style.backgroundColor = colors[strength - 1] || colors[0];
                strengthText.textContent = `비밀번호 강도: ${texts[strength - 1] || texts[0]}`;
                strengthText.style.color = colors[strength - 1] || colors[0];
            } else {
                strengthBar.style.width = '0%';
                strengthText.textContent = '';
            }
        });
    }

    // 회원가입 폼 처리
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 에러 메시지 초기화
            document.querySelectorAll('.error').forEach(error => {
                error.style.display = 'none';
            });
            
            const name = document.getElementById('signupName').value.trim();
            const id = document.getElementById('signupId').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const age = document.getElementById('signupAge').value.trim();
            const password = document.getElementById('signupPassword').value;
            const passwordConfirm = document.getElementById('signupPasswordConfirm').value;
            
            let hasError = false;
            
            if (name.length < 2) {
                document.getElementById('nameError').style.display = 'block';
                hasError = true;
            }

            if (id.length < 4) {
                document.getElementById('idError').style.display = 'block';
                hasError = true;
            }
            
            if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                document.getElementById('emailError').style.display = 'block';
                hasError = true;
            }

            if (isNaN(age) || age <= 0) {
                document.getElementById('ageError').style.display = 'block';
                hasError = true;
            }
            
            if (password.length < 8) {
                document.getElementById('passwordError').style.display = 'block';
                hasError = true;
            }
            
            if (password !== passwordConfirm) {
                document.getElementById('confirmError').style.display = 'block';
                hasError = true;
            }
            
            if (hasError) return;
            
            // 사용자 정보 저장
            const userData = {
                name: name,
                id: id,
                email: email,
                age: age,
                password: password,
                signupDate: new Date().toLocaleString('ko-KR')
            };
            
            // localStorage에 저장
            const users = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
            users[email] = userData;
            localStorage.setItem('registeredUsers', JSON.stringify(users));
            
            alert('회원가입이 완료되었습니다! 로그인해주세요.');
            window.location.href = 'login.html';
        });
    }
});