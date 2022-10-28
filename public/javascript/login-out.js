


//login (already a user)


async function loginHandler(event){
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if(email && password){
        const response = await fetch('/api/users/login', {
            method: 'post', 
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        });
        if(response.ok) {
            document.lacation.replace('/dashboard/')
        }else {
            alert(response.statusText);
        }
    }
}

//sign up (new user)
async function signupHandler (event) {
    event.preventDefault();
    
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if(username && email && password){
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email, 
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        });
        if (response.ok){
            document.location.replace('/dashboard/');
        }else {
            alert(response.statusText);
        }
    }
}

// logout
async function logout(){
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: {'ContentType': 'application/json'}
    });
    if(response.ok) {
        document.location.replace('/');
    }else {
        alert(response.statusText);
    }
}

document.querySelector('.login-form').addEventListener('submit', loginHandler);
document.querySelector('.signup-form').addEventListener('submit', signupHandler);
document.querySelector('#logout').addEventListener('submit', logout);