$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Laptop\u0026NoteBooks.feature");
formatter.feature({
  "line": 2,
  "name": "Laptop And NoteBooks Features",
  "description": "",
  "id": "laptop-and-notebooks-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Laptop\u0026NoteBookTest"
    }
  ]
});
formatter.before({
  "duration": 3622921100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Laptop \u0026 NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all Laptop \u0026 NoteBook option",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2471731200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Laptop_NoteBook_tab()"
});
formatter.result({
  "duration": 71925900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Show_all_Laptop_NoteBook_option()"
});
formatter.result({
  "duration": 488398400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Add and Remove a Mac Book from cart",
  "description": "",
  "id": "laptop-and-notebooks-features;add-and-remove-a-mac-book-from-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User click on MacBook  item",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clickadd to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should see a message ‘Success: You have added MacBook to your shopping cart!’",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User should see ‘1tem(s)-602.00’showed to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User click on cart option",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on red X button to remove the item from cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "item should be removed and cartshould show ‘0 item(s)’",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_MacBook_item()"
});
formatter.result({
  "duration": 1491218700,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_clickadd_to_Cart_button()"
});
formatter.result({
  "duration": 111341200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_should_see_a_message_Success_You_have_added_MacBook_to_your_shopping_cart()"
});
formatter.result({
  "duration": 352404100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 17
    },
    {
      "val": "602",
      "offset": 25
    },
    {
      "val": "00",
      "offset": 29
    }
  ],
  "location": "LaptopAndNoteBookStepDefinitions.user_should_see_tem_s_showed_to_the_cart(int,int,int)"
});
formatter.result({
  "duration": 300074100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_cart_option()"
});
formatter.result({
  "duration": 70394800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_red_X_button_to_remove_the_item_from_cart()"
});
formatter.result({
  "duration": 52339700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 44
    }
  ],
  "location": "LaptopAndNoteBookStepDefinitions.item_should_be_removed_and_cartshould_show_item_s(int)"
});
formatter.result({
  "duration": 334062100,
  "status": "passed"
});
formatter.after({
  "duration": 947148800,
  "status": "passed"
});
formatter.before({
  "duration": 1841860500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Laptop \u0026 NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all Laptop \u0026 NoteBook option",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2438586900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Laptop_NoteBook_tab()"
});
formatter.result({
  "duration": 61908300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Show_all_Laptop_NoteBook_option()"
});
formatter.result({
  "duration": 1469579000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Product Comparison",
  "description": "",
  "id": "laptop-and-notebooks-features;product-comparison",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User click on product comparison icon on ‘MacBook’",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click on product comparison icon on ‘MacBook Air",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User should see a message ‘Success: You have added MacBook Air to your product comparison!’",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User click on Product comparison link",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User should see Product Comparison Chart",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_product_comparison_icon_on_MacBook()"
});
formatter.result({
  "duration": 75399000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_product_comparison_icon_on_MacBook_Air()"
});
formatter.result({
  "duration": 73120000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_should_see_a_message_Success_You_have_added_MacBook_Air_to_your_product_comparison()"
});
formatter.result({
  "duration": 434521900,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Product_comparison_link()"
});
formatter.result({
  "duration": 68445400,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_should_see_Product_Comparison_Chart()"
});
formatter.result({
  "duration": 356432300,
  "status": "passed"
});
formatter.after({
  "duration": 896420600,
  "status": "passed"
});
formatter.before({
  "duration": 1886723300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Laptop \u0026 NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all Laptop \u0026 NoteBook option",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2313418500,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Laptop_NoteBook_tab()"
});
formatter.result({
  "duration": 79008000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Show_all_Laptop_NoteBook_option()"
});
formatter.result({
  "duration": 465432500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Adding and item to Wish list",
  "description": "",
  "id": "laptop-and-notebooks-features;adding-and-item-to-wish-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User click on heart icon to add ‘Sony VaIO’laptop to wish list",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User should get a message ‘You must login or create an account to save Sony VAIO to your wish list!’",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_heart_icon_to_add_Sony_VaIO_laptop_to_wish_list()"
});
formatter.result({
  "duration": 77818000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_should_get_a_message_You_must_login_or_create_an_account_to_save_Sony_VAIO_to_your_wish_list()"
});
formatter.result({
  "duration": 381247800,
  "status": "passed"
});
formatter.after({
  "duration": 1419120600,
  "status": "passed"
});
formatter.before({
  "duration": 1860699400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on Laptop \u0026 NoteBook tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all Laptop \u0026 NoteBook option",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2327555600,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Laptop_NoteBook_tab()"
});
formatter.result({
  "duration": 56827200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_Show_all_Laptop_NoteBook_option()"
});
formatter.result({
  "duration": 801202900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Validate the price of MacBook Pro is 2000",
  "description": "",
  "id": "laptop-and-notebooks-features;validate-the-price-of-macbook-pro-is-2000",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "User click on ‘MacBook Pro’item",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User should see ‘$2,000.00’price tag is present on UI.",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBookStepDefinitions.user_click_on_MacBook_Pro_item()"
});
formatter.result({
  "duration": 1597980300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    },
    {
      "val": "000",
      "offset": 20
    },
    {
      "val": "00",
      "offset": 24
    }
  ],
  "location": "LaptopAndNoteBookStepDefinitions.user_should_see_$_price_tag_is_present_on_UI(int,int,int)"
});
formatter.result({
  "duration": 316965900,
  "status": "passed"
});
formatter.after({
  "duration": 1560982800,
  "status": "passed"
});
});