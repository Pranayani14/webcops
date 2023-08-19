window.onload = function() {
    alert('Welcome to your BMI CALCULATOR website!');
};

document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            const bmi = calculateBMI(weight, height);
            const category = getBMICategory(bmi);
            resultDiv.innerHTML = `Your BMI is: ${bmi.toFixed(2)} (${category})`;
        } else {
            resultDiv.innerHTML = "Please enter valid weight and height values.";
        }
    });
