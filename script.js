const form = document.getElementById("userForm")

const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const postalCode = document.getElementById("postal-code")
const emailInput = document.getElementById("email")

form.addEventListener("submit", (event) => {
    if(!validateForm()){
        event.preventDefault()
        console.error("Form is invalid")
    }
})

function validateForm() {
    let isFormValid = true

    const postalCodePattern = /[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d/
    /*
    [A-Za-z] matches a letter (A-Z, a-z).
    \d matches a digit (0-9).
    A space character.
    The same pattern repeats for the second half.
    */
    const complexEmailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/;
    /*
    [a-zA-Z0-9._%+-]+ matches the local part of the email, allowing letters, numbers, dots, underscores, percent signs, plus signs, and hyphens.
    @ matches the "@" symbol.
    [a-zA-Z0-9.-]+ matches the domain part, allowing letters, numbers, dots, and hyphens.
    \. matches the dot before the top-level domain (TLD).
    [a-zA-Z]{2,} matches the TLD, requiring at least two letters and a max of 4 letters.
    */


    if (firstName.value.trim() === ""){
        showInputError(userInput, "First name is required")
        isFormValid = false
    }

    if (lastName.value.trim() === ""){
        showInputError(userInput, "Last name is required")
        isFormValid = false
    }

    if (!postalCodePattern.test(postalCode.value)) {
        showInputError(ticketNumber, "Please enter a valid Canadian postal code")
        isFormValid = false
    }

    if (!complexEmailPattern.test(emailInput.value)) {
        showInputError(emailInput, "Please enter a valid email address")
        isFormValid = false
    }

    return isFormValid
}

function showInputError(inputElement,message) {
    const errorDisplay = document.createElement("span");
    errorDisplay.innerText = message;
    errorDisplay.className = "error-message";
    errorDisplay.setAttribute("role", "alert")

    inputElement.parentElement.appendChild(errorDisplay)
}