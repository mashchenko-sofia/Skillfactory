"strict mode"

function createInterval(x, y){
    const intervalId = setInterval(function() { 
        if (x > y) сlearInterval(intervalId);
        console.log(x++)
    }, 1000);  

}
createInterval(4, 8);
