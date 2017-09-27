window.onload = function () {

    x = "He said \"My name is Eliot \" "
    document.getElementById('message').innerHTML = x
    document.getElementById('DisplayArray').innerHTML = ray

}

let x;
let person = {
    name: 'Gratiani',
    age: '24',
    occupation: 'QA Consultant'

}
let ray = [" Burgers", " Pizza", " HotDogs"];


function Square(n1) {
    return n1 ** 2
}

function addition(n1, n2, n3) {

    return n1 + n2 + n3
}

//addition function button
function AddButton() {

    var n1 = parseFloat(document.getElementById('txtA').value);
    var n2 = parseFloat(document.getElementById('txtB').value);
    var n3 = parseFloat(document.getElementById('txtC').value);
    alert(addition(n1, n2, n3));
}

//square function button
function SquarePowerButton() {
    alert(Square(document.getElementById('txt2').value));
}

// this is the button that displays the person with his/her features
function DisplayPerson() {
    document.getElementById('output').innerHTML = person.name + " " + person.age + " " + person.occupation
}
//this button updates the features of the person with what is currently in the text boxes
function UpdatePerson() {
    if (document.getElementById('txtp1').value && document.getElementById('txtp2').value && document.getElementById('txtp3').value) {
        person.name = document.getElementById('txtp1').value
        person.age = document.getElementById('txtp2').value
        person.occupation = document.getElementById('txtp3').value
    }
    else alert("Please fill all the 3 fields")
}

//this button changes the message in x to display all uppercase
function CovertUppercaseButton() {
    let y = x.toUpperCase();
    document.getElementById('message').innerHTML = y;
}

function ConcatenateButton() {
    document.getElementById('concatenate').innerHTML = document.getElementById('txtc1').value + document.getElementById('txtc2').value;
}

function AddButton() {
    ray += "," + " " + document.getElementById('txta1').value;
    document.getElementById('DisplayArray').innerHTML = ray;
}

function RemoveButton() {
    ray.pop();
    document.getElementById('DisplayArray').innerHTML = ray;
}

function FizzBuzz() {
    for (var i = 1; i <= document.getElementById('LoopLenght').value; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            document.getElementById('NumberLoop').innerHTML += "<br> FizzBuzz";
        }
        else if (i % 3 === 0) {
            document.getElementById('NumberLoop').innerHTML += "<br>" + document.getElementById('DivisibleBy3').value;
        }
        else if (i % 5 === 0) {
            document.getElementById('NumberLoop').innerHTML += "<br>" + document.getElementById('DivisibleBy5').value;
        }
        else { document.getElementById('NumberLoop').innerHTML += "<br>" + i };
    }
}

function Divisibility() {
    let x = parseInt(document.getElementById('NumberToDivide').value);
    var y = 0;
    for (; x > 1;) {

        if (x % 3 === 0) {
            x = x / 3;
            y++;
            document.getElementById('DivisibilityResult').innerHTML += "<br>" + x;
        }

        else if ((x + 1) % 3 === 0) {
            x += 1;
            x = x / 3;
            y++;
            document.getElementById('DivisibilityResult').innerHTML += "<br>" + x;
        }

        else if ((x - 1) % 3 === 0) {
            x -= 1;
            x = x / 3;
            y++;
            document.getElementById('DivisibilityResult').innerHTML += "<br>" + x;
        }

    }
    document.getElementById('NumberOfIncrementations').innerHTML = "Number of Incrementations:" + y;
}


function CheckForTripple() {


    x = document.getElementById('TrippleCheck').value
    y = 0;
    for (let i = 3; i < x.length; i++) {
        if (x.charAt(i) === x.charAt(i - 1) && x.charAt(i - 1) === x.charAt(i - 2)) {
            y++;
        }
    }
    document.getElementById('NumberOfTripples').innerHTML = y;
}


function CreateParagraphs() {
    let p2 = document.createElement('p')
    p2.innerHTML = "Paragraph 2"
    p2.setAttribute("id", "p2")
    document.getElementById('ParagraphManipulation').appendChild(p2)

}

function CreateParagraphsFromText() {
    let p3 = document.createElement('p')
    p3.innerHTML = `<p>${document.getElementById('ParagraphCheck').value}</p>`;
    p3.setAttribute("id", "p3")
    document.getElementById('ParagraphManipulation').appendChild(p3)
}


function RemoveParagraphs() {
    document.getElementById('ParagraphManipulation').removeChild(document.getElementById('p2'))
}

function JSON() {
    let requestURL = `https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json`;
    let request = new XMLHttpRequest();
    request.open(`GET`, requestURL);
    request.responseType = `json`
    request.send();
    request.onload = function () {
        let requestData = request.response;

        let myP1 = document.createElement(`p`);
        let myP2 = document.createElement(`p`);
        let myP3 = document.createElement(`p`);
        let myP4 = document.createElement(`p`);
        let myP5 = document.createElement(`p`);
        let myP6 = document.createElement(`p`);

        myP1.textContent = "\n" + requestData[`squadName`];
        myP2.textContent = "\n" + requestData[`homeTown`];
        myP3.textContent = "\n" + requestData[`formed`];
        myP4.textContent = "\n" + requestData[`secretBase`];
        myP5.textContent = "\n" + requestData[`active`];

        for (let i = 0; i < requestData[`members`].length; i++) {
            let myH1 = document.createElement(`h5`);
            myH1.textContent += "Name: ";
            myH1.textContent += "\n" + requestData[`members`][i].name;
            myH1.textContent += "   Age: ";
            myH1.textContent += "\n" + requestData[`members`][i].age;
            myH1.textContent += "  Real Identity: ";
            myH1.textContent += "\n" + requestData[`members`][i].secretIdentity;
            myH1.textContent += "  Powers: ";
            // myH1.textContent += "\n" + requestData[`members`][i].powers;
            myH1.textContent += " ";
            for (let j = 0; j < requestData["members"][i]["powers"].length; j++) {
                myH1.textContent += "\n" + requestData[`members`][i][`powers`][j] + ", ";

            }

            document.getElementsByTagName(`body`)[0].appendChild(myH1);
        }
        document.getElementById('json1').appendChild(myP1)
        document.getElementById('json2').appendChild(myP2)
        document.getElementById('json3').appendChild(myP3)
        document.getElementById('json4').appendChild(myP4)
        document.getElementById('json5').appendChild(myP5)


    }
}
