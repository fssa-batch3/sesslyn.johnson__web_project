const rootPath = window.location.origin;
console.log(rootPath);

const beforeLogin = `
<div class="head">
<div class="main_header">
    <span class="header" id="header_shop"><a href="${rootPath}/index.html"><img class="main_logo" id="main_logo" src="${rootPath}/assets/images/home_page/Logo.jpg"
            alt="logo of minimalistic" /></a></span>
    <div id="nav_header">
       
        <span class="header"><a href="${rootPath}/pages/shop.html">
                <p class="header_para">SHOP</p>
            </a></span>
        <span class="header"><a href="${rootPath}/pages/about.html">
                <p class="header_para">ABOUT</p>
            </a></span>
        <span class="header"><a href="${rootPath}/pages/order/order.html">
                <p class="header_para">ORDERS</p>
            </a></span>
        <span class="header"><a href="${rootPath}/pages/appointment/appointment_history.html">
            <p class="header_para">SCHEDULE</p>
        </a></span>
        <span class="header"><a href="${rootPath}/pages/admin/designers.html">
           <p class="header_para">DESIGNERS</p>
        </a></span>
    </div>
 <div class="btn">
   <a href = "${rootPath}/index.html"><button id="sign_in" class="sign_in">Sign In</button></a>
   
   <a href = "${rootPath}/index.html"><button id="userLogin" class="log_in">Log In</button> </a>
   
</div>
</div>
</div>
`;

const AfterLogin = ` 
<div class="head">
        <div class="main_header">
            <span class="header" id="header_shop"><a href="${rootPath}/pages/homepage.html"><img class="main_logo" id="main_logo"
                        src="${rootPath}/assets/images/home_page/Logo.jpg" alt="logo of minimalistic" /></a></span>
            <div class="nav_header">
                <span class="header"><a href="${rootPath}/pages/shop.html">
                        <p class="header_para">SHOP</p>
                    </a></span>
                <span class="header"><a href="${rootPath}/pages/about.html">
                        <p class="header_para">ABOUT</p>
                    </a></span>
                <span class="header"><a href="${rootPath}/pages/order/order.html">
                        <p class="header_para">ORDERS</p>
                    </a></span>
                <span class="header"><a href="${rootPath}/pages/appointment/appointment_history.html">
                    <p class="header_para">SCHEDULE</p>
                </a></span>
                <span class="header"><a href="${rootPath}/pages/admin/designers.html">
                     <p class="header_para">DESIGNERS</p>
                </a></span>
            </div>
            <a href="${rootPath}/pages/appointment/appointment_form.html"><button id="btnAppoint" class="btn_appoint"><span>Book</span><span> Now</span></button></a>
           
            <button class="btn_delete" id="logOut"><span>Log </span><span>Out</span></button>
            <a href="${rootPath}/pages/profile/profile_new.html">
                <img src="${rootPath}/assets/images/home_page/profile.png" class="profile_img" alt="profile picture" />
            </a>
            <a href="${rootPath}/pages/cart.html">
            <img src="${rootPath}/assets/images/home_page/cartBlack.png" class="cart_img" alt="profile picture" />
        </a>
        </div>
        </div>
`;

const loginUser = localStorage.getItem("profile_id");
if (loginUser === "" || loginUser === null) {
    document.body.insertAdjacentHTML("afterbegin", beforeLogin);
    const userLoginElement = document.getElementById("logOut");
    userLoginElement?.removeEventListener(
        "click",
        () => (document.body.innerHTML = beforeLogin)
    );
    localStorage.removeItem("profile_id");
} else {
    document.body.insertAdjacentHTML("afterbegin", AfterLogin);
    const userLoginElement = document.getElementById("userLogin");
    userLoginElement?.addEventListener(
        "click",
        () => (document.body.innerHTML = AfterLogin)
    );
    const userLogoutElement = document.getElementById("logOut");
    userLogoutElement?.addEventListener("click", () => {
        localStorage.removeItem("profile_id");
        document.body.innerHTML = AfterLogin;
        window.location.href = "../../index.html";
    });
}

