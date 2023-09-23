"strict mode"

const arrName2 = [1, 'sdf', 0, 9, 9, "sdf", null];

function amountOfOddsAndEvens(arr) {
  let zero = 0;
  let even = 0;
  let odd = 0;
  arr.forEach(el => {
    if (typeof el == 'number' && el !== NaN) {
      if (el === 0) return zero++; 
      if (el % 2 === 0) {return even++} else {return odd++};
    }
  });
  return console.log(zero, even, odd);
}

amountOfOddsAndEvens(arrName2);