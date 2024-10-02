// Функція для перемикання видимості пароля
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const icon = passwordInput.nextElementSibling;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.style.color = "#007BFF"; // Змінює колір іконки, коли пароль видно
    } else {
        passwordInput.type = "password";
        icon.style.color = "#333"; // Повертає стандартний колір
    }
}

// Валідація форми
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Забороняємо стандартну відправку форми

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Перевірка наявності даних у полях
    if (email === '' || password === '') {
        alert('Please fill in all required fields.');
        return;
    }

    // Валідація пароля
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be min 8 characters long, contain at least one digit, one uppercase and lowercase letter, and one special character.');
        return;
    }

    // Вивід даних форми в консоль
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    alert('Form successfully validated and submitted!');
});
