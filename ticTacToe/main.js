function howManySeconds(h) {
  return h * 60 * 60;
}

const seconds = howManySeconds(4);
const secondstwo = howManySeconds(9);

// console.log(seconds);

function remainder(x, y) {
  return x % y;
}
const rameNashti = remainder(5, 7);

function lessThan100(numOne, numTwo) {
  if (numOne + numTwo < 100) {
    return true;
  } else {
    return false;
  }
}

// [2, 1, 29, 3, 34, 12, 78] -> [1, 78]
function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  arr.forEach((num) => {
    if (min > num) {
      min = num;
    }
    if (max < num) {
      max = num;
    }
  });
  return [min, max];
}

function potatoes(str) {
  let count = 0;
  while (str.includes("potato")) {
    count++;
    str = str.replace("potato", "");
  }
  return count;
}

// console.log(potatoes("potatopotatoaaaa"));
function func(num) {
  const firstHalf = Math.floor(num / 2);
  const secondHalft = Math.ceil(num / 2);
  debugger;
  return [firstHalf, secondHalft];
}

// console.log(func(10));

function checkIfNumber(element) {
  return;
}

function filterArray(arr) {
  const onlyNumbers = arr.filter((element) => typeof element === "number");
  return onlyNumbers;
}

function doubleChar(str) {
  return str
    .split("")
    .reduce((result, current) => `${result}${current}${current}`, "");
}

// console.log(doubleChar("Hello"));

function countTrue() {
  const condFirst = true;
  const condSecond = false;
  const condThrid = true;
  const condFourth = false;

  return [
    condFirst ? { id: 1, name: "first condition" } : null,
    condSecond ? { id: 1, name: "second condition" } : null,
    condThrid ? { id: 1, name: "third condition" } : null,
    condFourth ? { id: 1, name: "fourth condition" } : null,
  ].filter((el) => !el);
}

console.log(countTrue());
