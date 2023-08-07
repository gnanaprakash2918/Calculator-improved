class Calculator {
  constructor(previousOperandText, currOperandText) {
    this.previousOperandText = previousOperandText;
    this.currOperandText = currOperandText;
    this.clear();
  }

  clear() {
    this.currOperand = this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    if (number === "." && this.currOperand.includes(".")) return;
    this.currOperand = this.currOperand.toString() + number.toString();
  }

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {
    this.currOperandText.innerText = this.currOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperandText = document.querySelector("[data-prev-operand]");
const currOperandText = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandText, currOperandText);

numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.appendNumber(btn.innerText);
    calculator.updateDisplay();
  });
});
