/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let output = [];
    arr.forEach((value, i) => {
        output[i] = fn(value, i);
    });
    return output;
};

arr = [1,2,3]; 
fn = function plusone(n) { return n + 1; }

const result = map(arr, fn);
console.log(result);