const btns = document.querySelectorAll("ion-button"),
  ionInputs = document.querySelectorAll("ion-input"),
  result = document.querySelector("ion-text");

const calculateBMI = () => {
  const height = ionInputs[0].value;
  const weight = ionInputs[1].value;

  const bmi = weight / (height * height);

  const resultElement = document.createElement('ion-card');

  resultElement.innerHTML = `
    <ion-card-content>
      <h2>Your BMI score is ${Math.round(bmi)}!</h2>
    </ion-card-content>
  `

  result.innerHTML = '';
  result.appendChild(resultElement);
};

const resetInputs = () => {
  ionInputs.forEach((input) => {
    input.value = '';
  });

  result.innerHTML = '';
};

btns[0].addEventListener("click", calculateBMI);
btns[1].addEventListener("click", resetInputs);