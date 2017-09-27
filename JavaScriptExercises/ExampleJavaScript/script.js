window.onload = function () {
    console.log("Hello!");
}

function exampleFunc(input) {
    document.getElementById("changeme").innerHTML = input;
}

function buttonFunction() {
    exampleFunc(document.getElementById("txt1").value);
}