function signUp(e) {
    e.preventDefault();
    let user_name = document.getElementById("user_name").value,
        user_email = document.getElementById("user_email").value,
        user_password = document.getElementById("user_password").value,
        confirm_password = document.getElementById("confirm_password").value;

    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];

    let exist = user_list.length && 
        JSON.parse(localStorage.getItem('user_list')).some(data => 
            data.user_email.toLowerCase() == user_email.toLowerCase()
        );

    if(!exist){
        user_list.push({ user_name, user_email, 
                        user_password, confirm_password });

        localStorage.setItem('user_list', JSON.stringify(user_list));

        console.log(localStorage.getItem('user_list'));

        document.querySelector('form').reset();
        document.getElementById('user_email').focus();
        alert('Account created Successfully');
        location.href = "./Login.html";
    }
    
    else{
        alert('Sorry the User already Exist!! \n Try with different Phone number or email');
        document.querySelector('form').reset();
    }
    
}

function signIn(e) {
    e.preventDefault();
    let user_password = document.getElementById('user_password').value;
    
    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];

    let exist = user_list.length &&
    JSON.parse(localStorage.getItem('user_list')).some(data => 
        data.user_password.toLowerCase() == user_password);

    if(!exist){
        alert("Incorrect login credentials");
        document.querySelector('form').reset();        
    }
    else{
        alert("Your login in successful");
        location.href = "../../index.html";  
    }
}

function registration()
	{
        let user_name = document.getElementById("user_name").value,
        user_email = document.getElementById("user_email").value,
        user_password = document.getElementById("user_password").value,
        confirm_password = document.getElementById("confirm_password").value;
		
        //email id expression code
		let user_password_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		let letters = /^[A-Za-z]+$/;
		let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(user_name=='')
		{
			alert('Please enter your name');
		}
		else if(!letters.test(user_name))
		{
			alert('Name field required only alphabet characters');
		}
		else if(user_email=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(user_email))
		{
			alert('Invalid email');
		}
		else if(user_password=='')
		{
			alert('Please enter Password');
		}
		else if(confirm_password=='')
		{
			alert('Enter Confirm Password');
		}
		else if(!user_password_expression.test(user_password))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
		}
		else if(user_password != user_password)
		{
			alert ('Password not Matched');
		}
		else if(document.getElementById("user_password").value.length < 6)
		{
			alert ('Password minimum length is 4');
		}
		else if(document.getElementById("user_password").value.length > 12)
		{
			alert ('Password max length is 12');
		}
		else
		{				                            
               alert('Thank You for Login');
			   // Redirecting to other page or webste code. 
			   window.location = "./Login.html"; 
		}
	}
	