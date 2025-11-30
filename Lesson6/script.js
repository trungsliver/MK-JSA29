// ============= LẤY DỮ LIỆU CÓ SẴN TỪ FILE DATA.JS =============
// Xử lý và hiển thị data từ file data.js lên giao diện
function renderStudents(){
    // Lấy thẻ ul từ DOM 
    const ul = document.getElementById('student-list');
    // Lấy dữ liệu từ danh sách students trong file data.js
    students.forEach(student => {
        // Tạo thẻ li cho mỗi học sinh
        const li = document.createElement('li');
        // Gán nội dung cho thẻ li
        li.textContent = `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}`;
        // Thêm thẻ li vào trong thẻ ul
        ul.appendChild(li);
    });
}

renderStudents();

// ==================== LẤY DỮ LIỆU TỪ API ====================
async function loadTodos(){
    // Lấy dữ liệu từ API vào tư vào res (response)
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    // Chuyển dữ liệu từ res về dạng JSON
    const data = await res.json();

    // Hiển thị dữ liệu lên console
    console.log(data);

    // Hiển thị lên web
    const ul = document.getElementById('todo-list');
    for (i = 0; i < 20; i++){
        const todo = data[i];
        const li = document.createElement('li');
        li.textContent = `ID: ${todo.id}, Title: ${todo.title}, Completed: ${todo.completed}`;
        ul.appendChild(li);
    }
}
loadTodos();

// ==================== Luyện tập ====================
async function loadUsers(){
    // Lấy dữ liệu từ API vào tư vào res (response)
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // Chuyển dữ liệu từ res về dạng JSON
    const data = await res.json();

    // Hiển thị dữ liệu lên console
    console.log(data);

    // Hiển thị lên web
    const ul = document.getElementById('user-list');
    for (i = 0; i < 20; i++){
        const user = data[i];
        const li = document.createElement('li');
        li.textContent = `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
        ul.appendChild(li);
    }
}
loadUsers();