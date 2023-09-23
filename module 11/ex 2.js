"strict mode"

let num = +prompt('Введите число не больше 1000');
printIfPrime(num);

function printIfPrime(num) {
    if (num > 1000) {
        alert('Данные неверны!');
        return;
    };
    if (isPrime(num)) alert(num);
}

function isPrime(num) {
    for(let i = 2; i < num; i++){
        if (num % i === 0) return false;
    }
    return num !== 1;
}
