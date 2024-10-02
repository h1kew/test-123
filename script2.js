// Функція для показу/приховування пароля
function togglePassword(fieldId) {
    const passwordField = document.getElementById(fieldId);
    const toggleIcon = passwordField.nextElementSibling;

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.style.color = "#007BFF"; // Змінює колір іконки, коли пароль видно
    } else {
        passwordField.type = "password";
        toggleIcon.style.color = "#333"; // Повертає стандартний колір
    }
}

// Функція для валідації форми
function validateForm(event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку відправки форми

    // Отримуємо всі значення з форми
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    const dotNumber = document.getElementById('dot-number').value;
    const carrierName = document.getElementById('carrier-name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zip-code').value;
    const timeZone = document.getElementById('time-zone').value;

    // Перевірка, чи всі обов'язкові поля заповнені
    if (!firstName || !lastName || !email || !phone || !password || !passwordConfirm ||
        !dotNumber || !carrierName || !address || !city || !state || !zipCode || !timeZone) {
        alert("Please fill in all required fields.");
        return;
    }

    // Перевірка відповідності паролів
    if (password !== passwordConfirm) {
        alert("Passwords do not match!");
        return;
    }

    // Перевірка мінімальної довжини пароля
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // Виведення даних з форми в консоль
    console.log({
        firstName,
        lastName,
        email,
        phone,
        password,
        dotNumber,
        carrierName,
        address,
        city,
        state,
        zipCode,
        timeZone
    });

    alert("Form submitted successfully!");
}

// Додаємо слухача події до форми
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", validateForm);
});
