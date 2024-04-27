let myInput = document.getElementById("myInput");
let feedback = document.getElementById("feedback");
let btn = document.getElementById("btn");

btn.addEventListener("click", clickButton);

myInput.addEventListener("mouseenter", () => {
  btn.classList.add("active");
});

myInput.addEventListener("mouseleave", () => {
  btn.classList.remove("active");
});

function clickButton() {
  feedback.classList.remove("error");
  feedback.classList.remove("success");
  if (Number.isNaN(myInput.valueAsNumber)) {
    feedback.innerText = "შეიყვანე შენი ასაკი!";
    feedback.classList.add("error");
  } else if (myInput.valueAsNumber < 0) {
    feedback.innerText = "ასაკი უნდა იყოს დადებითი!";
    feedback.classList.add("error");
  } else if (myInput.valueAsNumber < 18) {
    feedback.innerText = "შენ არ ხარ სრულწლოვანი?";
    feedback.classList.add("error");
  } else {
    feedback.innerText = "შემოიხედე გენაცვალე!";
    feedback.classList.add("success");
  }
  feedback.classList.remove("hidden");
}
