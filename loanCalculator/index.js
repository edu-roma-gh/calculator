const loanType = document.getElementById("loanType");
const calcButton = document.getElementById("calculateButton");
const monthCount = document.getElementById("monthCount");
const loanAmount = document.getElementById("loanAmount");
const calculatorCont = document.getElementById("calculatorCont");
const resultCont = document.getElementById("resultCont");

loanType.addEventListener("focus", handleFocus);
monthCount.addEventListener("focus", handleFocus);
loanAmount.addEventListener("focus", handleFocus);

function handleFocus(e) {
  e.target.classList.remove("error");
}

function back() {
  calculatorCont.classList.remove("hidden");
  resultCont.classList.add("hidden");
}

function validate() {
  const percentage = +loanType.value;
  const monthesCount = monthCount.valueAsNumber;
  const amount = loanAmount.valueAsNumber;
  const wholePercent = ((monthesCount / 12) * amount * percentage) / 100;
  const monthlyPayment = ((amount + wholePercent) / monthesCount).toFixed(2);
  let validInputsCount = 3;

  switch (true) {
    case Number.isNaN(percentage): {
      loanType.classList.add("error");
      validInputsCount--;
    }
    case Number.isNaN(monthesCount) || monthesCount <= 0: {
      monthCount.classList.add("error");
      validInputsCount--;
    }
    case Number.isNaN(amount) || amount <= 0: {
      loanAmount.classList.add("error");
      validInputsCount--;
    }
  }
  return {
    percentage,
    monthesCount,
    amount,
    wholePercent,
    monthlyPayment,
    valid: validInputsCount === 3,
  };
}

function calculate() {
  const {
    percentage,
    monthesCount,
    amount,
    wholePercent,
    monthlyPayment,
    valid,
  } = validate();
  if (valid) {
    calculatorCont.classList.add("hidden");
    const resultHtml = `
      <p>საპროცენტო განაკვეთი: ${percentage}%</p>
      <p>თანხა პროცენტის გარეშე: ${amount}ლ</p>
      <p>ყოველთვიური შესატანი: ${monthlyPayment}ლ</p>
      <p>თვეების რაოდენობა: ${monthesCount}თვე</p>
      <p>გადასახდელი პროცენტი: ${wholePercent.toFixed(2)}ლ</p>
      <p>სულ თანხა: ${+(wholePercent + amount).toFixed()}ლ</p>
      <hr />
      <button class="generalInput" onclick="back()">დაბრუნება</button>
    `;
    resultCont.innerHTML = resultHtml;
    resultCont.classList.remove("hidden");
  }
}
