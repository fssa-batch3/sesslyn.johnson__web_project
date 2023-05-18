const rootPath = window.location.origin;
console.log(rootPath);

const beforeLogin = ` 
<div class="head">
<div class="main_header">
    <span class="header" id="header_shop"><a href="${rootPath}/index.html"><img class="main_logo" id="main_logo"
                src="${rootPath}/assets/images/home_page/Logo.jpg" alt="logo of minimalistic m" /></a></span>
    <div id="nav_header">
        <span class="header">
                <p class="header_para">PRODUCTS</p>
            </span>
        <span class="header">
                <p class="header_para">NEW</p>
            </span>
        <span class="header">
                <p class="header_para">ABOUT</p>
            </span>
        <span class="header">
                <p class="header_para">ORDERS</p>
            </span>
    </div>
    <div class="btn">
        <a href = "${rootPath}/pages/seller/seller_register.html"><button class="sign_in">Sign In</button></a>
        <a href = "${rootPath}/pages/seller/seller_login.html"><button id="userLogin" class="log_in">Log In</button> </a>
     </div>
</div>
</div>
`;

const AfterLogin = `
<div class="head">
<div class="main_header">
    <span class="header" id="header_shop"><a href="${rootPath}/pages/seller/seller_homepage.html"><img class="main_logo" id="main_logo"
                src="${rootPath}/assets/images/home_page/Logo.jpg" alt="logo of minimalistic" /></a></span>
    <div class="nav_header">
        <span class="header"><a href="${rootPath}/pages/seller/product_list.html">
                <p class="header_para">PRODUCTS</p>
            </a></span>
        <span class="header"><a href="${rootPath}/pages/seller/product_form.html">
                <p class="header_para">NEW</p>
            </a></span>
        <span class="header"><a href="${rootPath}/pages/seller/seller_about.html">
                <p class="header_para">ABOUT</p>
            </a></span>
        <span class="header"><a href="${rootPath}/pages/order/order.html">
                <p class="header_para">ORDERS</p>
            </a></span>
    </div>

    <button class="btn_delete" id="logOut">Log Out</button>
    <a href="${rootPath}/pages/seller/seller_profile.html">
        <img src="${rootPath}/assets/images/home_page/profile.png" class="profile_img" alt="profile picture" />
    </a>
</div>
</div>

`;

const loginUser = localStorage.getItem("seller_id");
if (loginUser === "" || loginUser === null) {
  document.body.insertAdjacentHTML("afterbegin", beforeLogin);
  const userLoginElement = document.getElementById("logOut");
  userLoginElement?.removeEventListener(
    "click",
    () => (document.body.innerHTML = beforeLogin)
  );
  localStorage.removeItem("seller_id");
} else {
  document.body.insertAdjacentHTML("afterbegin", AfterLogin);
  const userLoginElement = document.getElementById("userLogin");
  userLoginElement?.addEventListener(
    "click",
    () => (document.body.innerHTML = AfterLogin)
  );
  const userLogoutElement = document.getElementById("logOut");
  userLogoutElement?.addEventListener("click", () => {
    localStorage.removeItem("seller_id");
    document.body.innerHTML = AfterLogin;
    window.location.reload();
  });
}
