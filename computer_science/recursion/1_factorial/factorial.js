const factorial = function(i) {

    if(typeof i !== 'number' || i % 1 !== 0 || i < 0){
        return undefined;
    }


    if(i === 1 || i === 0){
        return 1;
    }

    return factorial(i-1)*i;
};

// Do not edit below this line
module.exports = factorial;