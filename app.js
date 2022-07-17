// list all variables
var billValue, btn, custom, people, tipAmount, totalAmount, reset;

billValue = document.getElementById("bill-price");
btn = document.querySelectorAll(".percentage-button");
custom = document.getElementById("custom-percentage");
people = document.querySelector("#total-people");
tipAmount = document.getElementById("bill-tip-amount");
totalAmount = document.getElementById("total-per-person");
reset = document.getElementById("reset-button");

// calculate tip amount when you click on tip percentage button
btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    let tipvalue = button.innerText;
    tipvalue = tipvalue.substr(0, tipvalue.length - 1); //takes away the percentage from the values
    //console.log(tipvalue);

    //if number of bill is empty, give an alert
    if (billValue.value === " ") {
      alert("Bill Amount Cannot Be Empty, Add Bill Amount");
      resetAll();
    }else{
           //call the calculate tip function
        calculateTip(
      parseFloat(billValue.value),
      parseInt(tipvalue),
      parseInt(people.value)
    );
    }

    //if the number of people is not specified, assign a value of 1
    if (people.value === " ") {
      people.value = 1;
    }else{
      people.value = value
    }
   
  });
});

// Calculate tip when user gives a custom tip percentage value
custom.addEventListener("blur", (e) => {
  calculateTip(
    parseFloat(billValue.value),
    parseInt(e.target.value),
    parseInt(people.value)
  );
})


function calculateTip(billValue, tipPercentage, people) {
  var tip = (billValue * (tipPercentage / 100)) / people;
  //console.log(tip);
  var tipRound = Math.floor(tip);
  tipRound = tipRound.toFixed(2);  //set to 2 decimal place
  console.log(tipRound);

  tipAmount.innerText = tipRound;

  //total amount per person
  var total = (tip * people ) + billValue;
  total = total.toFixed(2);
  totalAmount.innerText = total;
  //console.log(total);
}

reset.addEventListener("click", resetAll);

function resetAll() {
  tipAmount.innerHTML = "0.00";
  totalAmount.innerHTML = "0.00";
  billValue.value = "";
  people.value = "";
  custom.value = "";
}
