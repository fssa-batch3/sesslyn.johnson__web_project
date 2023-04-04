

const rootPath = window.location.origin;
console.log(rootPath)

const beforeLogin = ` 
<div class="head">
<div class="main_header">
    <span class="header" id="header_shop"><a href="${rootPath}/index.html"><img class="main_logo" id="main_logo" src="${rootPath}/assets/images/home_page/Logo.jpg"
            alt="logo of minimalistic" /></a></span>
    <div id="nav_header">
        <span class="header"><a href="#">
                <p class="header_para">CHAMBER</p>
            </a></span>
        <span class="header"><a href="${rootPath}/pages/shop.html">
                <p class="header_para">SHOP</p>
            </a></span>
        <span class="header"><a href="${rootPath}/pages/about.html">
                <p class="header_para">ABOUT</p>
            </a></span>
        <span class="header"><a href="${rootPath}/pages/order/order.html">
                <p class="header_para">ORDERS</p>
            </a></span>
    </div>
 <div class="btn">
   <a href = "${rootPath}/index.html"><button class="sign_in">Sign In</button></a>
   <a href = "${rootPath}/index.html"><button id="userLogin" class="log_in">Log In</button> </a>
</div>
</div>
</div>
`


const AfterLogin = ` 
<div class="head">
<div class="main_header">
    <span class="header" id="header_shop"><a href="${rootPath}/index.html"><img class="main_logo" id="main_logo"
                src="${rootPath}/assets/images/home_page/Logo.jpg" alt="logo of minimalistic" /></a></span>
    <div class="nav_header">
        <span class="header"><a href="#">
                <p class="header_para">CHAMBER</p>
            </a></span>
        <span class="header"><a href="${rootPath}/pages/shop.html">
                <p class="header_para">SHOP</p>
            </a></span>
        <span class="header"><a href="${rootPath}/pages/about.html">
                <p class="header_para">ABOUT</p>
            </a></span>
        <span class="header"><a href="${rootPath}/pages/order/order.html">
                <p class="header_para">ORDERS</p>
            </a></span>
    </div>

    <button class="btn_delete" id="logOut">Log Out</button>
    <a href="${rootPath}/pages/profile/profile_new.html">
        <img src="${rootPath}/assets/images/home_page/profile.png" class="profile_img" alt="profile picture" />
    </a>
</div>
</div>
`


const loginUser = JSON.parse(localStorage.getItem("profile_id"));
if (loginUser) {
  document.body.insertAdjacentHTML("afterbegin", AfterLogin);
  const userLoginElement = document.getElementById("userLogin");
  userLoginElement?.addEventListener("click", () => document.body.innerHTML = beforeLogin);
  const userLogoutElement = document.getElementById("logOut");
  userLogoutElement?.addEventListener("click", () => {
    localStorage.removeItem("profile_id");
    document.body.innerHTML = beforeLogin;
  });
} 
else {
  document.body.insertAdjacentHTML("afterbegin", beforeLogin);
  const userLoginElement = document.getElementById("logOut");
  userLoginElement?.removeEventListener("click", () => document.body.innerHTML = AfterLogin);
  localStorage.removeItem("profile_id");
 
}

