
// let user_crud = JSON.parse(localStorage.getItem("user_crud"));
let profile_id = JSON.parse(localStorage.getItem("profile_id"));
let btn = document.getElementById('btn');
document.getElementById('btn').onclick = function() {
    if (profile_id) {
      btn.innerText = "Explore";
      window.location.href = './pages/homepage.html';
    } else {
        btn.innerText = "Sign In";
        register();
        
    }
  };

 function register() {
    document.getElementById("right_corner").style.display = "block";
 }

function register() {

    var x = document.getElementById("right_corner");
    x.classList.remove("hide");
    x.classList.add("block");
    var y = document.getElementById("main_page");
    y.style.width = "70%";
    var j = document.getElementById("left-div");
    j.style.width = "50%";
    var z = document.getElementById("left-div-img");
    z.style.width = "22rem";
    z.style.height = "22rem";
    z.style.margin = "8rem 2rem 1rem 5rem";
    var s = document.getElementById("left-div-para");
    s.style.margin = "1rem 5rem 1rem 5rem";
    var k = document.getElementById("media-div");
    k.style.margin = "3rem 3rem 3rem 5rem";
    var ele = document.getElementById("media-span");
    ele.style.padding = "0rem";
    var ele2 = document.getElementById("media-span2");
    ele2.style.padding = "0rem";
}


function signUp(e) {
    e.preventDefault();
    let user_name = document.getElementById("user_name").value,
        user_email = document.getElementById("user_email").value,
        user_password = document.getElementById("user_password").value,
        confirm_password = document.getElementById("confirm_password").value,
         user_uuid=uuidv4();
        let user_no="";
        let user_dob="";
        let user_address="";
        let user_gender="";
        let user_city="";
        let user_state="";
        let user_country="";
        let user_about="";
        let user_image="";

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
    let user_crud = JSON.parse(localStorage.getItem('user_crud')) || [];

    let exist = user_crud.length && 
        JSON.parse(localStorage.getItem('user_crud')).some(data => 
            data.user_email.toLowerCase() == user_email.toLowerCase()
        );

    if(!exist){
        user_crud.push({ user_name, user_email, user_image,
                        user_password, confirm_password, user_dob ,user_no,user_gender,user_city, 
                        user_address, user_state, user_country, user_about,user_uuid });

        localStorage.setItem('user_crud', JSON.stringify(user_crud));

        console.log(localStorage.getItem('user_crud'));

        document.querySelector('form').reset();
        document.getElementById('user_email').focus();
        alert('Account created Successfully');
        location.href = "./pages/profile/login.html";
    }
    
    else{
        alert('Sorry the User already Exist!! \n Try with different E-mail');
        document.querySelector('form').reset();
    }
    
}


