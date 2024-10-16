function login(event) {
    event.preventDefault(); // Prevents page from refreshing
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedUser = localStorage.getItem(email);
    if (storedUser && JSON.parse(storedUser).password === password) {
        alert("Login successful!");
        localStorage.setItem('loggedInUser', email); // Store the logged-in user
        window.location.href = "home.html"; // Redirect to your main website page
    } else {
        alert("Invalid email or password");
    }
}

function register(event) {
    event.preventDefault(); // Prevents page from refreshing
    
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const storedUser = localStorage.getItem(email);
    if (storedUser) {
        alert("User already exists, please log in.");
    } else {
        localStorage.setItem(email, JSON.stringify({ email, password }));
        alert("Registration successful!");
        showLoginForm(); // Switch to login form
    }
}

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}
