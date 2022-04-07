"use strict";

// CALCULATES CURRENT DATE 
// let today = new Date();

// let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

// console.log(date);

function subtractYears(numOfYears, date = new Date()) {
    const dateCopy = new Date(date.getTime());
  
    dateCopy.setFullYear(dateCopy.getFullYear() - numOfYears);
  
    return dateCopy;
  }
  
  let date = new Date();
//   let shortdate = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
// isusses with displaying the short date, goooodnight
  let over18teen = subtractYears(18, date2);
  
  console.log(over18teen); 
  