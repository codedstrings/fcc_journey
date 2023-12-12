function checkCashRegister(price, cash, cid) {
  // Define the value of each currency unit
  const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  // Initialize variables
  let changeDue = cash - price;
  let change = [];
  let totalCid = 0;

  // Calculate total cash in the drawer
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  totalCid = totalCid.toFixed(2);

  // Check for insufficient funds
  if (parseFloat(totalCid) < changeDue) {
    // If the total cash in the drawer is less than the change due, return an object indicating insufficient funds
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Check for closed drawer
  else if (parseFloat(totalCid) === changeDue) {
    // If the total cash in the drawer is equal to the change due, return an object indicating that the drawer is closed
    // Provide the entire cash-in-drawer as the change
    return { status: "CLOSED", change: cid };
  }

  // Calculate and return change
  else {
    // Iterate through each currency unit in the cash drawer, starting from the highest
    for (let i = cid.length - 1; i >= 0; i--) {
      // Retrieve information about the current currency
      const currentUnit = currencyUnit[cid[i][0]];
      const availableNotes = cid[i][1];

      // Calculate the maximum number of units that can be returned for the current currency
      const maxNotes = Math.floor(availableNotes / currentUnit);

      // Calculate the actual number of units to be returned based on the change due
      // Ensure that we don't return more units than are available in the drawer
      let notesToReturn = Math.min(maxNotes, Math.floor(changeDue / currentUnit));

      if (notesToReturn > 0) {
        // If there are units to return, calculate the returned amount and update the changeDue
        const returnedAmount = notesToReturn * currentUnit;
        changeDue = (changeDue - returnedAmount).toFixed(2);

        // Push the details of the returned amount (currency name and value) into the change array
        change.push([cid[i][0], returnedAmount]);
      }
    }
  }

  // Check if there's still change due
  if (changeDue > 0) {
    // If there's still change due after iterating through all currencies, return an object indicating insufficient funds
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else {
    // If all the change has been calculated and there's no more change due, return an object indicating the change to be returned
    return { status: "OPEN", change: change };
  }

}

//example calling
checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25], 
  ["ONE", 90], 
  ["FIVE", 55], 
  ["TEN", 20], 
  ["TWENTY", 60], 
  ["ONE HUNDRED", 100]
]);