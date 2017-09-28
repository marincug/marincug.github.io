window.onload = function () {

    x = "He said \"My name is Eliot \" "
    document.getElementById('message').innerHTML = x
    document.getElementById('DisplayArray').innerHTML = ray

}

let x;
let garageArray = [];
let listNumber = 0;
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
    ray.push(document.getElementById('txta1').value);
    document.getElementById('DisplayArray').innerHTML = ray;
}

function RemoveButton() {
    document.getElementById('DisplayArray').innerHTML = ray;
    ray.pop();
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
    p2.innerHTML = "This is Paragraph 2"
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

        myP1.textContent = "Squad Name: " + requestData[`squadName`];
        myP2.textContent = "Home Town: " + requestData[`homeTown`];
        myP3.textContent = "Formed in: " + requestData[`formed`];
        myP4.textContent = "Base of Operations: " + requestData[`secretBase`];
        myP5.textContent = "Active: " + requestData[`active`];

        for (let i = 0; i < requestData[`members`].length; i++) {
            let myH1 = document.createElement(`p`);
            myH1.textContent += "Name: ";
            myH1.textContent += "" + requestData[`members`][i].name + " ----- ";
            myH1.textContent += "   Age: ";
            myH1.textContent += "\n" + requestData[`members`][i].age + " ----- ";
            myH1.textContent += "  Real Identity: ";
            myH1.textContent += "\n" + requestData[`members`][i].secretIdentity + " ----- ";
            myH1.textContent += "  Powers:  ";
            for (let j = 0; j < requestData["members"][i]["powers"].length; j++) {
                myH1.textContent += "\n" + requestData[`members`][i][`powers`][j] + ", ";
            }
            document.getElementById('json6').appendChild(myH1);
        }
        document.getElementById('json1').appendChild(myP1)
        document.getElementById('json2').appendChild(myP2)
        document.getElementById('json3').appendChild(myP3)
        document.getElementById('json4').appendChild(myP4)
        document.getElementById('json5').appendChild(myP5)
    }
}

function JSON2() {
    let requestURL2 = `https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json`;
    let request2 = new XMLHttpRequest();
    request2.open(`GET`, requestURL2);
    request2.responseType = `json`
    request2.send();
    request2.onload = function () {
        let requestData2 = request2.response

        let x = document.getElementById('SearchJSON2').value;

        for (let i = 0; i < requestData2.length; i++) {
            let myH1 = document.createElement(`p`);
            if (requestData2[i].nm.includes(x)) {
                myH1.textContent += requestData2[i].nm + ", from: ";
                myH1.textContent += requestData2[i].cty + ", of: ";
                myH1.textContent += requestData2[i].hse + ", lived between the years of: ";
                myH1.textContent += requestData2[i].yrs;
            }
            if (requestData2[i].cty.includes(x)) {
                myH1.textContent += requestData2[i].nm + ", from: ";
                myH1.textContent += requestData2[i].cty + ", of: ";
                myH1.textContent += requestData2[i].hse + ", lived between the years of: ";
                myH1.textContent += requestData2[i].yrs;
            }
            if (requestData2[i].hse.includes(x)) {
                myH1.textContent += requestData2[i].nm + ", from: ";
                myH1.textContent += requestData2[i].cty + ", of: ";
                myH1.textContent += requestData2[i].hse + ", lived between the years of: ";
                myH1.textContent += requestData2[i].yrs;
            }
            if (requestData2[i].yrs.includes(x)) {
                myH1.textContent += requestData2[i].nm + ", from: ";
                myH1.textContent += requestData2[i].cty + ", of: ";
                myH1.textContent += requestData2[i].hse + ", lived between the years of: ";
                myH1.textContent += requestData2[i].yrs;
            }
            document.getElementById('Sjson').appendChild(myH1);
        }
    }
}


function AddToGarrageButton() {

    let oName = document.getElementById('CarOwnerName').value;
    let oSurname = document.getElementById('CarOwnerSurname').value;
    let cMake = document.getElementById('CarMake').value;
    let cEngine = document.getElementById('CarEngine').value;
    let cWheels = document.getElementById('CarWheels').value;
    let temporaryFaults = document.getElementById('CarFaultList')
    let cFaults = temporaryFaults.options[temporaryFaults.selectedIndex].value
    let repairCost = 0;
    let x = { oName, oSurname, cMake, cEngine, cWheels };
    garageArray.push(x);

    let displayList = document.createElement(`p`)
    let totalCost = document.createElement(`p`)

    listNumber = garageArray.length
    displayList.textContent = listNumber + ") Owner Name: " + garageArray[garageArray.length - 1].oName + " ----" + " Owner Surname: " + oSurname + " ----" + " Car Make: " + cMake + " ---- " + cFaults;
    displayList.setAttribute("id", "DL" + (garageArray.length - 1));
    document.getElementById('CarList').appendChild(displayList);

    if (temporaryFaults.options[temporaryFaults.selectedIndex].value === "No Faults, MOT") repairCost = 1;
    if (temporaryFaults.options[temporaryFaults.selectedIndex].value === "Faulty Tires") repairCost = 1;
    if (temporaryFaults.options[temporaryFaults.selectedIndex].value === "Faulty Lights") repairCost = 2;
    if (temporaryFaults.options[temporaryFaults.selectedIndex].value === "Faulty Dashboard") repairCost = 3;
    if (temporaryFaults.options[temporaryFaults.selectedIndex].value === "Faulty Electrics") repairCost = 4;
    if (temporaryFaults.options[temporaryFaults.selectedIndex].value === "Faulty Engine") repairCost = 5;
    if (temporaryFaults.options[temporaryFaults.selectedIndex].value === "Unknown Faulty") repairCost = "To be determined on arrival";
    if (temporaryFaults.options[temporaryFaults.selectedIndex].value === "Multiple Faults"){
     
    }

    totalCost.textContent = "Total cost: " + repairCost + "£";
    totalCost.setAttribute("id", "RCL" + (garageArray.length - 1));
    document.getElementById('CarList').appendChild(totalCost)

}

function RemoveFromGarageButton() {
    let x = document.getElementById('NameToRemove').value;
    let y = document.getElementById('SurnameToRemove').value;
    for (let i = 0; i < garageArray.length; i++) {
        if (garageArray[i].oName.includes(x) && garageArray[i].oSurname.includes(y)) {
            document.getElementById('CarList').removeChild(document.getElementById('DL' + i));
            document.getElementById('CarList').removeChild(document.getElementById('RCL' + i));
            garageArray.splice(i, 1);
            listNumber = garageArray.length;
        }
    }
}

