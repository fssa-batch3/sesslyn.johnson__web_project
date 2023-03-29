

const rootPath = window.location.origin;
console.log(rootPath)

const beforeLogin = ` 
   <header class="header"> 
        <div>
            <img class="logo-img" src="${rootPath}/assets/images/Main/casas-logo.png" alt="logo image" />
        </div>
        <div class="navbar">
          <nav>
            <ul>
            <li><a href="${rootPath}/pages/chamber.html"><span class="color">C</span>hamber</a></li>
            <li><a href="${rootPath}/pages/Shop.html"><span class="color">S</span>hop</a></li>
            <li><a href="${rootPath}/pages/queries.html"><span class="color">A</span>bout</a></li>
            <li><a href="${rootPath}/pages/liked.html"><span class="color">W</span>ishlist</a></li>
            <li><a href="${rootPath}/pages/order.html"><span class="color">O</span>rders</a></li> 
            </ul>
        </nav>
       </div> 
       <div class="inner" id="inner_sign">
          <button type="submit"><a href="${rootPath}/pages/Seller/Homepage.html">Seller</a></button>
        </div>
       <div class="input_div">
         <div class="inner">
             <button type="submit"><a href="${rootPath}/pages/Login/Register.html">Sign Up</a></button>
         </div>
         <div class="inner">
           <button type="submit" id="userLogin"><a href="${rootPath}/pages/Login/Login.html">Login</a></button>
         </div>
      </div> 
    </header>
`


const AfterLogin = ` 

    <header class="header" >
      <div>
        <a href="${rootPath}/index.html">
          <img class="logo-img" src="${rootPath}/assets/images/Main/casas-logo.png" alt="logo image" />
        </a>
      </div>
      <div class="navbar">
        <nav>
         <ul>
           <li><a href="${rootPath}/pages/chamber.html"><span class="color">C</span>hamber</a></li>
           <li><a href="${rootPath}/pages/Shop.html"><span class="color">S</span>hop</a></li>
           <li><a href="${rootPath}/pages/queries.html"><span class="color">A</span>bout</a></li>
           <li><a href="${rootPath}/pages/liked.html"><span class="color">W</span>ishlist</a></li>
           <li><a href="${rootPath}/pages/order.html"><span class="color">O</span>rders</a></li> 
         </ul>
       </nav>
     </div> 
     <div class="inner" id="inner_sign">
      <button type="submit"><a href="${rootPath}/pages/Seller/Homepage.html">Seller</a></button>
     </div>
     <div class="inner">
     <a href="${rootPath}/index.html"><button id="logOut" type="submit">Log Out</button></a>
      </div>
    <div class="triple-bar">
      <a href="${rootPath}/pages/profile.html"><img src="${rootPath}/assets/images/Main/profile (1).png"  alt="profile image"/></a>
    </div>
</header>
`


const loginUser = JSON.parse(localStorage.getItem("user_id"));
if (loginUser) {
  document.body.insertAdjacentHTML("afterbegin", AfterLogin);
  const userLoginElement = document.getElementById("userLogin");
  userLoginElement?.addEventListener("click", () => document.body.innerHTML = beforeLogin);
  const userLogoutElement = document.getElementById("logOut");
  userLogoutElement?.addEventListener("click", () => {
    localStorage.removeItem("user_id");
    document.body.innerHTML = beforeLogin;
  });
} else {
  document.body.insertAdjacentHTML("afterbegin", beforeLogin);
  const userLoginElement = document.getElementById("logOut");
  userLoginElement?.removeEventListener("click", () => document.body.innerHTML = AfterLogin);
  localStorage.removeItem("user_id");
}

