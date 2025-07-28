document.addEventListener("DOMContentLoaded", function (event) {

    const form = document.getElementsByTagName("form")[0];
    const name = document.getElementById("name");
    const name_error = document.querySelector("#name + error-msg");
    const email = document.getElementById("email");
    const email_error = document.querySelector("#email + error-msg");
    const comments = document.getElementById("comments");
    const comments_error = document.querySelector("#comments + error-msg");
    const char_count = document.getElementById("char-count");
    const form_errors_field = document.getElementById("form-errors");

    let form_errors = [];

    name.addEventListener("input", function (event)  {
        if(name.validity.valid) {
            name_error.textContent = "";
        }  else {
            show_error();
        }
    });

    email.addEventListener("input", function (event)  {
        if(email.validity.valid) {
            email_error.textContent = "";
        }  else {
            show_error();
        }
    });

    comments.addEventListener("input", function (event)  {
        update_char_count();
        if(comments.validity.valid) {
            comments_error.textContent = "";
        }  else {
            show_error();
        }
    });

    form.addEventListener("submit", function (event) {
        if(!name.validity.valid) {
            show_error();
            event.preventDefault();
        }
        form_errors_field.value = form_errors;
    });

    function show_error() {
        if (name.validity.valueMissing) {
            name_error.textContent = "Please enter a name.";
            form_errors.push("No name");
        } else if (name.validity.patternMismatch) {
            name_error.textContent = "Name can only contain letters A-Z and spaces.";
            form_errors.push("Invalid name: " + name.value);
        } else if (name.validity.tooLong) {
            name_error.textContent = "Name can be at most 60 characters";
            form_errors.push("Name over 60 characters");
        }

        if(email.validity.valueMissing) {
            email_error.textContent = "Please enter an email.";
            form_errors.push("No email");
        } else if (email.validity.patternMismatch) {
            email_error.textContent = "Email does not fit proper format.";
            form_errors.push("Invalid email: " + email.value);
        } else if (email.validity.tooLong) {
            email_error.textContent = "Email can be at most 60 characters.";
            form_errors.push("Email over 60 characters");
        }

        if(comments.validity.valueMissing) {
            comments_error.textContent = "Please enter a comment.";
            form_errors.push("No comments");
        } else if (comments.validity.tooLong) {
            comments_error.textContent = "Comments can be at most 1000 characters";
            form_errors.push("Comments over 1000 characters");
        }
    }

    function update_char_count() {
        char_count.textContent = comments.value.length;
    }

});