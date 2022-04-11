"use strict";

function subtractYears(numOfYears) {
  const dateCopy = new Date();

  dateCopy.setFullYear(dateCopy.getFullYear() - numOfYears);

  return dateCopy
}


let date = new Date();
// let shortdate = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
// isusses with displaying the short date, goooodnight
let over18teen = subtractYears(18, date);

let newDate = over18teen.getDate()+'-'+(over18teen.getMonth()+1)+'-'+over18teen.getFullYear();
document.querySelector("h1").textContent=newDate