const form = document.getElementById("bmi-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = parseFloat(document.getElementById("bmi-height").value);
  const weight = parseFloat(document.getElementById("bmi-weight").value);
  const results = document.getElementById("results");

  if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
    results.textContent = "Please enter valid height (CM) and weight (KG) greater than 0.";
  } else {
    const bmi = weight / (height / 100) ** 2;
    let bmiCategory;

    if (bmi < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmi < 25) {
      bmiCategory = "Normal weight";
    } else if (bmi < 30) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obese";
    }

    results.innerHTML = `Your BMI is: ${bmi.toFixed(2)} (**${bmiCategory}**).`;
  }
});