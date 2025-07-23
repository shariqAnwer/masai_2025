let age = 25;

function displayAge() {
    console.log(age)
}

displayAge()            //global execution context

function changeAge(n) {
    let age = n
    console.log(age)
}

changeAge(20)