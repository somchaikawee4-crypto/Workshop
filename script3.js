const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
const countSpan = document.getElementById("count");

// นับแบบ Real-time ตอนพิมพ์
textarea.addEventListener("input", function() {
    countSpan.innerText = this.value.length;
});

// หรือแสดงตอนกด Submit ตามโจทย์
button.addEventListener("click", function() {
    alert("จำนวนตัวอักษรทั้งหมดคือ: " + textarea.value.length + " ตัวอักษร");
});