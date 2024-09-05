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

// results element
const repaymentAmount = document.querySelector(".monthly-repayment-amount");
const grandTotal = document.querySelector(".grand-total");
const grandTotalAmount = document.querySelector(".grand-total-amount");
const resultsContainer = document.querySelector(".results-container");
const emptyContainer = document.querySelector(".empty-results-container");

const paymentTitle = document.querySelector(".payment-title");
const totalPayment = document.querySelector(".total-title");

let interesetOption ;
let repaymentOption ;

// clearAll to reset the form
clearAllEl.addEventListener("click", () => {

    console.log("reset clicked");
    amountInputEl.value = null;
    termInputEl.value = null;
    rateInputEl.value = null;
    amountContainerEl.classList.remove("clicked");
    termContainerEl.classList.remove("clicked");
    rateContainerEl.classList.remove("clicked");
    repaymentRadioEL.checked = false;
    interesetRadioEl.checked = false;
    repaymentRadioContainerEl.classList.remove("selected");
    interestContainerEl.classList.remove("selected");

    resultsContainer.style.display = "none";
    emptyContainer.style.display = "block";

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
    repaymentOption = repaymentRadioEL.value;
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
    interesetOption = interesetRadioEl.value;
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

    if(!interesetOption && !repaymentOption) {
        radioInputError.style.display = "block";
    }

    console.log(amountInputVlaue,termInputValue,rateInputElValue);
    // R = P * r / (1 - (1 / (1 + r)n))

    let monthlyinterest = rateInputElValue / 12;
    let num = 1 + monthlyinterest;
    let monthlyRepayment = ((amountInputVlaue * monthlyinterest) / (1 - (1 / (num * termInputValue * 12)))).toFixed(2);
    let overallAmount = (monthlyRepayment * termInputValue ).toFixed(2);
   

    if(repaymentRadioEL.checked && amountInputVlaue && termInputValue && rateInputElValue) {
        console.log(repaymentRadioEL.value);
        paymentTitle.textContent = "Monthly repayment";
        totalPayment.textContent = "Total you'll repay over the term"
        repaymentAmount.textContent = monthlyRepayment;
        grandTotalAmount.textContent = overallAmount;
        emptyContainer.style.display = "none";
        resultsContainer.style.display = "block";
    }

    if(interesetRadioEl.checked && amountInputVlaue && termInputValue && rateInputElValue) {
        console.log(interesetRadioEl.value)
        paymentTitle.textContent = "Monthly Interest payment";
        totalPayment.textContent = "Total interest you'll repay over the term"
        // total intereset = (yearly interest /100) * total amount * term
        // monthly interest = total interset / term * 12 
        const interestPayment =  ((rateInputElValue /100) * amountInputVlaue * termInputValue).toFixed(2); 
        const monthlyInterestpayment = (interestPayment / (termInputValue * 12)).toFixed(2);

        grandTotalAmount.textContent = interestPayment;
        repaymentAmount.textContent = monthlyInterestpayment;
        emptyContainer.style.display = "none";
        resultsContainer.style.display = "block";
    }
    

});



// From the principal amount, the interest rate, and the loan period you will calculate the monthly payment, the sum of all payments and the total amount paid in interest. The formula is given below:

//    R = P * r / (1 - (1 / (1 + r)n))

// where

// R = monthly payment
// P = principal loan amount
// r = monthly interest rate (yearly rate divided by 12)
// n = number of months