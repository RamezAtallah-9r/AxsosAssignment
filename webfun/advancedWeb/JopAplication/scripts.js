// Helper function to set validation state colors
function setValidationState(elementId, isValid) {
    const element = document.getElementById(elementId);
    if (!element) return;

    if (isValid) {
        element.classList.remove('invalid');
        element.classList.add('valid');
    } else {
        element.classList.remove('valid');
        element.classList.add('invalid');
    }
}

// Validation Functions for Each Input
function validateFirstName() {
    const firstName = document.getElementById("firstName");
    // Should not contain numbers or spaces
    const isValid = firstName.value.trim() !== "" && !/\d/.test(firstName.value) && !/\s/.test(firstName.value);
    setValidationState("firstName", isValid);
    return isValid;
}

function validateLastName() {
    const lastName = document.getElementById("lastName");
    // Should not contain numbers or spaces
    const isValid = lastName.value.trim() !== "" && !/\d/.test(lastName.value) && !/\s/.test(lastName.value);
    setValidationState("lastName", isValid);
    return isValid;
}

function validateEmail() {
    const email = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email.value);
    setValidationState("email", isValid);
    return isValid;
}

function validatePhone() {
    const phone = document.getElementById("phone");
    // Should be 10-15 digits
    const phoneRegex = /^\d{10,15}$/;
    const isValid = phoneRegex.test(phone.value);
    setValidationState("phone", isValid);
    return isValid;
}

function validateExperience() {
    const experience = document.getElementById("experience");
    const val = parseInt(experience.value);
    const isValid = !isNaN(val) && val >= 0 && val <= 30;
    setValidationState("experience", isValid);
    return isValid;
}

function validateWorkType() {
    const radios = document.getElementsByName("workType");
    let isChecked = false;
    for (let radio of radios) {
        if (radio.checked) {
            isChecked = true;
            break;
        }
    }
    // Radio buttons are a bit different for border/shadow, 
    // but we'll apply the class to the fieldset if needed, 
    // or just return the value for form submission.
    return isChecked;
}

function validateCV() {
    const cv = document.getElementById("cv");
    const isValid = cv.files.length > 0 && cv.files[0].type === "application/pdf";
    setValidationState("cv", isValid);
    return isValid;
}

function validateAppId() {
    const appId = document.getElementById("appId");
    const isValid = appId.value.trim() !== "";
    setValidationState("appId", isValid);
    return isValid;
}

function validateCoverLetter() {
    const coverLetter = document.getElementById("coverLetter");
    const isValid = coverLetter.value.trim().length >= 20;
    setValidationState("coverLetter", isValid);
    return isValid;
}

function validateSalary() {
    const salary = document.getElementById("slaray");
    const isValid = salary.value > 0;
    setValidationState("slaray", isValid);
    return isValid;
}

// Form Submission Validation
function validateForm() {
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isExperienceValid = validateExperience();
    const isCVValid = validateCV();
    const isAppIdValid = validateAppId();
    const isCoverLetterValid = validateCoverLetter();
    const isSalaryValid = validateSalary();
    const isWorkTypeValid = validateWorkType();

    const allValid = isFirstNameValid && isLastNameValid && isEmailValid && 
                     isPhoneValid && isExperienceValid && isCVValid && 
                     isAppIdValid && isCoverLetterValid && isSalaryValid && isWorkTypeValid;

    if (!allValid) {
        alert("Please correct the invalid fields before submitting.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Reset Styles
function resetStyles() {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.classList.remove('valid', 'invalid');
    });
}
