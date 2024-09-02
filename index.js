// input elements 
const formEl = document.querySelector("form");
const clearAllEl = document.querySelector(".reset-p");

const amountContainerEl = document.querySelector(".amount-container");
const numberLabelEl = document.querySelector(".number-label");
const amountInputEl = document.querySelector(".amount-input");
const amountInputVlaue = amountContainerEl.value;

const termContainerEl = document.querySelector(".term-container");
const termInputEl = document.querySelector(".term-input")
const termInputValue = termInputEl.value;

const rateContainerEl = document.querySelector(".rate-container");
const rateInputEl = document.querySelector(".rate-input");
const rateInputElValue = rateInputEl.value;

// radio element
const repaymentRadioContainerEl = document.querySelector(".repayment-radio-container");
const repaymentRadioEL = document.getElementById("repayment");

const interesetContainerEl = document.querySelector(".interest-icon-container");
const interesetRadioEl = document.getElementById("interest")

const radioElements = document.querySelectorAll(".radio-item");
// clearAll to reset the form
clearAllEl.addEventListener("click", () => {
    console.log("reset clicked");
    amountInputEl.value = null;
    termInputEl.value = null;
    rateInputEl.value = null;
    amountContainerEl.classList.remove("clicked");
    termContainerEl.classList.remove("clicked");
    rateContainerEl.classList.remove("clicked");
});

amountInputEl.addEventListener("focus", () => {
    amountContainerEl.classList.add("clicked");
});

termInputEl.addEventListener("focus", () => {
    termContainerEl.classList.add("clicked");
});

rateInputEl.addEventListener("focus", () => {
    rateContainerEl.classList.add("clicked");
});


repaymentRadioEL.addEventListener("click", () => {
    console.log("repayment");
    repaymentRadioEL.checked = true;
    interesetRadioEl.checked = false;
    repaymentRadioContainerEl.classList.add("selected");
    interesetContainerEl.classList.remove("selected");
});

interesetRadioEl.addEventListener("click", ()=> {
    console.log("interest");
    repaymentRadioContainerEl.classList.remove("selected");
    interesetContainerEl.classList.add("selected");
    interesetRadioEl.checked = true;
    repaymentRadioEL.checked = false
});