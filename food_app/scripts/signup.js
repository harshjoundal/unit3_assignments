import navbar from '../components/navbar.js'
document.getElementById('navbar').innerHTML = navbar();

let users = JSON.parse(localStorage.getItem('users')) || [];

let user_data = document.querySelector('form');

user_data.addEventListener('submit',function(event){
    event.preventDefault()
    let data = {
        name : user_data.name.value,
        contact :user_data.contact.value,
        email : user_data.email.value,
        password : user_data.password.value

    }

    let exist = false;
    
    users.forEach(function(ele){
        if(ele.email == data.email){
            exist = true;
        }
    })

    if(exist == false){
        users.push(data)
        localStorage.setItem('users',JSON.stringify(users));

        alert('Signup Successful!')
        window.location.href = 'login.html'
    }
    else{
        alert('User with same E-mail alrady exist!!')
        window.location.reload()
    }

})