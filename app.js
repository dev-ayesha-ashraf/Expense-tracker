// fetching HTML elements
const incomeText = document.querySelector(".income-text");
const incomeNumber = document.querySelector(".income-number");
const expenseText = document.querySelector(".expense-text");
const expenseNumber = document.querySelector(".expense-number");
const historyContainer = document.getElementById("history");
const incomeBox = document.querySelector(".income-box");
const expenseBox = document.querySelector(".expense-box");

function addIncome() {
  let textValue = incomeText.value;
  let amountValue = parseFloat(incomeNumber.value);

  // update income box 
  if(textValue !== "" && !isNaN(amountValue)){
    let currentIncome = parseFloat(incomeBox.textContent);
    let newIncome = currentIncome + amountValue;
    incomeBox.textContent = newIncome.toFixed(2);

    // adding entry to history list
    let entry = document.createElement("p")
    entry.setAttribute("class" , "mylist")
    entry.textContent = `${textValue} - $${amountValue.toFixed(2)}t`;
    let deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("class" , "del-btn");
    deleteBtn.textContent = "X";
    deleteBtn.setAttribute("onclick" , "deleteText(this)")
   
    entry.appendChild(deleteBtn);
    console.log(deleteBtn);
    historyContainer.appendChild(entry);

    // clear input fields
    incomeText.value = "";
    incomeNumber.value = "";
  }

}

function addExpense() {
  const textValue = expenseText.value.trim();
  const amountValue = parseFloat(expenseNumber.value);
  
  if (textValue !== "" && !isNaN(amountValue)) {
    // Update income and expense boxes
    let currentIncome = parseFloat(incomeBox.textContent);
    let currentExpense = parseFloat(expenseBox.textContent);
    let newIncome = currentIncome - amountValue;
    let newExpense = currentExpense + amountValue;
    incomeBox.textContent = newIncome.toFixed(2);
    expenseBox.textContent = newExpense.toFixed(2);

    // Add entry to history list
    let entry = document.createElement("p");
    entry.setAttribute("class" , "mylist")
    entry.textContent = `${textValue} - $${amountValue.toFixed(2)}`;
 
    let deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("class" , "del-btn");
    deleteBtn.textContent = "X";
    deleteBtn.setAttribute("onclick" , "deleteText(this)")

    entry.appendChild(deleteBtn);
    console.log(deleteBtn);
    historyContainer.appendChild(entry);
    // Clear input fields
    expenseText.value = "";
    expenseNumber.value = "";
  }
}

function deleteText(element) {
  var listItem = element.parentNode;
  listItem.parentNode.removeChild(listItem);

}
