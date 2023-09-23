"strict mode"

let value = prompt('Введите свое значение');
let res = +value;
if (typeof res !== 'number' || res === NaN) {
   console.log('Упс, кажется, вы ошиблись');
  } else if (res % 2 === 0) {
    console.log('четное');
    } else {
        console.log('нечетное');
      }