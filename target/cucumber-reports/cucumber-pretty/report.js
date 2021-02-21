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
      "name": "@TestingOnRetailPage"
    }
  ]
});
formatter.before({
  "duration": 2403736500,
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
  "duration": 2212801400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 60994900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3551218400,
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
  "duration": 482837300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 1424312900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3296893200,
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
  "duration": 2941182900,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"Object.getClass()\" because \"obj\" is null\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:557)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat pageObjects.RetailPageObject.editAffiliateInformation(RetailPageObject.java:21)\r\n\tat stepDefinitions.RetailPageLoginTestStepDefinition.user_click_on_Edit_your_affiliate_informationlink(RetailPageLoginTestStepDefinition.java:20)\r\n\tat ✽.When User click on‘Edit your affiliate informationlink(Features/RetailPageLogin.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_Bank_Transfer_radio_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_fill_Bank_information_with_below_information(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_continue_affiliatebutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_should_see_a_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4103884300,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027LAPTOP-5E7SJ6AA\u0027, ip: \u002710.0.0.57\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\suhra\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60438}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0ff0d81674765647960a2b2e7e73a2ba\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:486)\r\n\tat core.Base.tearDown(Base.java:104)\r\n\tat stepDefinitions.Initializer.afterHooks(Initializer.java:65)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 1571567200,
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
  "duration": 2909518200,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 78142900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login()"
});
formatter.result({
  "duration": 3628834300,
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
  "duration": 487075300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "duration": 706916600,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard()"
});
formatter.result({
  "duration": 3160683700,
  "error_message": "java.lang.RuntimeException: Unexpected result for screenshot command: null\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:351)\r\n\tat utilities.WebDriverUtility.screenShot(WebDriverUtility.java:169)\r\n\tat stepDefinitions.LoginTestStepDefinition.user_should_be_logged_in_to_MyAccount_dashboard(LoginTestStepDefinition.java:70)\r\n\tat ✽.Then User should be logged in to MyAccount dashboard(Features/RetailPageLogin.feature:11)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_modify_below_information(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_click_on_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RetailPageLoginTestStepDefinition.user_should_seea_message_Success_Your_account_has_been_successfully_updated()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 23775800,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d88.0.4324.182)\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027LAPTOP-5E7SJ6AA\u0027, ip: \u002710.0.0.57\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.182, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\suhra\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60472}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d3059e781f94ead2a29663d4795e0561\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:486)\r\n\tat core.Base.tearDown(Base.java:104)\r\n\tat stepDefinitions.Initializer.afterHooks(Initializer.java:65)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});