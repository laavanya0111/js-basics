let concert = true

let attendConcert = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if(concert){
            resolve("BOB attended the concert")
        }
        else {
            reject("BOB did not attended the session")
        }
    }, 2000);
});
console.log(attendConcert);
console.log(attendConcert);

attendConcert.then((data) => console.log(data));
attendConcert.catch((error) => console.log(error));