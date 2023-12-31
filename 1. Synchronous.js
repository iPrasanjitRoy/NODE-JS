//** Take An Eaxmple Of Synchronous */
console.log("Node JS Start");


function Hello() {
    return function () {
        console.log("Welcome Student")
    }
};


const result = Hello();
result();



console.log("Start");

function syncTask() {
    for (let i = 0; i < 5; i++) {
        console.log("Synchronous Task", i);
    }
}

syncTask();

console.log("End");


