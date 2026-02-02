const contains = function (object, target) {
  if (target === null) return false;
  for (const [key, value] of Object.entries(object)) {
    if (typeof value === "object" && value !== null && value !== undefined) {
      //console.log(key + " ");
      if (typeof target === "object") {
        if (target === value){
          return true;
        }
      }
      if (contains(value, target)) {
        return true;
      }
    } else {
      //console.log(key + " " + value);

      if (
        value === target ||
        (typeof target === "number" && isNaN(target) && isNaN(value))
      ) {
        //console.log(true);
        return true;
      }
    }
  }
  return false;
};

function compareArrays(arr1, arr2){
    if(arr1.length != arr2.length){
        return false
    }else{
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                return false;
            }
        }
    }
    return true;
}

// Do not edit below this line
module.exports = contains;
