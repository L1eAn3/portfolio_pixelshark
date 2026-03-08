let form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Proszę wypełnić wszystkie pola!");
        return;
    }

    alert(
        "Dziękujemy za wiadomość!\n\n" +
        "Imię: " + name + "\n" +
        "Email: " + email + "\n" +
        "Wiadomość: " + message
    );

    form.reset();
});