document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");

    // Email validation
    if (!email.endsWith("@uppolice.in")) {
        message.style.color = "red";
        message.innerText = "Email must end with @uppolice.in";
        return;
    }

    // Basic validation
    if (name === "" || password === "") {
        message.style.color = "red";
        message.innerText = "All fields are required!";
        return;
    }

    // Dummy API simulation
    message.style.color = "black";
    message.innerText = "Submitting...";

    setTimeout(() => {
        message.style.color = "green";
        message.innerText = "Login successful!";

        // Optional: reset form
        document.getElementById("loginForm").reset();
    }, 1500);
});