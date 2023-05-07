const profile_id = localStorage.getItem("profile_id");
const btn = document.getElementById("btn");

document.getElementById("btn").onclick = function () {
  if (profile_id !== null && profile_id !== undefined && profile_id !== "") {
    btn.innerText = "Explore";
    window.location.href = "./pages/homepage.html";
  } else {
    btn.innerText = "Sign In";
    register();
  }
};

function register() {
  document.getElementById("right_corner").style.display = "block";
  const x = document.getElementById("right_corner");
  x.classList.remove("hide");
  x.classList.add("block");
  const y = document.getElementById("main_page");
  y.style.width = "70%";
  const j = document.getElementById("left-div");
  j.style.width = "50%";
  const z = document.getElementById("left-div-img");
  z.style.width = "22rem";
  z.style.height = "22rem";
  z.style.margin = "8rem 2rem 1rem 5rem";
  const s = document.getElementById("left-div-para");
  s.style.margin = "1rem 5rem 1rem 5rem";
  const k = document.getElementById("media-div");
  k.style.margin = "3rem 3rem 3rem 5rem";
  const ele = document.getElementById("media-span");
  ele.style.padding = "0rem";
  const ele2 = document.getElementById("media-span2");
  ele2.style.padding = "0rem";
}

function signUp(e) {
  e.preventDefault();
  const user_name = document.getElementById("user_name").value;
  const user_email = document.getElementById("user_email").value;
  const user_password = document.getElementById("user_password").value;
  const confirm_password = document.getElementById("confirm_password").value;
  const user_uuid = uuidv4();
  const user_no = "";
  const user_dob = "";
  const user_address = "";
  const user_gender = "";
  const user_city = "";
  const user_state = "";
  const user_country = "";
  const user_about = "";
  const user_image = "";

  function checkPassword() {
    if (user_password !== confirm_password) {
      alert("Re-enter the Password");
      confirm_password.value = reset();
    } else {
      alert("Password Matched");
    }
  }
  checkPassword();
  const user_crud = JSON.parse(localStorage.getItem("user_crud")) || [];

  const exist =
    user_crud.length &&
    JSON.parse(localStorage.getItem("user_crud")).some(
      (data) => data.user_email.toLowerCase() == user_email.toLowerCase()
    );

  if (!exist) {
    user_crud.push({
      user_name,
      user_email,
      user_image,
      user_password,
      confirm_password,
      user_dob,
      user_no,
      user_gender,
      user_city,
      user_address,
      user_state,
      user_country,
      user_about,
      user_uuid,
    });

    localStorage.setItem("user_crud", JSON.stringify(user_crud));

    console.log(localStorage.getItem("user_crud"));

    document.querySelector("form").reset();
    document.getElementById("user_email").focus();
    alert("Account created Successfully");
    location.href = "./pages/profile/login.html";
  } else {
    alert("Sorry the User already Exist!! \n Try with different E-mail");
    document.querySelector("form").reset();
  }
}
