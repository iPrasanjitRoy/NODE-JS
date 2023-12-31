console.log("Hello Students");

function callback() {
    console.log("Hello Again From Callback");
}
setTimeout(callback, 5000);


console.log("Hello From The Final Line");






console.log("Start");

function asyncTask() {
    setTimeout(function () {
        console.log("Asynchronous Task");
    }, 2000); // Wait For 2 Seconds
}


asyncTask();

console.log("End");



