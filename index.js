// input elements 
const formEl = document.querySelector("form");
const clearAllEl = document.querySelector(".reset-p");

const amountContainerEl = document.querySelector(".amount-container");
const numberLabelEl = document.querySelector(".number-label");
const amountInputEl = document.querySelector(".amount-input");
// const amountInputVlaue = amountContainerEl.value;

const termContainerEl = document.querySelector(".term-container");
const termInputEl = document.querySelector(".term-input")
// const termInputValue = termInputEl.value;

const rateContainerEl = document.querySelector(".rate-container");
const rateInputEl = document.querySelector(".rate-input");
// const rateInputElValue = rateInputEl.value;

// radio element
const repaymentRadioContainerEl = document.querySelector(".repayment-radio-container");
const repaymentRadioEL = document.getElementById("repayment");

const interestContainerEl = document.querySelector(".interest-icon-container");
const interesetRadioEl = document.getElementById("interest")

const radioElements = document.querySelectorAll(".radio-item");

// error elements
const amountError = document.querySelector(".input-amount-error");
const termError = document.querySelector(".term-input-error");
const rateError = document.querySelector(".rate-input-error");
const radioInputError = document.querySelector(".radio-input-error");


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
    amountError.style.display = "none";
    amountContainerEl.classList.remove("error-state");
});

termInputEl.addEventListener("focus", () => {
    termContainerEl.classList.add("clicked");
    termContainerEl.classList.remove("error-state");
    termError.style.display = "none";

});

rateInputEl.addEventListener("focus", () => {
    rateContainerEl.classList.add("clicked");
    rateContainerEl.classList.remove("error-state");
    rateError.style.display = "none";
});


repaymentRadioContainerEl.addEventListener("click", () => {
    console.log("repayment");
    repaymentRadioEL.checked = true;
    interesetRadioEl.checked = false;
    repaymentRadioContainerEl.classList.add("selected");
    interestContainerEl.classList.remove("selected");
    radioInputError.style.display = "none";
});

interestContainerEl.addEventListener("click", ()=> {
    console.log("interest");
    repaymentRadioContainerEl.classList.remove("selected");
    interestContainerEl.classList.add("selected");
    interesetRadioEl.checked = true;
    repaymentRadioEL.checked = false
    radioInputError.style.display = "none";
});


formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const amountInputVlaue = amountInputEl.value;
    const termInputValue = termInputEl.value;
    const rateInputElValue = rateInputEl.value;



    if(!amountInputVlaue) {
        amountContainerEl.classList.add("error-state");
        amountError.style.display = "block";
        
    }

    if(!termInputValue) {
        termContainerEl.classList.add("error-state");
        termError.style.display = "block";

    }

    if(!rateInputElValue) {
        rateContainerEl.classList.add("error-state");
        rateError.style.display = "block";
        
    }

    if(!interesetRadioEl.value || !repaymentRadioEL.value) {
        radioInputError.style.display = "block";
    
    }

    console.log(amountInputVlaue,termInputValue,rateInputElValue);



})