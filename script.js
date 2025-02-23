function calculateGrade() {
    let marksInput = document.getElementById("marks").value;
    let marksArray = marksInput.split(",").map(num => parseFloat(num.trim()));
    
    if (marksArray.some(isNaN)) {
        document.getElementById("result").innerText = "❌ Please enter valid numbers!";
        return;
    }
    
    let total = marksArray.reduce((sum, mark) => sum + mark, 0);
    let average = total / marksArray.length;
    let grade = "";

    if (average >= 90) grade = "A+";
    else if (average >= 80) grade = "A";
    else if (average >= 70) grade = "B";
    else if (average >= 60) grade = "C";
    else if (average >= 50) grade = "D";
    else grade = "F (Fail)";

    document.getElementById("result").innerText = `🎯 Average: ${average.toFixed(2)}% | Grade: ${grade}`;
}
