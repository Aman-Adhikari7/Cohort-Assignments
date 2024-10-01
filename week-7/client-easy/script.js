// write your code here 

const logincontainer = document.getElementById("login-page")
const signupcontainer= document.getElementById("signup-page")

document.getElementById("signup-1").addEventListener('click',(e)=>{
    e.preventDefault()

   logincontainer.style.display='none'
   signupcontainer.style.display="block"
})

//
//sprevious-page

document.getElementById('previous-page').addEventListener('click',(e)=>{

    e.preventDefault(),
    logincontainer.style.display='block',
   signupcontainer.style.display="none"
})

//signup User and Signup Admin

// Event listener for the sign-up button
document.getElementById("signup-user").addEventListener('click', async (e) => {
    e.preventDefault();

    // Get input values from the form
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

 
    if (!username || !password) {
        const appender = document.getElementById('signup-page');
        const div = document.createElement('div');
        div.innerHTML = "<h6>Please fill both sections</h6>";
        appender.appendChild(div);
        return; 
    }

    try {
        // Make the fetch request to the server
        const response = await fetch('http://localhost:4000/api/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username, // Send input values
                password: password
            })
        });

     
        if (!response.ok) {
            throw new Error('Server error. Please try again later.');
        }

        
        const loginContainer = document.getElementById('login-page');
        const signupContainer = document.getElementById('signup-page');

        if (loginContainer && signupContainer) {
            loginContainer.style.display = 'block';
            signupContainer.style.display = 'none';
        }
    } catch (error) {
      
        const appender = document.getElementById('signup-page');
        const div = document.createElement('div');
        div.innerHTML = `<h6>${error.message}</h6>`;
        appender.appendChild(div);
    }
});

//signup admin

document.getElementById("signup-admin").addEventListener('click', async (e) => {
    e.preventDefault();

    // Get input values from the form
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

 
    if (!username || !password) {
        const appender = document.getElementById('signup-page');
        const div = document.createElement('div');
        div.innerHTML = "<h6>Please fill both sections</h6>";
        appender.appendChild(div);
        return; 
    }

    try {
        // Make the fetch request to the server
        const response = await fetch('http://localhost:4000/api/admins/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username, // Send input values
                password: password
            })
        });

     
        if (!response.ok) {
            throw new Error('Server error. Please try again later.');
        }

        
        const loginContainer = document.getElementById('login-page');
        const signupContainer = document.getElementById('signup-page');

        if (loginContainer && signupContainer) {
            loginContainer.style.display = 'block';
            signupContainer.style.display = 'none';
        }
    } catch (error) {
      
        const appender = document.getElementById('signup-page');
        const div = document.createElement('div');
        div.innerHTML = `<h6>${error.message}</h6>`;
        appender.appendChild(div);
    }
});

/// login user  

document.getElementById("user-login").addEventListener('click', async (e) => {
    e.preventDefault();

    // Get input values from the form
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

 
    if (!username || !password) {
        const appender = document.getElementById('login-page');
        const div = document.createElement('div');
        div.innerHTML = "<h6>Please fill both sections</h6>";
        appender.appendChild(div);
        return; 
    }

    try {
        // Make the fetch request to the server
        const response = await fetch('http://localhost:4000/api/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username, // Send input values
                password: password
            })
        });

     
        if (!response.ok) {
            throw new Error('Server error. Please try again later.');
        }

        
        const loginContainer = document.getElementById('login-page');
        const mainweb = document.getElementById('real-content-User');

        if (loginContainer && mainweb) {
            loginContainer.style.display = 'none';
            
            mainweb.style.display = 'block';
           
        }
    } catch (error) {
      
        const appender = document.getElementById('login-page');
        const div = document.createElement('div');
        div.innerHTML = `<h6>${error.message}</h6>`;
        appender.appendChild(div);
    }
});


// login- admin  

document.getElementById("admin-login").addEventListener('click', async (e) => {
    e.preventDefault();

    // Get input values from the form
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

 
    if (!username || !password) {
        const appender = document.getElementById('login-page');
        const div = document.createElement('div');
        div.innerHTML = "<h6>Please fill both sections</h6>";
        appender.appendChild(div);
        return; 
    }

    try {
        // Make the fetch request to the server
        const response = await fetch('http://localhost:4000/api/admins/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username, // Send input values
                password: password
            })
        });

     
        if (!response.ok) {
            throw new Error('Server error. Please try again later.');
        }

        
        const loginContainer = document.getElementById('login-page');
        const mainweb = document.getElementById('real-content-Admin');

        if (loginContainer && mainweb) {
            loginContainer.style.display = 'none';
            
            mainweb.style.display = 'block';
           
        }
    } catch (error) {
      
        const appender = document.getElementById('login-page');
        const div = document.createElement('div');
        div.innerHTML = `<h6>${error.message}</h6>`;
        appender.appendChild(div);
    }
});




