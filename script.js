// ดึงปุ่มทั้งหมดมาเก็บไว้ในตัวแปร โดยหาจากข้อความบนปุ่ม
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        // ดึงข้อความบนปุ่ม (blue, red, green) มาใช้เป็นสีพื้นหลัง
        const color = this.innerText.toLowerCase();
        document.body.style.backgroundColor = color;
    });
});