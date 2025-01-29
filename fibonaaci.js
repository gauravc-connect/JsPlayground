function fibbonacci(n){
    if (n <=0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0,1];

    const series = [0,1];
    for (let i = 2;  i < n; i++ ){
        series.push(series[i-1] + series[i-2]);
    }
    return series;
}

//console.log(fibbonacci(10).join('  '));

// Using Generator function

function* generatedFibbonacci(){
    let a = 0, b = 1;

    while(true){
        yield a;
        [a,b] = [b, a+b];
    }
}

function fibbo(n){
    const gen = generatedFibbonacci();
    const series = []
    for(let i=0; i<n; i++){
       series.push(gen.next().value);
    }
    return series;
}

console.log(fibbo(20));