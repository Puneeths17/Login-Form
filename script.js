document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const loginSection = document.getElementById("loginSection");
    const formSection = document.getElementById("formSection");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        console.log("Email entered: ", email);
        console.log("Password entered: ", password);

        loginSection.style.display = "none";
        formSection.style.display = "block";
    
    });
});
