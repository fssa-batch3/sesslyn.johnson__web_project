//Product Crud
const product_crud = JSON.parse(localStorage.getItem("product_crud"));
if(!product_crud){
    localStorage.setItem("product_crud",JSON.stringify([
        {image_url :  "https://iili.io/HXbCIe4.md.png",
         product_category  : "Sofa",  product_description : "* Red Leather Sofa with cushions. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
         product_discount: "5000",product_name: "Munich Scarlet Sofa",product_real: "25000",
        product_sell : "20000", product_uuid : "1197836f-70e3-4ddb-b95d-d2be9cdc9d05", product_warranty : "3 year on site",sellerId:"admin"},

        {image_url :  "https://iili.io/HXbxEkG.th.jpg",
        product_category  : "Sofa",  product_description : "* Leather Sofa with cushions. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "3000",product_name: "Sandal Green Sofa",product_real: "28000",
       product_sell : "25000", product_uuid : "3de2af59-cced-4849-94e1-df3d4b91b907", product_warranty : "2 year on-site",sellerId:"admin"},

       {image_url :  "https://iili.io/HXbu4Ag.th.jpg",
        product_category  : "Sofa",  product_description :"*Floral Pattern Sofa with cushion. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "3000",product_name: "Floral Pattern Sofa",product_real: "18000",
        product_sell : "15000", product_uuid : "131bf114-6cd9-4e44-a395-64c2a7fab318", product_warranty : "4 years on-site",sellerId:"admin"},

        {image_url: "https://iili.io/HXbA2V4.th.jpg",product_category: "Chandelier",
        product_description: "*Classy Modern step Chandelier. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "3000",product_name: "Ring Crystal Chandelier",product_real: "15000",product_sell: " 12000",
        product_uuid: "8a4cb8b7-d21d-48a0-bcce-d7fa1adb2ebf",product_warranty: "2 year on-site",sellerId:"admin"},

        {image_url: "https://iili.io/HOxRdhJ.th.jpg",product_category: "Chandelier",
        product_description: "*Foder pendant Chandelier. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "3000",product_name: "Foder pendant Chandelier",product_real: "14000",product_sell: " 11000",
        product_uuid: "550e8400-e29b-41d4-a716-446655440000",product_warranty: "2 year on-site",sellerId:"admin"},

        {image_url: "https://iili.io/HNgfsyP.th.jpg",product_category: "Chandelier",
        product_description: "*Square Three layer Chandelier. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "4000",product_name: "Square Three layer Chandelier",product_real: "12000",product_sell: " 8000",
        product_uuid: "123e4567-e89b-12d3-a456-426655440000",product_warranty: "4 year on-site",sellerId:"admin"},
       
        {image_url: "https://iili.io/HXbR2mg.th.jpg",product_category: "Crockery Units",
        product_description: "*White Layer Crockery Units. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "5000",product_name: "White Layer Crockery Units",product_real: "30000", product_sell: "25000",
        product_uuid: "5aef0124-9664-4f2a-b4f2-59449a3f2d37",product_warranty: "5 year on site ",sellerId:"admin"},

        {image_url: "https://iili.io/HNgKczu.md.jpg",product_category: "Crockery Units",
        product_description: "*Glass Layer Crockery Units. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "5000",product_name: "Glass Layer Crockery Units",product_real: "35000", product_sell: "30000",
        product_uuid: "4762bbfc-8882-4458-952c-95bb0251f8ab",product_warranty: "3 year on site ",sellerId:"admin"},

        {image_url: "https://iili.io/HNgKX5P.th.jpg",product_category: "Crockery Units",
        product_description: "*Classy Modern Crockery Units. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "5000",product_name: "Classy Modern  Crockery Units",product_real: "25000", product_sell: "20000",
        product_uuid: "e2b5a16e-21cb-4093-b7ec-bbf29154000b",product_warranty: "4 year on site ",sellerId:"admin"},
        
        {image_url: "https://iili.io/HXbRIkX.th.jpg",product_category:"Space Saving Furniture",
        product_description: "* Tea Table Into Office Table. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "2000",product_name: "Tea Table Into Office Table",product_real: "20000",product_sell: "18000",
        product_uuid: "e0f97bfe-e861-4efc-ac26-5205852540d1", product_warranty: "3 year on site ",sellerId:"admin"},

        {image_url: "https://iili.io/HNgqCPf.th.jpg",product_category:"Space Saving Furniture",
        product_description: "* Three layer Storage Bed . * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "8000",product_name: "Three layer Storage Bed",product_real: "28000",product_sell: "20000",
        product_uuid: "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",product_warranty: "4 year on site ",sellerId:"admin"},

        {image_url: "https://iili.io/HNgqWDF.th.jpg",product_category:"Space Saving Furniture",
        product_description: "*Office table into Dinning table. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "4000",product_name: "Office table into Dinning table",product_real: "12000",product_sell: "8000",
        product_uuid: "5a6f0c3d-b4d4-4c21-9bf4-c069d78517c8",product_warranty: "3 year on site ",sellerId:"admin"},

        {image_url: "https://iili.io/HXbRWhb.th.jpg",product_category: "Wadrobe",
        product_description: "* Royal Black Wadrobe. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "5000", product_name: "Royal Black Wadrobe",product_real: "20000",product_sell: "15000",
        product_uuid: "d3572eed-e216-419a-909d-5a7dbf5950b5",product_warranty: "5 year on site ",sellerId:"admin"},

        {image_url: "https://iili.io/HNgYWMl.th.jpg",product_category: "Wadrobe",
        product_description: "*White door Wadrobe . * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "4000", product_name: "White door Wadrobe",product_real: "20000",product_sell: "16000",
        product_uuid: "38b9c9dc-ec16-41d2-8e87-09e69bcf2c7e",product_warranty: "5 year on site ",sellerId:"admin"},

        {image_url: "https://iili.io/HNgYrPV.th.jpg",product_category: "Wadrobe",
        product_description: "Compat Sandal Wadrobe . * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "2000", product_name: "Compat Sandal Wadrobe",product_real: "12000",product_sell: "10000",
        product_uuid: "2d7c9e62-34f7-4c12-a8f7-6f41a6b0c325",product_warranty: "3 year on site ",sellerId:"admin"},


        {image_url: "https://iili.io/HNgcS4V.th.jpg",product_category: "Wallpaper",
        product_description: "*Bluish Green Wallpaper. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "3000",product_name: "Bluish Green Wallpaper", product_real: "6000",product_sell: "3000",
        product_uuid: "ebd9f9cc-7e11-4521-8b8d-f34f43b7aeb4",product_warranty: "1 year on-site",sellerId:"admin"},


        {image_url: "https://iili.io/HNg0hzu.th.jpg",product_category: "Wallpaper",
        product_description: "*Layer Trio Wallpaper. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "1500",product_name: "Layer Trio Wallpaper",product_real: "6000",product_sell: "4500",
        product_uuid: "d8f9d9b7-efb2-4557-b929-0c2f7bc2efb3",product_warranty: "1 year on-site",sellerId:"admin"},


       {image_url: "https://iili.io/HXb5sob.th.jpg",product_category: "Wallpaper",
       product_description: "*Pattern Blue Wallpaper. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
       product_discount: "2000",product_name: "Pattern Blue Wallpaper",product_real: "6000",product_sell: "4000",
       product_uuid: "ac49cacb-1804-4cfb-aa1b-9d64c8ba351e",product_warranty: "2 year on-site",sellerId:"admin"},

       {image_url: "https://iili.io/HXb7le9.th.jpg",product_category: "TV Units",
       product_description: "*Wooden TV Units . * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "5000",product_name: "Wooden TV Units",product_real: "15000",product_sell: "10000",
        product_uuid: "31afeeb6-663c-42e9-9e16-c6c78ea0feaf",product_warranty: "2 year on-site",sellerId:"admin"
       },

       {image_url: "https://iili.io/HNgRiSn.th.jpg",product_category: "TV Units",
       product_description: "*Painted Wooden TV Units . * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "8000",product_name: "Painted Wooden TV Units",product_real: "20000",product_sell: "13000",
        product_uuid: "6a5de6e5-3a4c-4e4c-af38-025ad771443f",product_warranty: "6 year on-site",sellerId:"admin"
       },

       {image_url: "https://iili.io/HNg7nIf.th.jpg",product_category: "TV Units",
       product_description: "*Rowlet TV Units . * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
       product_discount: "5000",product_name: "Rowlet TV Units",product_real: "15000",product_sell: "10000",
       product_uuid: "63e3749d-2e28-4d38-8a7c-1e25f662b04c",product_warranty: "5 year on-site",sellerId:"admin"
      }
    ]))
}



//Added products
const added_products = JSON.parse(localStorage.getItem("added_products"));
if(!added_products){
    localStorage.setItem("added_products",JSON.stringify([
        {0:"1197836f-70e3-4ddb-b95d-d2be9cdc9d05"},
        {1:"3de2af59-cced-4849-94e1-df3d4b91b907"},
        {2:"131bf114-6cd9-4e44-a395-64c2a7fab318"},
        {3:"8a4cb8b7-d21d-48a0-bcce-d7fa1adb2ebf"},
        {4:"5aef0124-9664-4f2a-b4f2-59449a3f2d37"},
        {5:"e0f97bfe-e861-4efc-ac26-5205852540d1"},
        {6:"d3572eed-e216-419a-909d-5a7dbf5950b5"},
        {7:"ac49cacb-1804-4cfb-aa1b-9d64c8ba351e"},
        {8:"31afeeb6-663c-42e9-9e16-c6c78ea0feaf"},
        {9:"4762bbfc-8882-4458-952c-95bb0251f8ab"},
        {10:"e2b5a16e-21cb-4093-b7ec-bbf29154000b"},
        {11:"550e8400-e29b-41d4-a716-446655440000"},
        {12:"123e4567-e89b-12d3-a456-426655440000"},
        {13:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},
        {14:"5a6f0c3d-b4d4-4c21-9bf4-c069d78517c8"},
        {15:"6a5de6e5-3a4c-4e4c-af38-025ad771443f"},
        {16:"63e3749d-2e28-4d38-8a7c-1e25f662b04c"},
        {17:"38b9c9dc-ec16-41d2-8e87-09e69bcf2c7e"},
        {18:"2d7c9e62-34f7-4c12-a8f7-6f41a6b0c325"},
        {19:"d8f9d9b7-efb2-4557-b929-0c2f7bc2efb3"},
        {20:"ebd9f9cc-7e11-4521-8b8d-f34f43b7aeb4"}
    ]))
}

const user_crud = JSON.parse(localStorage.getItem("user_crud"));
if(!user_crud){
    localStorage.setItem("user_crud",JSON.stringify([
    {
        confirm_password: "P@ssw0rd", user_about: "I am a Student", user_address: "12th water tank street", 
        user_city: "Tirunelveli", user_country: "India" ,user_dob: "2004-12-15", user_email: "sesslyn@gmail.com",
        user_gender: "Female", user_name: "Sesslyn", user_no: "6381040916", user_password: "P@ssw0rd", user_state: "Tamil Nadu",
        user_uuid: "798a2fdf-f7ce-410d-b408-6c0cfb40a444",user_image:"https://iili.io/HOCuJ0F.th.png"
    },
    {
        confirm_password: "A@dm1n", user_about: "Admin", user_address: "15th water tank street", 
        user_city: "Chennai", user_country: "India" ,user_dob: "2004-12-25", user_email: "admin@gmail.com",
        user_gender: "Male", user_name: "Admin", user_no: "9954676547", user_password: "A@dm1n", user_state: "Tamil Nadu",
        user_uuid: "9bdcf9cc-7e11-4521-8b8d-f34f43b7aeb4",user_image:"https://iili.io/HOCuCWN.th.png"
    }
    ]))
}

const seller_list = JSON.parse(localStorage.getItem("seller_list"));
if(!seller_list){
    localStorage.setItem("seller_list",JSON.stringify([
    {
        user_gst:"123456789012345", user_aadhar:"123456789012", confirm_password: "P@ssw0rd", user_about: "I am a Student", user_address: "12th water tank street", 
        user_city: "Tirunelveli", user_country: "India" ,user_dob: "2004-12-15", user_email: "sesslyn@gmail.com",
        user_gender: "Female", user_name: "Sesslyn", user_no: "6381040916", user_password: "P@ssw0rd", user_state: "Tamil Nadu",
        user_uuid: "798a2fdf-f7ce-410d-b408-6c0cfb40a444",user_image:"https://iili.io/HOCuJ0F.th.png"
    },
    {
        user_gst:"098765432109876", user_aadhar:"098765432109", confirm_password: "A@dm1n", user_about: "Admin", user_address: "15th water tank street", 
        user_city: "Chennai", user_country: "India" ,user_dob: "2004-12-25", user_email: "admin@gmail.com",
        user_gender: "Male", user_name: "Admin", user_no: "9954676547", user_password: "A@dm1n", user_state: "Tamil Nadu",
        user_uuid: "9bdcf9cc-7e11-4521-8b8d-f34f43b7aeb4",user_image:"https://iili.io/HOCuCWN.th.png"
    }
    ]))
}
