function validateForm() {
    // Get email values
    const email = document.forms["contactForm"]["email"].value;
    const confirmEmail = document.forms["contactForm"]["confirmEmail"].value;

    // Check if emails match
    if (email !== confirmEmail) {
        alert("The email addresses do not match. Please re-enter them.");
        return false; // Stop form submission
    }

    alert("Form submitted successfully!");
    return true; // Allow form submission
}