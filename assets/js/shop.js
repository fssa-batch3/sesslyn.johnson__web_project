//Filter
const product_crud = JSON.parse(localStorage.getItem("product_crud"));
const added_products = JSON.parse(localStorage.getItem("added_products"));
const add_crud = product_crud.filter((product) => added_products.some((a) => product.product_uuid === a.product_uuid));

//Sofa
let sofa = add_crud.filter(function (e) {
  return e.product_category == 'Sofa';
});

for (const product_details of sofa) {
  const template1 = product_upload(product_details);
  document.querySelector("#shop_sofa").insertAdjacentHTML("beforeend", template1);
}

function product_upload(sofa) {
  const template1 =
    `
                   <div class="container">
                    <a href="#"><img class="crockery" src="${sofa["image_url"]}"
                        alt="sofa image" /></a>
                   <div class="overlay">
                     <a href="#"><img class="bag_overlay" data-cart="${sofa["product_uuid"]}"  src="../assets/images/home_page/heart_icon.jpg"
                                  alt="shopping-bag"/></a>
                     <button data-id="${sofa["product_uuid"]}" class="overlay_button"><a href="#">View More</a></button>
                    </div>
                   </div>
                   `
  return template1;
}

//reusable
const space_saving = add_crud.filter(function (e) {
  return e.product_category === "Space Saving Furniture";
});
for (const product_reuse of space_saving) {
  const template3 = product_space(product_reuse);
  document.querySelector("#reusable_shop").insertAdjacentHTML("beforeend", template3);
}

function product_space(space_saving) {
  const template3 = ` 

                <div class="container">
                        <a href="#"><img class="crockery" src="${space_saving.image_url}"
                              alt="Space saving furniture image" /></a>
                        <div class="overlay">
                            <a href="#"><img class="bag_overlay" data-cart="${space_saving.product_uuid}"  src="../assets/images/home_page/heart_icon.jpg"
                                    alt="shopping-bag" /></a>
                            <button data-id="${space_saving.product_uuid}"  class="overlay_button"><a href="#">View More</a></button>
                        </div>
                </div>

              `;
  return template3;
}

//Wallpaper
const Wallpaper_units = add_crud.filter(function (e) {
  return e.product_category === "Wallpaper";
});

for (const product_wallpaper of Wallpaper_units) {
  const template4 = product_wall(product_wallpaper);
  document.querySelector("#wallpaper_shop").insertAdjacentHTML("beforeend", template4);
}

function product_wall(Wallpaper_units) {
  const template4 = ` 
                     <div class="container">
                        <a href="#"><img class="crockery" src="${Wallpaper_units.image_url}"
                            alt="chandleir image" /></a>
                        <div class="overlay">
                           <a href="#"><img class="bag_overlay"  data-cart="${Wallpaper_units.product_uuid}" src="../assets/images/home_page/heart_icon.jpg"
                                    alt="shopping-bag" /></a>
                            <button class="overlay_button"  data-id="${Wallpaper_units.product_uuid}" ><a href="#">View More</a></button>
                         </div>
                   </div>
                     `;
  return template4;
}

// Chandelier
const chandelier_units = add_crud.filter(function (e) {
  return e.product_category === "Chandelier";
});
for (let i = 0; i < chandelier_units.length; i++) {
  const product_chandelier = chandelier_units[i];
  const template2 = product_chand(product_chandelier);
  document
    .querySelector("#chandelier_shop")
    .insertAdjacentHTML("beforeend", template2);
}

function product_chand(a) {
  const template2 = ` 
            <div class="container">
                <a href="#"><img class="crockery" src="${a.image_url}"
                    alt="chandelier image" /></a>
                <div class="overlay">
                    <a href="#"><img class="bag_overlay" data-cart="${a.product_uuid}" 
                            src="../assets/images/home_page/heart_icon.jpg"
                            alt="shopping-bag" /></a>
                    <button class="overlay_button"  data-id="${a.product_uuid}" ><a href="#">View More</a></button>
                </div>
            </div>
        `;
  return template2;
}

//wadrobe
const Wadrobe_units = add_crud.filter(function (e) {
  return e.product_category === "Wadrobe";
});

for (const product_wadrobe of Wadrobe_units) {
  const template5 = product_wad(product_wadrobe);
  document
    .querySelector("#wadrobe_shop")
    .insertAdjacentHTML("beforeend", template5);
}

function product_wad(Wadrobe_units) {
  const template5 = ` 
                <div class="container">
                        <a href="#"><img class="crockery" src="${Wadrobe_units.image_url}"
                            alt="chandleir image" /></a>
                        <div class="overlay">
                            <a href="#"><img class="bag_overlay" data-cart="${Wadrobe_units.product_uuid}" src="../assets/images/home_page/heart_icon.jpg"
                                    alt="shopping-bag" /></a>
                            <button class="overlay_button"  data-id="${Wadrobe_units.product_uuid}"><a href="#">View More</a></button>
                        </div>
                    </div>
              `;
  return template5;
}

//Crockery units
const crockery_units = add_crud.filter(function (e) {
  return e.product_category === "Crockery Units";
});
for (const product_crock of crockery_units) {
  const template6 = product_crockery(product_crock);
  document
    .querySelector("#crockery_shop")
    .insertAdjacentHTML("beforeend", template6);
}
function product_crockery(crockery_units) {
  const template6 = ` 
                <div class="container">
                        <a href="#"><img class="crockery" src="${crockery_units.image_url}"
                           alt="chandleir image" /></a>
                        <div class="overlay">
                            <a href="#"><img class="bag_overlay" data-cart="${crockery_units.product_uuid}" src="../assets/images/home_page/heart_icon.jpg"
                                    alt="shopping-bag" /></a>
                            <button class="overlay_button"   data-id="${crockery_units.product_uuid}"><a href="#">View More</a></button>
                        </div>
                    </div>
              `;
  return template6;
}

//Room Create Element
const room_details = JSON.parse(localStorage.getItem("room_details"));
for (let i = 0; i < room_details.length; i++) {
  // create a new div element
  const tooltipDiv1 = document.createElement("div");
  tooltipDiv1.className = "interiors";
  tooltipDiv1.id = room_details[i].id_div;
  // console.log(tooltipDiv1);

  // create a new div element for the tooltip
  const tooltip1 = document.createElement("div");
  tooltip1.className = "tooltip";
  tooltipDiv1.append(tooltip1);

  const a_link = document.createElement("a");
  a_link.setAttribute("href",`./living_room/page.html?chamber_name=${room_details[i].page_id}`);
  tooltip1.append(a_link);

  // create a new image element for the icon
  const image = document.createElement("img");
  image.setAttribute("id", room_details[i].id_img);
  image.setAttribute("class", "chamber_data");
  image.setAttribute("src", room_details[i].image);
  image.setAttribute("alt", "icon of every chamber");
  a_link.append(image);

  // create a new p element for the tooltip text and set its content
  const tooltipText1 = document.createElement("p");
  tooltipText1.setAttribute("class", "tooltiptext");
  tooltipText1.innerHTML = room_details[i].text;
  tooltip1.append(tooltipText1);

  document.querySelector("div#row1").append(tooltipDiv1);
}

//Product Create Element
const shoppingProduct = JSON.parse(localStorage.getItem("shoppingProduct"));
console.log(shoppingProduct);

for (let j = 0; j < shoppingProduct.length; j++) {
  // create a new div element
  const tooltipDiv1 = document.createElement("div");
  tooltipDiv1.className = "interiors";
  tooltipDiv1.id = shoppingProduct[j].id_div;
  // console.log(tooltipDiv1);

  // create a new div element for the tooltip
  const tooltip1 = document.createElement("div");
  tooltip1.className = "tooltip";
  tooltipDiv1.append(tooltip1);

  const a_link = document.createElement("a");
  a_link.setAttribute("href","#"+j);
  tooltip1.append(a_link);

  // create a new image element for the icon
  const image = document.createElement("img");
  image.setAttribute("class", "chamber_data");
  image.setAttribute("id", shoppingProduct[j].id_img);
  image.setAttribute("src", shoppingProduct[j].image);
  image.setAttribute("alt", "icon of every chamber");
  a_link.append(image);

  // create a new p element for the tooltip text and set its content
  const tooltipText1 = document.createElement("p");
  tooltipText1.setAttribute("class", "tooltiptext");
  tooltipText1.innerHTML = shoppingProduct[j].text;
  tooltip1.append(tooltipText1)
  document.querySelector("div#row2").append(tooltipDiv1);
};

//URL Params
const bookCovers = document.querySelectorAll(".overlay_button");
bookCovers.forEach((bookCover) => {
  bookCover.addEventListener("click", (event) => {
    const person_data = bookCover.dataset.id;
    window.location.href = `./description.html?product_id=${person_data}`;
  });
});

//Wishlist
const add = document.querySelectorAll(".bag_overlay");
add.forEach(function (findId) {
  findId.addEventListener("click", function () {
    const id_wish = this.dataset.cart;
    const wish_list = JSON.parse(localStorage.getItem("wish_list")) || [];
    const profile_id = JSON.parse(localStorage.getItem("profile_id"));
    const condition = JSON.parse(localStorage.getItem("profile_id"));
    if (!condition) {
      alert("Log In");
      window.location.href = "./profile/login.html";
      return;
    }
    const prod_data = wish_list.find(
      (prod) => prod.product_id === id_wish && prod.user_id === profile_id
    );
    if (prod_data) {
      alert("Sorry, the product is already added to the wishlist");
    } else {
      const prod = {
        product_id: id_wish,
        user_id: profile_id,
      };
      wish_list.push(prod);
      localStorage.setItem("wish_list", JSON.stringify(wish_list));
      alert("Your product has been added to the wishlist");
      window.location.href = "./wishlist.html";
    }
  });
});
