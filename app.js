var btn = document.querySelector("#btn");
var inputBox = document.querySelector("#txtarea");
var inputBox2 = document.querySelector("#txtarea2");
var outputBox = document.querySelector("#outputB");
var outputBox1 = document.querySelector("#outputB1");
var outputBox2 = document.querySelector("#outputB2");
var outputBox3 = document.querySelector("#outputB3");
var outputBox4 = document.querySelector("#outputB4");
var outputBox5 = document.querySelector("#outputB5");
var outputBox6 = document.querySelector("#outputB6");
var outputBox7 = document.querySelector("#outputB7");

function clickHandler(){
    var bill = parseInt(inputBox.value);
    var cash = parseInt(inputBox2.value);
    var change = cash - bill;
    outputBox.innerText = "Change = " + change;
    var cashReg=["2000", "500", "100", "20", "10", "5", "1"];
    var cashArray = [outputBox1,outputBox2,outputBox3,outputBox4,outputBox5,outputBox6,outputBox7]
    
    for (var i=0; i<7; i++){
        var note= cashReg[i];
        var j = Math.floor(change/note);

        var cashId = cashArray[i];
        cashId.innerText = note + " : " + j


        change=change%note;
      }
}

btn.addEventListener("click", clickHandler);