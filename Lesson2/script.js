// Hiển thị ra console
console.log("Hello, MindX!");

// Thông báo (popup)
// alert("đây là thông báo")

// Variables - Biến số
    // Dùng để lưu trữ dữ liệu
    // Có thể thể thay đổi giá trị

    // var: global (dùng được ở mọi nơi trong file)
var name = "Duc Trung";
name = "Hải meme"
    // let: local (chỉ dùng được trong khối lệnh chứa nó)
let age = 2;    

// Constants - Hằng số
    // Dùng để lưu trữ dữ liệu
    // Không thể thay đổi giá trị
const PI = 3.14;

// Data Types - Kiểu dữ liệu
    // Primitive Types - Kiểu dữ liệu nguyên thủy
        // String: chuỗi ký tự / xâu ký tự
let adress = "Hà Nội";
        // Number: Số (cả số nguyên và số thực), có cả Infinity và NaN (not a number)
let height = 1.75;
        // Boolean: đúng (true) hoặc sai (false)
let isStudent = false;
        // Null: giá trị rỗng, thường dùng để xóa/reset giá trị
let emptyValue = null;
        // Undefined: giá trị chưa được định nghĩa
let notDefined;
        // Symbol: đại diện cho một giá trị duy nhất và không thể thay đổi (ES6)
        // BigInt: đại diện cho số nguyên lớn hơn giới hạn của Number (ES11)

    // Non-Primitive Types - Kiểu dữ liệu phi nguyên thủy
        // Array: mảng
let numbers = [1, 2, 3, 4, 5];
        // function: hàm / chương trình con
function add(x, y) {
    return x + y;
};
        // Object: đối tượng, tập hợp các cặp key-value (bao gồm cả array và function)
let student = {
    name: "Hải meme",
    age: 2,
    isStudent: true,
    subjects: ["Math", "Physics", "Chemistry"],
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// Xác định và chuyển đổi data types
    // typeof: xác định kiểu dữ liệu
console.log(typeof adress);
console.log(typeof student);
    // Chuyển đổi kiểu dữ liệu
let x1 = "pizza";
let x2 = "pizza";
let x3 = "pizza";
x1 = Number(x1);    // chuyển thành số
x2 = Boolean(x2);   // chuyển thành boolean
x3 = String(x3);    // chuyển thành chuỗi
console.log(typeof x1, x1);         // NaN
console.log(typeof x2, x2);         // true
console.log(typeof x3, x3);         // "pizza"