console.log("Merged Class 2 ES6");

let ranks = [1,2,3,4];

console.log(
    ranks.map((e, index) => {
        return e*100;
    })
);

console.log(
    ranks.forEach((e, index) => {
        return e*100;
    })
);

let newarr = ranks.map((e, index) => {
    console.log(e);
    console.log(index);
    if (e % 2 === 0) return e;
});
console.log(newarr);

let newfilterarr = ranks.filter((e, index) => {
    console.log(e)
    if(e%2===0)
    return e
})
console.log(newfilterarr)