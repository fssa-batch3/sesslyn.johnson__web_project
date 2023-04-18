#Interior-Designing

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fssa-batch3_sesslyn.johnson__web_project&metric=bugs)](https://sonarcloud.io/summary/new_code?id=fssa-batch3_sesslyn.johnson__web_project)


This project is about Interior Designig for your home and also you can buy furniture in it.

Wireframe : https://drive.google.com/drive/folders/1MCM5PDCPSDWTxN4F24VewuGukXOK2wBV

Userflow : https://drive.google.com/drive/folders/1MCM5PDCPSDWTxN4F24VewuGukXOK2wBV

Documentation: https://docs.google.com/document/d/1byvLtvtBDpoKq4_vphgbOFomeDiCT3sDkHkcebmlgVs/edit?usp=sharing

Sonar Cloud : https://sonarcloud.io/project/overview?id=fssa-batch3_sesslyn.johnson__web_project

Featues

1. User Crud
     
     * Create account
     * Read account
     * Update profile
     * Delete profile
  
2. Product Crud

 * Seller :
     * Create product
     * Read product
     * Update product
     * Delete product
     
  * Buyer :
      * Read product list
      * Update product details
     

3. Cart Crud
     
     * Create cart
     * Read cart
     * Update cart
     * Delete cart
     
4. Wishlist Crud

     * Create wishlist
     * Read wishlist
     * Update wishlist
     * Delete wishlist
    
5. Order Crud

     * Create order
     * Read order
     * Update order
     * Delete order

E-COMMERCE
BUYER:
CREATE AN ACCOUNT :  ( COMPLETED )
* Scenario 1: Successfully create an account
    * Steps :
        1. In the index page, click the sign up.
        2. You will be navigate to the sign up page.
        3. Enter the required information such as name, email, and password.
        4. Click the "Sign Up" button.
    * Expected result :
        * Navigate to the login page.

CREATE AN ACCOUNT :  ( COMPLETED )
* Scenario 1: Successfully log in to your account
    * Steps :
        1. While Signing up you will be navigate to the login page.
        2. Enter the required information such as email, and password.
        3. Click the "Login" button.
    * Expected result :
        * Navigate to the User Home page.


UPDATE YOUR PROFILE :  ( COMPLETED )
* Scenario 1: Successfully Update your profile 
    * Steps :
        1. Click profile icon on the header and navigate to the Profile page.
        2. Click the edit icon in the right corner.
        3. Enter the required information such as contact, address, country, about .
        4. Click the "Submit" button.
    * Expected result :
        * Navigate to the Profile page where you can see your details.

LOG OUT FROM THE ACCOUNT :  ( COMPLETED )
* Scenario 1: Log out from your account
    * Steps :
        1. If you have login already, you can see the log out button in every page header.
        2. Click the log out button.
    * Expected result :
        * You will be logged out of your account and navigate to the index page.

          
Add Products to Cart:  ( COMPLETED )
* Scenario 1: Add Products to Cart
    * steps :
        1. Navigate to the Shop page through the header.
        2. Hover the image.
        3. Click the view more.
        4. Navigate to the product description page.
        5. Click the Add to cart button.
    * Expected result :
        * Navigate to the Cart page.


Update Cart :  ( COMPLETED )
* Scenario 1: Successfully Updated Cart
    * Steps :
          1. Navigate to the Cart page.
          2. Update the quantity.
          3. Click the Update Button.
          4. Click the Buy Now button
    * Expected result :
         * Navigate to the Place Order page.


REMOVE PRODUCTS/ITEMS FROM THE CART :  ( COMPLETED )
* Scenario 1: Successfully remove item from cart
    * Steps:
         1. Navigate to the Cart page.
         2. Click the delete icon. 
    * Expected result:
        * The product will be removed from the cart.

ADD PRODUCT/ITEM TO THE WISHLIST : ( COMPLETED )

* Scenario 1: Successfully add product/item to the wishlist
  * Steps :
     1. Navigate to the Shop page.
     2. Hover the product.
     3. Click the heart icon.
     4. You will receive an alert message.
* Expected result :
     1. You will be redirected to the wishlist page and the product will be added.
  
* Scenario 2: Successfully add product/item to the wishlist
  * Steps :
     1. Navigate to the Shop page.
     2. Hover the product.
     3. Click the view more
     4. You will be redirect to the product details page.
     5. Click the heart icon which is on the image.
     4. You will receive an alert message.
* Expected result :
     1. You will be redirected to the wishlist page and the product will be added.
  

 SELLER:
 CREATE AN ACCOUNT :  ( COMPLETED )
* Scenario 1: Successfully create an account
    * Steps :
        1. At the bottom of the index page, there will be a text (Are you a seller?)
        2. Click the word seller
        3. Navigate to the Seller homepage page.
        4. Click the Sign up button in the header.
        5. Navigate to the sign up page.
        6. Enter the required information such as name, email, and password.
        7. Click the "Sign Up" button.
    * Expected result :
        * Navigate to the login page.

CREATE AN ACCOUNT :  ( COMPLETED )
* Scenario 1: Successfully log in to your account
    * steps :
        1. Navigate to the login page.
        2. Enter the required information such as email, and password.
        3. Click the "Login" button.
    * Expected result :
        * Navigate to the Seller Home page.

UPDATE YOUR PROFILE :  ( COMPLETED )
* Scenario 1: Successfully Update your profile 
    * Steps :
        1. Click the profile icon and navigate to the profile page.
        2. Click the edit icon in the right corner.
        3. Enter the required information such as contact, address, country, about .
        4. Click the "Submit" button.
    * Expected result :
        * Navigate to the Profile page where you can see your details.

LOG OUT FROM THE ACCOUNT :  ( COMPLETED )
* Scenario 1: Log out from your account
    * Steps :
        1. If you have login already, you can see the log out button in every page header.
        2. Click the log out button.
    * Expected result :
        * You will be logged out of your account and navigate to the index page.

 Add new product: ( COMPLETED )
 * Scenario 1: Successfully add new product
     * Steps:
          1. Click the new in the header.
          2. Navigate to the product-form page.
          3. Enter the required information such as imageurl, product name, product category, product description, product price (original, current price, discount in Rs), product warranty.
          4. Click the "Submit" button.
    * Expected Result:
          *  Navigate to the Product list page.

Product Added to the user side: ( COMPLETED )
  * Scenario 1: Successfully Product Added to the user side.
     * Steps :
          1. Click Add button in the product list page.
     * Expected Result:
          * Product will be added to the shop page of the user.

Product removed on the user side: ( COMPLETED )
  * Scenario 1: Successfully Product removed on the user side.
     * Steps :
          1. Click remove button in the product list page.
     * Expected Result:
          * Product will be removed to the shop page of the user.
  
Edit Product Details: ( COMPLETED )
  * Scenario 2: Successfully edit the product
     * Steps:
          1. Click the image of the product.
          2. View the product details if you need update it. 
          3. By clicking the edit button.
    * Expected Result:
          *  Navigate to the product details page and also updated.
          

DELETE THE PRODUCT :  ( COMPLETED )
* Scenario 1: Update: Successfully deleted the product
    * Steps :
        1. Navigate to the products details page.
        2. click the Edit button.
        3. Navigate to the edit page.
        4. Click the delete button.
    * Expected result :
        * The product is deleted from the product-list page.


















































          

   
