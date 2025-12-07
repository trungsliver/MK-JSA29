// Hàm lấy dữ liệu từ API
async function fetchJoke() {
    // Lấy dữ liệu
    const response = await fetch('https://sv443.net/jokeapi/v2/joke/Any');
    // Chuyển dữ liệu về dạng json
    const data = await response.json();
    // Hiển thị lên console
    console.log(data);
}
// Gọi hàm
// fetchJoke();

// Local storage: cho phép lưu dữ liệu tring trình duyệt của người dùng

// Khai báo mảng todo
    // Nếu có dữ liệu thì lấy ra, nếu không thì là mảng rỗng
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Hàm hiển thị danh sách todo
function renderTodos() {
    // Dùng DOM để lấy thẻ ul
    const list = document.getElementById("todoList");
    list.innerHTML = "";
    // Duyệt mảng todos và tạo thẻ li
    todos.forEach((todo, index) => {
        // Tạo thẻ li mới
        const li = document.createElement("li");
        // Gán nội dung
        li.textContent = todo;
        // Thêm thẻ li vào trong thẻ ul
        list.appendChild(li);
    });
}
renderTodos();

function addTodo() {
    const value = document.getElementById("todoInput").value;
    todos.push(value);
    document.getElementById("todoInput").value = "";
    // Lưu vào localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
}