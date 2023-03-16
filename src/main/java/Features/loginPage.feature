Feature: Swag Labs login feature


  Scenario Outline: Successful Login
  
  	Given I am on the Sauce Demo Login Page
  	When I fill the account information for account StandardUser into the "<username>" field and the "<password>" field
  	And I click the Login Button
    Then I am redirected to the Sauce Demo Main Page
    And I verify the App Logo exists

  Examples: 
      | username  		| password 			|
      | standard_user | secret_sauce	|
      
      

	Scenario Outline: Failed Login
  
  	Given I am on the Sauce Demo Login Page
  	When I fill the account information for account StandardUser into the "<username>" field and the "<password>" field
  	And I click the Login Button
    Then I verify the Error Message contains the text "<message>"

  Examples: 
      | username  			| password 			|	message														|
      | locked_out_user | secret_sauce	|	Sorry, this user has been banned.	|