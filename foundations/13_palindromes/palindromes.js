const palindromes = function (string) {
    let words = string.toLowerCase().split(/\W+/);
    let combination = words.join("");
    let reverse = "";
    for(let i = combination.length -1; i >= 0; i--){
        reverse += combination[i];
    }
    return reverse  === combination;
};

// Do not edit below this line
module.exports = palindromes;
