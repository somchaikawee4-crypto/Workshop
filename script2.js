const heading = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", function() {
    heading.innerText = "ยินดีต้อนรับสู่การเขียน JavaScript!";
});