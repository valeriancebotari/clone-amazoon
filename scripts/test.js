const myArray = [100, 200, 300, 400, 350];

const total = myArray.reduce(function(values, item){
    values += item;
    return values;
}, 0);
console.log(typeof myArray);

