let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

 let billInput = document.querySelector("#bill")
 billInput.addEventListener("input", receiveBillValue)

let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input", )

 function receiveBillValue(){
    bill = billInput.valueAsNumber

    calculate()
} 

function receiveNumberOfPeopleValue(){
    numberOfPeople = numberOfPeopleInput.valueAsNumber

    calculate()
}

function receiveTipPercentageValue(value){
    tipPercentage = value / 100


    buttonSelected = document.querySelector("")
}

function calculate(){
    if(bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0){
        console.log("Y")
    } else{
        console.log("N")
    }
}