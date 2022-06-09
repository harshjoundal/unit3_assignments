import navbar from '../components/navbar.js'
document.getElementById('navbar').innerHTML = navbar();

let users = JSON.parse(localStorage.getItem('users'));

console.log(users);

let user = {};

let login = document.querySelector('form');

login.addEventListener('submit',function(event){
    event.preventDefault()
    let data = {
        email : login.email.value,
        password : login.password.value,

    }

    let validate = users.filter(function(ele){
        return ele.email == data.email
    })

    console.log('validation data',validate);
    console.log('logindata',data)

    if(data.email == validate[0].email && data.password == validate[0].password){
        localStorage.setItem('login_data',JSON.stringify(validate));
        alert('SignIn Successful!!')
        window.location.href ='index.html';
        console.log('Yes')
    }
    else{
        alert('Email or password incorrect!!');
        window.location.reload();
        console.log('No')
    }

})