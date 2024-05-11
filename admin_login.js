function redirectToOtherPage() {
    window.location.href = 'other_page.html'; // Replace 'other_page.html' with the actual file path
}

function login(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password123') {
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
}

document.getElementById('loginForm').addEventListener('submit', login);
