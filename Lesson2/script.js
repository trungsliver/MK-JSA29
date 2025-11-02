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

// String Methods (phương thức hay dùng với String)
let str = "Hello, MindX!";
    // length: độ dài chuỗi
console.log("length: " + str.length);
    // toUpperCase(): chuyển thành chữ hoa
console.log("toUpperCase: " + str.toUpperCase());
    // toLowerCase(): chuyển thành chữ thường
console.log("toLowerCase: " + str.toLowerCase());
    // charAt(index): lấy ký tự tại vị trí index
console.log("charAt(7): " + str.charAt(7));
console.log("charAt(7): " + str[7]);
    // indexOf(substring): tìm vị trí xuất hiện đầu tiên của chuỗi con substring
console.log("indexOf('MindX'): " + str.indexOf("MindX"));
    // concat(str2): nối chuỗi với chuỗi str2
let str2 = " Welcome to JavaScript!";
console.log("concat: " + str.concat(str2));
    // slice(start, end): cắt chuỗi từ vị trí start đến end-1
console.log("slice(7, 12): " + str.slice(7, 12));    

// Toán tử số học - các phép toán
let x = 15;
let y = 4;
console.log('Phép cộng: ', x + y);      // 19
console.log('Phép trừ: ', x - y);       // 11
console.log('Phép nhân: ', x * y);      // 60
console.log('Phép chia: ', x / y);      // 3.75
console.log('Chia lấy dư: ', x % y);    // 3
console.log('Lũy thừa: ', x ** y);      // 50625

// Toán tử gán cộng - gán trừ
let a1 = 20;
a1 += 5;        // Tương đương với: a = a + 5
a1++;           // Tăng giá trị của a1 lên 1
console.log("a1 =", a1);      // 26
let b1 = 20;
b1 -= 5;        // Tương đương với: b = b - 5
b1--;           // Giảm giá trị của b1 xuống 1
console.log("b1 =", b1);      // 14

// Toán tử so sánh - Biểu thức logic
    // So sánh giá trị (= > <)
console.log(10 == 10);              // true
console.log(10 > 5);                // true
console.log(10 <= 5);               // false           
    // Phép AND - &&
console.log(true && true);          // true
console.log(true && false);         // false
    // Phép OR - ||
console.log(true || false);         // true        
console.log(false || false);        // false
    // Phép NOT - !
console.log(!false);                // true
console.log(!true);                 // false
    // ==: So sánh giá trị
console.log(5 == '5');              // true
    // ===: So sánh cả giá trị và kiểu dữ liệu
console.log(5 === '5');             // false

// Câu điều kiện (3 dạng)
    // Dạng thiếu
age = 20;
if (age >= 18) {
    console.log('Bạn đã đủ 18 tuổi');
}

    // Dạng đủ
let num = 12;
if (num % 2 == 0){
    console.log(num + ' là số chẵn');
}
else{
    console.log(num + ' là số lẻ');
}

    // Dạng đa nhánh
let score = 9;
if (0 <= score && score < 5){
    console.log('Yếu');
} else if (5 <= score && score < 6.5){
    console.log('Trung bình');
} else if (6.5 <= score && score < 8){
    console.log('Khá');
} else if (8 <= score && score <= 10){
    console.log('Giỏi');
} else{
    console.log('Nhập sai dữ liệu');
}

    // ternary operator - shortcut if-else statement
        // condition ? codeIfTrue : codeIfFalse
age = 19;
let canVote = (age >= 18) ? 'Có thể bầu cử' : 'Chưa đủ tuổi bầu cử';
console.log(canVote);

// vòng lặp
    // Vòng lặp for
for (let i = 1; i <= 5; i++){
    console.log(i);
}

    // Vòng lặp while
let i = 1
while (i <= 5) {
    console.log(i);
    i++;
}

    // Vòng lặp do while
i = 1;
do{
    console.log(i);
    i++;
} while( i <= 5);

// Mảng - Array
    // Khai báo / khởi tạo (Create)
let students = ['Phan Anh', 'Minh Tâm', 'Hải meme', 'Hoàng Long', 'Đình Nguyên'];
    // Đọc dữ liệu (Read)
console.log('Danh sách sinh viên:', students);
        // Truy cập phần tử bằng chỉ mục (index)
console.log('Phần tử đầu tiên:', students[0]);
console.log('Phần tử thứ hai:', students[1]);
console.log('Số lượng phần tử:', students.length);
        // Duyệt mảng 
for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}
    // Cập nhật dữ liệu (Update)
        // thêm phần tử
students.push("Hà");        // thêm vào cuối mảng
students.unshift("Minh");   // thêm vào đầu mảng
console.log('Danh sách sinh viên:', students);
        // sửa phần tử
students[2] = 'Ngọc Trinh';
console.log('Danh sách sinh viên:', students);
    // xóa phần tử
students.splice(2, 1); // xóa phần tử tại vị trí 2 
console.log("Sau khi xóa:", students);
students[1] = null; // hoặc undefined
console.log('Danh sách sinh viên:', students);
    // sắp xếp
students.sort();    // sắp xếp theo thứ tự tăng dần (A-Z)
console.log("Sau khi sort A-Z:", students);
students.reverse(); // đảo ngược thứ tự
console.log("Sau khi reverse:", students);

// Hàm - function
    // Cách khai báo hàm thông thường
function sayHello() {
  console.log("Hello, world!");
}
sayHello();

    // Hàm có tham số
function greet(name) {
  console.log("Xin chào, " + name + "!");
}
greet("Trung");

    // Hàm có giá trị trả về
function add(a, b) {
  return a + b;
}
console.log("Tổng =", add(5, 3));

// Arrow Function (ES6) - lambda function
    // Cú pháp cơ bản
const divide = (a, b) => a / b;
console.log("Thương =", divide(10, 2));

    // Arrow function có nhiều câu lệnh
const printSum = (x, y) => {
  const sum = x + y;
  console.log("Tổng =", sum);
};
printSum(6, 9);

    // Arrow function không có tham số
const sayHi = () => console.log("Hi!");
sayHi();