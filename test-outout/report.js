$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/User/OneDrive/Documents/JavaTraining/SwagLabs/src/main/java/Features/loginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Swag Labs login feature",
  "description": "",
  "id": "swag-labs-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Successful Login",
  "description": "",
  "id": "swag-labs-login-feature;successful-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on the Sauce Demo Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I fill the account information for account StandardUser into the \"\u003cusername\u003e\" field and the \"\u003cpassword\u003e\" field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am redirected to the Sauce Demo Main Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify the App Logo exists",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "swag-labs-login-feature;successful-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "swag-labs-login-feature;successful-login;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 14,
      "id": "swag-labs-login-feature;successful-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Successful Login",
  "description": "",
  "id": "swag-labs-login-feature;successful-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on the Sauce Demo Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I fill the account information for account StandardUser into the \"standard_user\" field and the \"secret_sauce\" field",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am redirected to the Sauce Demo Main Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I verify the App Logo exists",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStepDefinition.i_am_on_the_Sauce_Demo_Login_Page()"
});
formatter.result({
  "duration": 7339489000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 66
    },
    {
      "val": "secret_sauce",
      "offset": 96
    }
  ],
  "location": "LoginPageStepDefinition.i_fill_the_account_information_for_account_StandardUser_into_the_field_and_the_field(String,String)"
});
formatter.result({
  "duration": 319772800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.i_click_the_Login_Button()"
});
formatter.result({
  "duration": 3139252500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.i_am_redirected_to_the_Sauce_Demo_Main_Page()"
});
formatter.result({
  "duration": 20848800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.i_verify_the_App_Logo_exists()"
});
formatter.result({
  "duration": 97775100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Failed Login",
  "description": "",
  "id": "swag-labs-login-feature;failed-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I am on the Sauce Demo Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I fill the account information for account StandardUser into the \"\u003cusername\u003e\" field and the \"\u003cpassword\u003e\" field",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify the Error Message contains the text \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "swag-labs-login-feature;failed-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 26,
      "id": "swag-labs-login-feature;failed-login;;1"
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Sorry, this user has been banned."
      ],
      "line": 27,
      "id": "swag-labs-login-feature;failed-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Failed Login",
  "description": "",
  "id": "swag-labs-login-feature;failed-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I am on the Sauce Demo Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I fill the account information for account StandardUser into the \"locked_out_user\" field and the \"secret_sauce\" field",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify the Error Message contains the text \"Sorry, this user has been banned.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStepDefinition.i_am_on_the_Sauce_Demo_Login_Page()"
});
formatter.result({
  "duration": 5895551500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locked_out_user",
      "offset": 66
    },
    {
      "val": "secret_sauce",
      "offset": 98
    }
  ],
  "location": "LoginPageStepDefinition.i_fill_the_account_information_for_account_StandardUser_into_the_field_and_the_field(String,String)"
});
formatter.result({
  "duration": 323672400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStepDefinition.i_click_the_Login_Button()"
});
formatter.result({
  "duration": 3116948800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sorry, this user has been banned.",
      "offset": 46
    }
  ],
  "location": "LoginPageStepDefinition.i_verify_the_Error_Message_contains_the_text(String)"
});
formatter.result({
  "duration": 3258200,
  "status": "passed"
});
});