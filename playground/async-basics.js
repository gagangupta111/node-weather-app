console.log("Starting app");

setTimeout(() => {
    console.log(" setTimeout 2000 ms called");
}, 2000);

setTimeout(() => {
    console.log(" setTimeout 1000 ms called");
}, 1000);

setTimeout(() => {
    console.log(" setTimeout 0 ms called");
}, 0);

console.log("Closing app");

