let signInForm = document.querySelector('.sign-in-form');       // variable for the admin sign in page

signInForm.addEventListener('submit', function(e) {

    // stops default actions of event
    e.preventDefault();

    let username = document.getElementById('sign-in-user').value;           // username variable from form
    let password = document.getElementById('sign-in-password').value;       // password variable from form

    // fetch api for admin-login page
    fetch('/admin-login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({username, password})
    }).then((resp) => {
        if (resp.status === 400) {
            throw new Error();
        } 
        return resp.json();
    }).then((data) => {
        window.location.href = data.redirectURL;
    }).catch(() => alert('Wrong username or password'));
})
