"strict mode"

function createAdder(x) {
    return function(y){
        return x + y
    }
}
console.log(createAdder(10)(6));
