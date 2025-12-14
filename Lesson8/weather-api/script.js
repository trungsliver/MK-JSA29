function getWeatherByCity() {
    // Lấy tên thành phố nhập vào
    const city = document.getElementById('cityInput').value;

    // Kiểm tra nếu tên thành phố rỗng
    if (!city) {
        alert('Vui lòng nhập tên thành phố.');
        return;
    }

    // Tạo URL API với tên thành phố
    const url = `https://wttr.in/${city}?format=j1`

    // Lấy dữ liệu
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Lấy dữ liệu và hiển thị
            const temp = data.current_condition[0].temp_C;
            const desc = data.current_condition[0].weatherDesc[0].value;

            document.getElementById("weatherResult").innerText =
                `Nhiệt độ: ${temp}°C - Thời tiết: ${desc}`;
        })
}