  


document.querySelector("#place_order").addEventListener("click", function () {
    let order_user = JSON.parse(localStorage.getItem("order_user"));
    let profile_id = JSON.parse(localStorage.getItem("profile_id"));
    let current_user = order_user.find(user => user.user_email === profile_id);

    let order_list = JSON.parse(localStorage.getItem("order_list")) || [];
    let cart_list = JSON.parse(localStorage.getItem("cart_list"));
    let order_cart = cart_list.filter(c => c.userId == profile_id);

    let cart_products = [];
    for (let cart_item of order_cart) {
        let product = cart_list.find(p => p.productId === cart_item.productId);
        cart_products.push(product);
    }

    let user_details = order_user.find(user => user.user_email === profile_id);

    console.log(cart_products);
    console.log(user_details);

    let d = new Date();

    let total_price = document.querySelector("#total_amount").innerText.replace("₹ ", "");
    console.log(total_price);

    if (cart_products != "") {
        if (order_cart.length > 0) {
          if (confirm("Confirm your order")) {
            for (let i = 0; i < order_cart.length; i++) {
              let order_uuid = uuidv4();
              order_list.push({
                "order_uuid": order_uuid,
                "ordered_time": d,
                "ordered_by": current_user.user_email,
                "ordered_items": [order_cart[i]], // add each product as a separate order item
                "total_price": parseInt(order_cart[i].product_price),
                "order_status": "On the Way"
              });
            }
            cart_id = cart_list.filter(e => e.ordered_by !== profile_id );
            console.log(cart_id)
            localStorage.setItem("order_list", JSON.stringify(order_list));
            localStorage.setItem("cart_list", JSON.stringify(cart_id));
            for (let k = cart_list.length - 1; k >= 0; k--) {
              if (profile_id === cart_list[k].userId) {
                cart_list.splice(k, 1);
              }
            }
            localStorage.setItem("cart_list", JSON.stringify(cart_list));  
             window.location.href="./order_success.html";
          }
        }
      }
      
        else {
            alert("You have not added any products to the cart")
        }
    });