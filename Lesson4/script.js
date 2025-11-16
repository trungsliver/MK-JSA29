// Bài 1: Form đăng ký
const form = document.getElementById('registerForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
    // Không reload trang
    event.preventDefault();

    // Lấy dữ liệu từ form
    let fullname = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Kiểm tra dữ liệu
    if (!fullname || !email || !password) {
        message.textContent = "Vui lòng điền đầy đủ thông tin.";
        message.style.color = "red";
        return;
    }

    if (password.length < 6) {
        message.textContent = "Mật khẩu phải có ít nhất 6 ký tự.";
        message.style.color = "red";
        return;
    }

    // Hiển thị thông báo thành công
    message.textContent = "Đăng ký thành công!";
    message.style.color = "green";
});

