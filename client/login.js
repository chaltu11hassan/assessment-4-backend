const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');

// const signInBtn = document.querySelector('#login-submit')
// const registerBtn = document.querySelector('#reg-submit')

function login(e){
    e.preventDefault();

    let username = document.getElementById('log-username');
    let password = document.getElementById('log-password');

    let loggingIn = {
        username: username.value,
        password: password.value
    }

    axios.post('http://localhost:4000/api/login', loggingIn).then(res => {
        // Insert local storage code below
        console.log(res.data)
       localStorage.setItem('user', JSON.stringify(res.data))
        
        location.href = 'http://127.0.0.1:5502/client/travelHome.html'
    })
}

function register(e){
    e.preventDefault()

    let username = document.getElementById('reg-username');
    let email = document.getElementById('reg-email');
    let password = document.getElementById('reg-password');

    let newUser = {
        username: username.value,
        email: email.value,
        password: password.value
    }

    axios.post('http://localhost:4000/api/register', newUser).then(res => {
        let message = document.createElement('h2');
        message.textContent = res.data;
        message.style.margin = '10px';
        registrationForm.appendChild(message);

        username.value = '';
        email.value = '';
        password.value = '';
    })
}


registrationForm.addEventListener('submit',register);
loginForm.addEventListener('submit',login);

