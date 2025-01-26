//Memoization is a technique used to speed up the execution of a function by caching its results for a given set of 
// input parameters. When a function is called with the same set of input parameters, instead of re-executing the function,
//  the cached result is returned. This technique can be used to optimize recursive functions and functions with expensive 
// computations.

function memoize(fn) {
    const cache = {};
    return function(...args) {
        let key = JSON.stringify(args);
        if (key in cache){
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;   
    }
}

////////////////////////  OR /////////////////////////////

function memoize_again(fn){
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        return cache.has(key) ? cache.get(key) : 
                                cache.set(key, fn(...args)).get(key);
    }
}