function signUp(e) {
    e.preventDefault();
    let user_name = document.getElementById("user_name").value,
        user_email = document.getElementById("user_email").value,
        user_password = document.getElementById("user_password").value,
        confirm_password = document.getElementById("confirm_password").value;

        let user_address="";
        let user_contact="";
        let user_country="";
        let user_about="";

        function checkPassword(){
            if (user_password!==confirm_password){
                alert("Re-enter the Password");
                confirm_password.value=reset();
            }
            else{
                alert("Password Matched");
            }
        }
        checkPassword()
    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];

    let exist = user_list.length && 
        JSON.parse(localStorage.getItem('user_list')).some(data => 
            data.user_email.toLowerCase() == user_email.toLowerCase()
        );

    if(!exist){
        user_list.push({ user_name, user_email, 
                        user_password, confirm_password, user_address, user_contact, user_country, user_about });

        localStorage.setItem('user_list', JSON.stringify(user_list));

        console.log(localStorage.getItem('user_list'));

        document.querySelector('form').reset();
        document.getElementById('user_email').focus();
        alert('Account created Successfully');
        location.href = "./Login.html";
    }
    
    else{
        alert('Sorry the User already Exist!! \n Try with different E-mail');
        document.querySelector('form').reset();
    }
    
}

function signIn(e) {
    e.preventDefault();
    let user_password = document.getElementById('user_password').value;
    let user_email = document.getElementById('user_email').value;
    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];

    let exist = user_list.length &&
    JSON.parse(localStorage.getItem('user_list')).some(data => 
        data.user_password == user_password);

    if(!exist){
        alert("Incorrect login credentials");
        document.querySelector('form').reset();        
    }
    else{
        localStorage.setItem("user_id",JSON.stringify(user_email));
        alert("Your login in successful");
        location.href = "../profile.html";  
    }
}


