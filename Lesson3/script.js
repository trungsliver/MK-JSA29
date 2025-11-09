// DOM - Document Object Model
    //  Cấu trúc mô phỏng HTML dưới dạng cây (tree) và các phần tử - nút (node)

    // Lây phần tử theo id
let header = document.getElementById("myH1");
console.log(header);
let p1 = document.getElementById("myP");
console.log(p1);

    // Lấy phần tử theo class name
let myClassElements = document.getElementsByClassName("myClass");
console.log(myClassElements);

    // Lấy phần tử theo tag name
let pTags = document.getElementsByTagName("p");
console.log(pTags);

    // querrySelectorAll: lấy tất cả phần tử theo selcetor
let allParagraphs = document.querySelectorAll(".myClass");
console.log(allParagraphs);

    // querrySelector: lấy phần tử đầu tiên theo selector
let firstParagraph = document.querySelector(".myClass");
console.log(firstParagraph);

    // innerHTML: lấy hoặc gán nội dung HTML (bao gồm cả tên thẻ)
document.getElementById("myH1").innerHTML = "<h1>JSA29</h1>";
myP.innerHTML = "<p>Hải meme ăn sáng trong lớp</p>";

    // textContent: lấy hoặc gán content (không bao gồm thẻ)
myP.textContent = "Hải meme ăn sáng trong lớp - textContent";

    // style: thay đổi CSS của phần tử
header.style.color = "darkred";
header.style.fontFamily = "Momo Signature";

    // setAttribute: thêm hoặc sửa thuộc tính của phần tử
myP.setAttribute("class", "momo-signature-regular");

    // Tạo phần tử mới
let newDiv = document.createElement("div");
newDiv.setAttribute("class", "container");

    // Thêm phần tử vào trang
document.body.appendChild(newDiv);

// ============ THỰC HÀNH ============

    // btn1: Thay đổi nội dung tiêu đề h1
function changeText() {
    let h1 = document.getElementById("myH1");
    h1.textContent = "Tiêu đề đã được thay đổi!";
}

    // btn2: Hiển thị cảnh báo
function showAlert() {
    alert("Bạn đã nhấn nút!");
}

    // btn3: Thay đổi màu nền 
const btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});

    // Kiểm tra tuổi
document.getElementById("mySubmitAge").onclick = function() {
    let age = parseInt(document.getElementById("myAge").value);
    if (isNaN(age)) { // Kiểm tra nếu không phải số - Not a Number
        alert("Vui lòng nhập một số hợp lệ cho tuổi.");
    } else if (age >= 18) {
        alert("Bạn đã đủ 18 tuổi.");
    } else {
        alert("Bạn chưa đủ 18 tuổi.");
    }
    document.getElementById("myAge").value = "";
}