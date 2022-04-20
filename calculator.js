"use strict";

function subtractYears(numOfYears) {
  const dateCopy = new Date();

  dateCopy.setFullYear(dateCopy.getFullYear() - numOfYears);

  return dateCopy
}

let date = new Date();
let over18teen = subtractYears(18, date);

let newDate = over18teen.getDate()+'-'+(over18teen.getMonth()+1)+'-'+over18teen.getFullYear();
document.querySelector("h1").textContent=newDate




