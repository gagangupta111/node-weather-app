
var asyncAdd = (a, b)=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            }else{
                reject(` ${a} and ${b} Must be numbers!`);
            }
        }, 1500);
    });
};

// both ways then on promise, either pass both resolve and reject together, or handle resolve in then and reject in catch.
asyncAdd(3, 6)
    .then((resolve) => {
        console.log('Addition is: ' , resolve);
        return asyncAdd(resolve, '9');
    })
    .then((resolve) => {
        console.log('Addition shall be 18', resolve);
    }).catch((reject) => {
        console.log(reject);
    });

var somePromise = new Promise((resolve, reject) => {

    reject('Dodnt worked');
    resolve('It worked');

});

somePromise
    .then((message) => {
        console.log('Success', message);
    })
    .catch((err) => {
        console.log('Error', err);
    });
