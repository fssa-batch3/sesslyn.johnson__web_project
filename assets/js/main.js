// Product Crud
const product_crud = JSON.parse(localStorage.getItem("product_crud"));
if (!product_crud) {
  localStorage.setItem(
    "product_crud",
    JSON.stringify([
      {
        image_url: "https://iili.io/HXbCIe4.md.png",
        product_category: "Sofa",
        product_description:
          '* Red Leather Sofa with cushions. * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "10",
        product_name: "Munich Scarlet Sofa",
        product_real: "25000",
        product_sell: 22500,
        product_uuid: "1197836f-70e3-4ddb-b95d-d2be9cdc9d05",
        product_warranty: "3 year on site",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HXbxEkG.th.jpg",
        product_category: "Sofa",
        product_description:
          '* Leather Sofa with cushions. * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "20",
        product_name: "Sandal Green Sofa",
        product_real: "28000",
        product_sell: 22400,
        product_uuid: "3de2af59-cced-4849-94e1-df3d4b91b907",
        product_warranty: "2 year on-site",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HXbu4Ag.th.jpg",
        product_category: "Sofa",
        product_description:
          '*Floral Pattern Sofa with cushion. * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "5",
        product_name: "Floral Pattern Sofa",
        product_real: "18000",
        product_sell: 17100,
        product_uuid: "131bf114-6cd9-4e44-a395-64c2a7fab318",
        product_warranty: "4 years on-site",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HXbA2V4.th.jpg",
        product_category: "Chandelier",
        product_description:
          '*Classy Modern step Chandelier. * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "15",
        product_name: "Ring Crystal Chandelier",
        product_real: "15000",
        product_sell: 12750,
        product_uuid: "8a4cb8b7-d21d-48a0-bcce-d7fa1adb2ebf",
        product_warranty: "2 year on-site",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HOxRdhJ.th.jpg",
        product_category: "Chandelier",
        product_description:
          '*Foder pendant Chandelier. * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "18",
        product_name: "Foder pendant Chandelier",
        product_real: "14000",
        product_sell: 11480,
        product_uuid: "550e8400-e29b-41d4-a716-446655440000",
        product_warranty: "2 year on-site",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HNgfsyP.th.jpg",
        product_category: "Chandelier",
        product_description:
          '*Square Three layer Chandelier. * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "12",
        product_name: "Square Three layer Chandelier",
        product_real: "12000",
        product_sell: 10560,
        product_uuid: "123e4567-e89b-12d3-a456-426655440000",
        product_warranty: "4 year on-site",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HXbR2mg.th.jpg",
        product_category: "Crockery Units",
        product_description:
          '*White Layer Crockery Units. * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "25",
        product_name: "White Layer Crockery Units",
        product_real: "35000",
        product_sell: 26250,
        product_uuid: "5aef0124-9664-4f2a-b4f2-59449a3f2d37",
        product_warranty: "5 year on site ",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HNgKczu.md.jpg",
        product_category: "Crockery Units",
        product_description:
          '*Glass Layer Crockery Units. * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "25",
        product_name: "Glass Layer Crockery Units",
        product_real: "35000",
        product_sell: 26250,
        product_uuid: "4762bbfc-8882-4458-952c-95bb0251f8ab",
        product_warranty: "3 year on site ",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HNgKX5P.th.jpg",
        product_category: "Crockery Units",
        product_description:
          '*Classy Modern Crockery Units. * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "15",
        product_name: "Classy Modern  Crockery Units",
        product_real: "25000",
        product_sell: 21250,
        product_uuid: "e2b5a16e-21cb-4093-b7ec-bbf29154000b",
        product_warranty: "4 year on site ",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HXbRIkX.th.jpg",
        product_category: "Space Saving Furniture",
        product_description:
          '* Tea Table Into Office Table. * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "10",
        product_name: "Tea Table Into Office Table",
        product_real: "20000",
        product_sell: 18000,
        product_uuid: "e0f97bfe-e861-4efc-ac26-5205852540d1",
        product_warranty: "3 year on site ",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HNgqCPf.th.jpg",
        product_category: "Space Saving Furniture",
        product_description:
          '* Three layer Storage Bed . * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "30",
        product_name: "Three layer Storage Bed",
        product_real: "28000",
        product_sell: 19600,
        product_uuid: "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",
        product_warranty: "4 year on site ",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HNgqWDF.th.jpg",
        product_category: "Space Saving Furniture",
        product_description:
          '*Office table into Dinning table. * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "20",
        product_name: "Office table into Dinning table",
        product_real: "12000",
        product_sell: 9600,
        product_uuid: "5a6f0c3d-b4d4-4c21-9bf4-c069d78517c8",
        product_warranty: "3 year on site ",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HXbRWhb.th.jpg",
        product_category: "Wadrobe",
        product_description:
          '* Royal Black Wadrobe. * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "20",
        product_name: "Royal Black Wadrobe",
        product_real: "20000",
        product_sell: 16000,
        product_uuid: "d3572eed-e216-419a-909d-5a7dbf5950b5",
        product_warranty: "5 year on site ",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HNgYWMl.th.jpg",
        product_category: "Wadrobe",
        product_description:
          '*White door Wadrobe . * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "20",
        product_name: "White door Wadrobe",
        product_real: "20000",
        product_sell: 16000,
        product_uuid: "38b9c9dc-ec16-41d2-8e87-09e69bcf2c7e",
        product_warranty: "5 year on site ",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HNgYrPV.th.jpg",
        product_category: "Wadrobe",
        product_description:
          'Compat Sandal Wadrobe . * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "20",
        product_name: "Compat Sandal Wadrobe",
        product_real: "12000",
        product_sell: 9600,
        product_uuid: "2d7c9e62-34f7-4c12-a8f7-6f41a6b0c325",
        product_warranty: "3 year on site ",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HNgcS4V.th.jpg",
        product_category: "Wallpaper",
        product_description:
          '*Bluish Green Wallpaper. * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "18",
        product_name: "Bluish Green Wallpaper",
        product_real: "6000",
        product_sell: 4920,
        product_uuid: "ebd9f9cc-7e11-4521-8b8d-f34f43b7aeb4",
        product_warranty: "1 year on-site",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HNg0hzu.th.jpg",
        product_category: "Wallpaper",
        product_description:
          '*Layer Trio Wallpaper. * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "20",
        product_name: "Layer Trio Wallpaper",
        product_real: "6000",
        product_sell: 4800,
        product_uuid: "d8f9d9b7-efb2-4557-b929-0c2f7bc2efb3",
        product_warranty: "1 year on-site",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HXb5sob.th.jpg",
        product_category: "Wallpaper",
        product_description:
          '*Pattern Blue Wallpaper. * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "5",
        product_name: "Pattern Blue Wallpaper",
        product_real: "6000",
        product_sell: 5700,
        product_uuid: "ac49cacb-1804-4cfb-aa1b-9d64c8ba351e",
        product_warranty: "2 year on-site",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HXb7le9.th.jpg",
        product_category: "TV Units",
        product_description:
          '*Wooden TV Units . * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "14",
        product_name: "Wooden TV Units",
        product_real: "15000",
        product_sell: 12900,
        product_uuid: "31afeeb6-663c-42e9-9e16-c6c78ea0feaf",
        product_warranty: "2 year on-site",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HNgRiSn.th.jpg",
        product_category: "TV Units",
        product_description:
          '*Painted Wooden TV Units . * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "10",
        product_name: "Painted Wooden TV Units",
        product_real: "20000",
        product_sell: 18000,
        product_uuid: "6a5de6e5-3a4c-4e4c-af38-025ad771443f",
        product_warranty: "6 year on-site",
        sellerId: "admin",
      },

      {
        image_url: "https://iili.io/HNg7nIf.th.jpg",
        product_category: "TV Units",
        product_description:
          '*Rowlet TV Units . * 10 days replacement. * Sectional Sofa Length = 105.5". * Our experts will install it for you – No cost. * Tearproof, Water Resistant. * Perfect for Living room.',
        product_discount: "15",
        product_name: "Rowlet TV Units",
        product_real: "15000",
        product_sell: 12750,
        product_uuid: "63e3749d-2e28-4d38-8a7c-1e25f662b04c",
        product_warranty: "5 year on-site",
        sellerId: "admin",
      },
    ])
  );
}

// Added products
const added_products = JSON.parse(localStorage.getItem("added_products"));
if (!added_products) {
  localStorage.setItem(
    "added_products",
    JSON.stringify([
      { product_uuid: "1197836f-70e3-4ddb-b95d-d2be9cdc9d05" },
      { product_uuid: "3de2af59-cced-4849-94e1-df3d4b91b907" },
      { product_uuid: "131bf114-6cd9-4e44-a395-64c2a7fab318" },
      { product_uuid: "8a4cb8b7-d21d-48a0-bcce-d7fa1adb2ebf" },
      { product_uuid: "5aef0124-9664-4f2a-b4f2-59449a3f2d37" },
      { product_uuid: "e0f97bfe-e861-4efc-ac26-5205852540d1" },
      { product_uuid: "d3572eed-e216-419a-909d-5a7dbf5950b5" },
      { product_uuid: "ac49cacb-1804-4cfb-aa1b-9d64c8ba351e" },
      { product_uuid: "31afeeb6-663c-42e9-9e16-c6c78ea0feaf" },
      { product_uuid: "4762bbfc-8882-4458-952c-95bb0251f8ab" },
      { product_uuid: "e2b5a16e-21cb-4093-b7ec-bbf29154000b" },
      { product_uuid: "550e8400-e29b-41d4-a716-446655440000" },
      { product_uuid: "123e4567-e89b-12d3-a456-426655440000" },
      { product_uuid: "f81d4fae-7dec-11d0-a765-00a0c91e6bf6" },
      { product_uuid: "5a6f0c3d-b4d4-4c21-9bf4-c069d78517c8" },
      { product_uuid: "6a5de6e5-3a4c-4e4c-af38-025ad771443f" },
      { product_uuid: "63e3749d-2e28-4d38-8a7c-1e25f662b04c" },
      { product_uuid: "38b9c9dc-ec16-41d2-8e87-09e69bcf2c7e" },
      { product_uuid: "2d7c9e62-34f7-4c12-a8f7-6f41a6b0c325" },
      { product_uuid: "d8f9d9b7-efb2-4557-b929-0c2f7bc2efb3" },
      { product_uuid: "ebd9f9cc-7e11-4521-8b8d-f34f43b7aeb4" },
    ])
  );
}

const room_details = JSON.parse(localStorage.getItem("room_details"));
if (!room_details) {
  localStorage.setItem(
    "room_details",
    JSON.stringify([
      {
        id_div: "inter_column",
        id_img: "living",
        image: "../assets/images/home_page/living_room-icon.png",
        text: "Living Room",
        page_img: "../../assets/images/page/Room_living room.png",
        page_id: "living_room",
      },
      {
        id_div: "inter_column_2",
        id_img: "bedroom",
        image: "../assets/images/home_page/bedroom-icon.png",
        text: "Bedroom",
        page_img: "../../assets/images/page/Room_bed room.png",
        page_id: "bedroom",
      },
      {
        id_div: "inter_column",
        id_img: "kitchen",
        image: "../assets/images/home_page/modular kitchen-icon.png",
        text: "Kitchen",
        page_img: "../../assets/images/page/Room_kitchen1.png",
        page_id: "kitchen",
      },
      {
        id_div: "inter_column_2",
        id_img: "kids",
        image: "../assets/images/home_page/kids_room.png",
        text: "Kids Area",
        page_img: "../../assets/images/page/Room_kidsarea.png",
        page_id: "kids_area",
      },
      {
        id_div: "inter_column",
        id_img: "bathroom",
        image: "../assets/images/home_page/bathroom-icon.png",
        text: "Bathroom",
        page_img: "../../assets/images/page/Room_bathroom.png",
        page_id: "bathroom",
      },
      {
        id_div: "inter_column_2",
        id_img: "bathroom",
        image: "../assets/images/home_page/false ceiling.png",
        text: "False Ceiling",
        page_img: "../../assets/images/page/Room_false.png",
        page_id: "false_ceiling",
      },
      {
        id_div: "inter_column",
        id_img: "renovation",
        image: "../assets/images/home_page/renovation.png",
        text: "Renovation",
        page_img: "../../assets/images/page/Room_renovate.png",
        page_id: "renovation",
      },
      {
        id_div: "inter_column_2",
        id_img: "mobile",
        image: "../assets/images/home_page/mobile-house.png",
        text: "Mobile House",
        page_img: "../../assets/images/page/Room_mobile.png",
        page_id: "mobile_house",
      },
    ])
  );
}

const shoppingProduct = JSON.parse(localStorage.getItem("shoppingProduct"));
if (!shoppingProduct) {
  localStorage.setItem(
    "shoppingProduct",
    JSON.stringify([
      {id_div: "inter_column",id_img: "sofa",image: "../assets/images/home_page/sofa-icon.png",text: "Sofa",page_id: "sofa"},
      {id_div: "inter_column_2",id_img: "wallpaper",image: "../assets/images/home_page/wallpaper.png",text: "Wallpaper",page_id: "wallpaper"},
      {id_div: "inter_column",id_img: "chandelier",image: "../assets/images/home_page/chandelier.png",text: "Chandelier",page_id: "chandelier"},
      {id_div: "inter_column_2",id_img: "reusable",image: "../assets/images/home_page/space-saving.png",text: "Space Saving Furniture",page_id: "reusable_products",},
      {id_div: "inter_column",id_img: "wadrobe",image: "../assets/images/home_page/wadrobe-icon.png",text: "Wadrobe",page_id: "wadrobe",},
      {id_div: "inter_column_2",id_img: "crockery",image: "../assets/images/home_page/crockery_units-icon.png",text: "Crockery Units",page_id: "crockery_units",} 
    ])
  );
}

const roomDetails = JSON.parse(localStorage.getItem("roomDetails"));
if (!roomDetails) {
  localStorage.setItem(
    "roomDetails",
    JSON.stringify([
      {yearBuilt : 2021,budget:50000,catchyName1:"Modern",catchyName2:"Prestigious",apartmentName:"Ruby Apartments",place:"Velacherry",image:"../../assets/images/Living room/living room rich/hall_2.jpg",roomCategory:"living_room"}, 
      {yearBuilt : 2020,budget:55000,catchyName1:"Classy",catchyName2:"Esteemed",apartmentName:"Sunrise Apartments",place:"Guindy",image:"../../assets/images/Living room/living room rich/hall.jpg",roomCategory:"living_room"}, 
      {yearBuilt : 2022,budget:60000,catchyName1:"Stylish",catchyName2:"Markable",apartmentName:"Neighborly Nest",place:"Koyembadu",image:"../../assets/images/Living room/living room rich/hall_3.jpg",roomCategory:"living_room"},

       {yearBuilt : 2020,budget:30000,catchyName1:"Modern",catchyName2:"Prestigious",apartmentName:"Ruby Apartments",place:"Velacherry",image:"../../assets/images/Bathroom/bath_1.jpg",roomCategory:"bathroom"},
       {yearBuilt : 2021,budget:25000,catchyName1:"Stylish",catchyName2:"Markable",apartmentName:"Neighborly Nest",place:"Chengalpattu",image:"../../assets/images/Bathroom/bath_2.jpg",roomCategory:"bathroom"},
       {yearBuilt : 2022,budget:32000,catchyName1:"Classy",catchyName2:"Esteemed",apartmentName:"Sunrise Apartments",place:"Koyembadu",image:"../../assets/images/Bathroom/bath_3.jpg",roomCategory:"bathroom"},

       {yearBuilt : 2021,budget:50000,catchyName1:"Stylish",catchyName2:"Markable",apartmentName:"Neighborly Nest",place:"Velacherry",image:" ../../assets/images/Bedroom/couple bedroom 1.jpg",roomCategory:"bedroom"},
       {yearBuilt : 2020,budget:45000,catchyName1:"Classy",catchyName2:"Esteemed",apartmentName:"Sunrise Apartments",place:"Porur",image:" ../../assets/images/Bedroom/couple bedroom 3.jpg",roomCategory:"bedroom"},
       {yearBuilt : 2022,budget:55000,catchyName1:"Modern",catchyName2:"Prestigious",apartmentName:"Ruby Apartments",place:"Koyembadu",image:" ../../assets/images/Bedroom/couple bedroom 5.jpg",roomCategory:"bedroom"},

       {yearBuilt : 2021,budget:38000,catchyName1:"Stylish",catchyName2:"Markable",apartmentName:"Neighborly Nest",place:"Guindy",image:" ../../assets/images/Kids area/kids area 10.jpg",roomCategory:"kids_area"},
       {yearBuilt : 2020,budget:35000,catchyName1:"Classy",catchyName2:"Esteemed",apartmentName:"Sunrise Apartments",place:"Perungudi",image:"../../assets/images/Kids area/kids area 4.jpg",roomCategory:"kids_area"},
       {yearBuilt : 2022,budget:30000,catchyName1:"Modern",catchyName2:"Prestigious",apartmentName:"Ruby Apartments",place:"Koyembadu",image:"../../assets/images/Kids area/kids area 8.jpg",roomCategory:"kids_area"},

       {yearBuilt : 2021,budget:45000,catchyName1:"Stylish",catchyName2:"Markable",apartmentName:"Neighborly Nest",place:"Valasaravakkam",image:"../../assets/images/Kitchen/kitchen 4.jpg",roomCategory:"kitchen"},
       {yearBuilt : 2020,budget:50000,catchyName1:"Classy",catchyName2:"Esteemed",apartmentName:"Sunrise Apartments",place:"Guduvancherry",image:"../../assets/images/Kitchen/kitchen 6.jpg",roomCategory:"kitchen"},
       {yearBuilt : 2022,budget:52000,catchyName1:"Modern",catchyName2:"Prestigious",apartmentName:"Ruby Apartments",place:"Koyembadu",image:"../../assets/images/Kitchen/kitchen luxury 3.jpg",roomCategory:"kitchen"},

       {yearBuilt : 2021,budget:13000,catchyName1:"Stylish",catchyName2:"Markable",apartmentName:"Neighborly Nest",place:"Chrompet",image:"../../assets/images/ceiling/False ceiling 12.jpg", roomCategory:"false_ceiling"},
       {yearBuilt : 2020,budget:10000,catchyName1:"Classy",catchyName2:"Esteemed",apartmentName:"Sunrise Apartments",place:"Tambaram",image:"../../assets/images/ceiling/False ceiling 15.jpg",roomCategory:"false_ceiling"},
       {yearBuilt : 2022,budget:15000,catchyName1:"Modern",catchyName2:"Prestigious",apartmentName:"Ruby Apartments",place:"Perungaluthur",image:"../../assets/images/ceiling/False ceiling 16.jpg",roomCategory:"false_ceiling"},
      
       {yearBuilt : 2021,budget:13000,catchyName1:"Stylish",catchyName2:"Markable",apartmentName:"Neighborly Nest",place:"Kanchipuram",image:"../../assets/images/renovate/renovation 2.jfif", roomCategory:"renovation"},
       {yearBuilt : 2020,budget:10000,catchyName1:"Classy",catchyName2:"Esteemed",apartmentName:"Sunrise Apartments",place:"Bangalore",image:"../../assets/images/renovate/renovation 4.jpg",roomCategory:"renovation"},
       {yearBuilt : 2022,budget:15000,catchyName1:"Modern",catchyName2:"Prestigious",apartmentName:"Ruby Apartments",place:"Hyderabad",image:"../../assets/images/renovate/renovation 5.jpg",roomCategory:"renovation"},
       
       {yearBuilt : 2021,budget:50000,catchyName1:"Stylish",catchyName2:"Markable",apartmentName:"Caravan",place:"Chrompet",image:"../../assets/images/mobile/truck interior 5.jpg", roomCategory:"mobile_house"},
       {yearBuilt : 2020,budget:60000,catchyName1:"Classy",catchyName2:"Esteemed",apartmentName:"Motor Home",place:"Velacherry",image:"../../assets/images/mobile/truck interior 7.jpeg",roomCategory:"mobile_house"},
       {yearBuilt : 2022,budget:58000,catchyName1:"Modern",catchyName2:"Prestigious",apartmentName:"Van House",place:"Koyembadu",image:"../../assets/images/mobile/truck interior 8.jpg",roomCategory:"mobile_house"}

    ])
    );
  }
  