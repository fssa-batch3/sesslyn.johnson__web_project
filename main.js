//Product Crud

if(localStorage.getItem("product_crud")){
    return
}
else{
    localStorage.setItem("product_crud",JSON.stringify([
        {image_url :  "https://iili.io/HXbCIe4.md.png",
         product_category  : "Sofa",  product_description : "* Red Leather Sofa with cushions. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
         product_discount: "5000",product_name: "Munich Scarlet Sofa",product_real: "25000",
        product_sell : "20000", product_uuid : "1197836f-70e3-4ddb-b95d-d2be9cdc9d05", product_warranty : "3 year on site"},

        {image_url :  "https://iili.io/HXbxEkG.th.jpg",
        product_category  : "Sofa",  product_description : "* Leather Sofa with cushions. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "3000",product_name: "Sandal Green Sofa",product_real: "28000",
       product_sell : "25000", product_uuid : "3de2af59-cced-4849-94e1-df3d4b91b907", product_warranty : "2 year on-site"},

       {image_url :  "https://iili.io/HXbu4Ag.th.jpg",
        product_category  : "Sofa",  product_description :"*Floral Pattern Sofa with cushion. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "3000",product_name: "Floral Pattern Sofa",product_real: "18000",
        product_sell : "15000", product_uuid : "131bf114-6cd9-4e44-a395-64c2a7fab318", product_warranty : "4 years on-site"},

        {image_url: "https://iili.io/HXbA2V4.th.jpg",product_category: "Candelier",
        product_description: "*Classy Modern step Chandelier. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "3000",product_name: "Ring Crystal Chandelier",product_real: "15000",product_sell: " 12000",
        product_uuid: "8a4cb8b7-d21d-48a0-bcce-d7fa1adb2ebf",product_warranty: "2 year on-site"},

        {image_url: "https://iili.io/HXbR2mg.th.jpg",product_category: "Crockery Units",
        product_description: "*White Layer Crockery Units. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "5000",product_name: "White Layer Crockery Units",product_real: "30000", product_sell: "25000",
        product_uuid: "5aef0124-9664-4f2a-b4f2-59449a3f2d37",product_warranty: "5 year on site "},
        
        {image_url: "https://iili.io/HXbRIkX.th.jpg",product_category:"Space Saving Furniture",
        product_description: "* Tea Table Into Office Table. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "2000",product_name: "Tea Table Into Office Table",product_real: "20000",product_sell: "18000",product_uuid: "e0f97bfe-e861-4efc-ac26-5205852540d1",
        product_warranty: "3 year on site "},

        {image_url: "https://iili.io/HXbRWhb.th.jpg",product_category: "Wadrobe",
        product_description: "* Royal Black Wadrobe. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "5000", product_name: "Royal Black Wadrobe",product_real: "20000",product_sell: "15000",
        product_uuid: "d3572eed-e216-419a-909d-5a7dbf5950b5",product_warranty: "5 year on site "},

       {image_url: "https://iili.io/HXb5sob.th.jpg",product_category: "Wallpaper",
       product_description: "*Pattern Blue Wallpaper. * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
       product_discount: "2000",product_name: "Pattern Blue Wallpaper",product_real: "6000",product_sell: "4000",
       product_uuid: "ac49cacb-1804-4cfb-aa1b-9d64c8ba351e",product_warranty: "2 year on-site"},

       {
        image_url: "https://iili.io/HXb7le9.th.jpg",product_category: "TV Units",product_description: "*Wooden TV Units . * 10 days replacement. * Sectional Sofa Length = 105.5\". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.",
        product_discount: "5000",product_name: "Wooden TV Units",product_real: "15000",product_sell: "10000",
        product_uuid: "31afeeb6-663c-42e9-9e16-c6c78ea0feaf",product_warranty: "2 year on-site"
       }
    ]))
}



//Added products
if(localStorage.getItem("added_products")){
    return
}
else{
    localStorage.setItem("added_products",JSON.stringify([
        {0: "1197836f-70e3-4ddb-b95d-d2be9cdc9d05"},
        {1:"3de2af59-cced-4849-94e1-df3d4b91b907"},
        {2:"131bf114-6cd9-4e44-a395-64c2a7fab318"},
        {3:"8a4cb8b7-d21d-48a0-bcce-d7fa1adb2ebf"},
        {4:"5aef0124-9664-4f2a-b4f2-59449a3f2d37"},
        {5:"e0f97bfe-e861-4efc-ac26-5205852540d1"},
        {6:"d3572eed-e216-419a-909d-5a7dbf5950b5"},
        {7:"ac49cacb-1804-4cfb-aa1b-9d64c8ba351e"},
        {8:"31afeeb6-663c-42e9-9e16-c6c78ea0feaf"}
    ]))
}
