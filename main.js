class Calculator {
  constructor(previousOperandText, currOperandText) {
    this.previousOperandText = previousOperandText;
    this.currOperandText = currOperandText;
    this.clear();
  }

  clear() {
    this.currOperandText = this.previousOperandText = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {}

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {}
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperandText = document.querySelector("[data-prev-operand]");
const currOperandText = document.querySelector("[data-current-operand]");
