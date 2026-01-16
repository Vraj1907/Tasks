//Task1- create a function that returns a Promise and resolves after 2 seconds with the 
// message "Hello after delay".

function greet() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello after delay");
        }, 2000)
    })
}
greet()
    .then((msg) => {
        console.log(msg);
    });

//Task2- Create a function checkEven(number) that returns a promise.
// resolve with "Even number" if even.
// reject with "Odd number" if odd.
function check(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0) {
            resolve("Even number");
        }
        else {
            reject("Odd number");
        }
    })
}
check(20)
    .then((mes) => {
        console.log(mes);
    })
    .catch((err) => {
        console.log(err);
    })

//Task-3 simulate a fake api call that takes 3 seconds and returns a list of users.
const data = [{
    name: "Virat",
    weight: 65,
    Role: "Batsman"
}, {
    name: "Dhoni",
    weight: 85,
    Role: "Wicket-keeper"
}, {
    name: "Hardik",
    weight: 55,
    Role: "bating -All rounder"
}, {
    name: "Jassi",
    weight: 75,
    Role: "Bowler"
}]
function fake() {
    return new Promise((resolve, reject) => {
        let sucess = true;
        if (sucess) {
            setTimeout(() => {
                resolve(data);
            }, 3000)
        }
        else {
            reject("Failed to fetch a data");
        }
    })
}
fake()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

//Task4- create 3 functions:
// startTask() -> resolves "Task started"
// processTask() -> resolves "Task in progress"
// endTask() -> resoles "Task completed"
// Call them in sequence using .then chaining
function startTask() {
    return new Promise((resolve) => {
        resolve("Task started");
    }
    )
}
function processTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task in progress");
        }, 2000);
    })
}
function endTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task completed");
        }, 3000);
    })
}
startTask()
    .then((data) => {
        console.log(data);
    });
processTask()
    .then((data) => {
        console.log(data);
    });
endTask()
    .then((data) => {
        console.log(data);
    });

//Step 1: User places an order — takes 1 second.
// Step 2: Check if the item is in stock — takes 2 seconds.
// 	If item is "pizza", it's available.
// 	For any other item, reject with "Item not available".
// Step 3: Process payment — takes 1.5 seconds.
// Step 4: Confirm order.
function order() {
    return new Promise((resolve,reject) => {
        let pizza = false;
        if (pizza) {
            setTimeout(() => {
                console.log("Places an order");
            }, 1000);
            setTimeout(() => {
                resolve("It's available");
            }, 2000);
            setTimeout(() => {
                console.log("Process Payment");
            }, 3500);
            setTimeout(() => {
                console.log("confirm order");
            }, 5000);
        }
        else {
            reject("Item not available");
        }
    })
}
order()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })