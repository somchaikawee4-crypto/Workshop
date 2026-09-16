const scoreInput = document.getElementById("score");
const button = document.querySelector("button");
const gradeH1 = document.getElementById("grade");

button.addEventListener("click", function() {
    const score = parseFloat(scoreInput.value);
    let grade = "";

    if (isNaN(score) || score < 0 || score > 100) {
        alert("กรุณาใส่คะแนนให้ถูกต้อง (0-100)");
        return;
    }

    if (score >= 80) grade = "A";
    else if (score >= 70) grade = "B";
    else if (score >= 60) grade = "C";
    else if (score >= 50) grade = "D";
    else grade = "E";

    gradeH1.innerText = "Grade: " + grade;
});