const form = document.getElementById("userForm")

const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const birthDate = document.getElementById("birth-date")
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
    const complexEmailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    /*
    `[A-Z0-9._%+-]+` : Matches one or more of the following - alphanumeric chracters, dots, underscores, percent signs, plus signs, and hyphens.
    `@` : Literally matches for the @ symbol, must be in middle of the email address.
    `[A-Z0-9.-]+` : Matches one or more of the following - alphanumeric chracters, dots, and hyphens.
    `\.` : Literal dot '.' an email addesss should have a '.' near the end.
    `[A-Z]{2,4}$` : Matches between 2-4 alaph character - top level domain of an email address e.g. .com
    `/i` : Case insensitive flag, check for lowercase and uppercase.
    */


    if (firstName.value.trim() === ""){
        showInputError(firstName, "First name is required")
        isFormValid = false
    }

    if (lastName.value.trim() === ""){
        showInputError(lastName, "Last name is required")
        isFormValid = false
    }

    if (birthDate.value.trim() === ""){
        showInputError(birthDate, "Date of Birth is required")
        isFormValid = false
    }

    if (!postalCodePattern.test(postalCode.value)) {
        showInputError(postalCode, "Please enter a valid Canadian postal code")
        isFormValid = false
    }

    if (emailInput.value.trim() === ""){
        showInputError(emailInput, "Email is required")
        isFormValid = false
    } else if (!complexEmailPattern.test(emailInput.value)) {
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