const mostFrequentChar = (data) => {
    const arr = data.split(' ').join('').toLowerCase();
    console.log(arr);

    let charObj = {}
    let key = '';
    let count = 0;

    for(var value of arr){
        charObj[value] = (charObj[value] || 0) + 1;
        if(charObj[value] > count){
            key = value;
            count = charObj[value];
        }
    }
    console.log("key=",key);
    console.log("count=",count);
    console.log(charObj);
}

mostFrequentChar("Javascript is great");


