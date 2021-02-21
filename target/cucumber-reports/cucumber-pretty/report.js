$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/RetailPageLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Retail Page Login Testing",
  "description": "",
  "id": "retail-page-login-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RetailTesting"
    }
  ]
});
formatter.before({
  "duration": 2489129400,
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
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2536804000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 58582600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3616550800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 477622600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1156890000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3300230500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "#Scenario: Register as an Affiliate userwith Cheque Payment Method"
    },
    {
      "line": 14,
      "value": "#\tWhen User click on‘Register for an Affiliate Account’link"
    },
    {
      "line": 15,
      "value": "#\tAnd User fill affiliate form with below information"
    },
    {
      "line": 16,
      "value": "#\t\t|company|website|taxID|paymentMethod|"
    },
    {
      "line": 17,
      "value": "#\tAnd User check on About us check box"
    },
    {
      "line": 18,
      "value": "#\tAnd User click on Continue button"
    },
    {
      "line": 19,
      "value": "#\tThen User should see a success message"
    }
  ],
  "line": 21,
  "name": "Edit your affiliate information from Cheque payment method to Bank Transfer",
  "description": "",
  "id": "retail-page-login-testing;edit-your-affiliate-information-from-cheque-payment-method-to-bank-transfer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User click on‘Edit your affiliate informationlink",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user click on Bank Transfer radio button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User fill Bank information with below information",
  "rows": [
    {
      "cells": [
        "bankName",
        "abaNumber",
        "swiftCode",
        "accountName",
        "accountNumber"
      ],
      "line": 25
    },
    {
      "cells": [
        "Bank of America",
        "100200",
        "225588",
        "Suhrab",
        "112233665544"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User click on Continue AffiliateButton",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User should see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Edit_your_affiliate_informationlink()"
});
formatter.result({
  "duration": 271538900,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Bank_Transfer_radio_button()"
});
formatter.result({
  "duration": 71967100,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_fill_Bank_information_with_below_information(DataTable)"
});
formatter.result({
  "duration": 340895500,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_continue_affiliatebutton()"
});
formatter.result({
  "duration": 799951700,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_should_see_a_success_message()"
});
formatter.result({
  "duration": 288457300,
  "status": "passed"
});
formatter.after({
  "duration": 725056000,
  "status": "passed"
});
formatter.before({
  "duration": 1546635000,
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
  "name": "User click  on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter username \u0027sdet@tekschool.us\u0027 and password \u0027sdet\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be logged in to MyAccount dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2238295600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 61011300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3544585700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sdet@tekschool.us",
      "offset": 21
    },
    {
      "val": "sdet",
      "offset": 54
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 513125800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1583388800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3292242100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Edit your account Information",
  "description": "",
  "id": "retail-page-login-testing;edit-your-account-information",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "User click on‘Edit your account information’ link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User modify below information",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastName",
        "email",
        "telephone"
      ],
      "line": 33
    },
    {
      "cells": [
        "Suhrab",
        "Khiabani",
        "suhrabkhiabani@tekschool.com",
        "301-401-7895"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User should seea message ‘Success: Your account has been successfully updated.’",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Edit_your_account_information_link()"
});
formatter.result({
  "duration": 669929100,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_modify_below_information(DataTable)"
});
formatter.result({
  "duration": 299965300,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_continue_button()"
});
formatter.result({
  "duration": 77144800,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_should_seea_message_Success_Your_account_has_been_successfully_updated()"
});
formatter.result({
  "duration": 430156600,
  "status": "passed"
});
formatter.after({
  "duration": 741843400,
  "status": "passed"
});
});