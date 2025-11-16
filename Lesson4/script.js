// Bài 1: Form đăng ký
const form = document.getElementById('registerForm');
const message = document.getElementById('message');

form.addEventListener('submit', function (event) {
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


// Bài 2: 
// Lấy dữ liệu từ file data.json và hiển thị lên trang web
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        // Lấy phần tử cha (đã khai báo trong HTML)
        const list = document.getElementById('productList');

        // Duyệt qua từng phần tử trong mảng data
        data.forEach(item => {
            // Tạo card cho từng sản phẩm
            const card = document.createElement('div');
            card.className = 'product-card';

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;

            const title = document.createElement('h3');
            title.textContent = item.name;

            const price = document.createElement('p');
            price.textContent = `Price: $${item.price}`;

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(price);

            list.appendChild(card);
        });
    });
