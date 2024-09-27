document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        let isValid = true;
        let errorMessage = "";

        event.preventDefault();
        
        if (nameField.value.trim() === "") {
            isValid = false;
            errorMessage += "Please enter your name.\n";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailField.value.trim() === "" || !emailRegex.test(emailField.value)) {
            isValid = false;
            errorMessage += "Please enter a valid email address.\n";
        }

        if (messageField.value.trim() === "") {
            isValid = false;
            errorMessage += "Please enter your message.\n";
        }

        if (!isValid) {
            event.preventDefault();
            alert(errorMessage);
        } else {
            alert("Thank you for your message! I will contact you soon.");
        }
    });
});
