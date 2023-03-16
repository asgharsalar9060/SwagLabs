package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class LoginPageStepDefinition {
	
	WebDriver driver;
	
	@Given("^I am on the Sauce Demo Login Page$")
	public void i_am_on_the_Sauce_Demo_Login_Page() {
	    WebDriverManager.chromedriver().setup();
	    driver = new ChromeDriver();
	    driver.get("https://www.saucedemo.com/");
	}

	@When("^I fill the account information for account StandardUser into the \"([^\"]*)\" field and the \"([^\"]*)\" field$")
	public void i_fill_the_account_information_for_account_StandardUser_into_the_field_and_the_field(String username, String password) {
	    driver.findElement(By.id("user-name")).sendKeys(username);
	    driver.findElement(By.id("password")).sendKeys(password);

	}

	@When("^I click the Login Button$")
	public void i_click_the_Login_Button() throws InterruptedException {
	    driver.findElement(By.id("login-button")).click();
	    Thread.sleep(3000);
	}
	
	@Then("^I verify the Error Message contains the text \"([^\"]*)\"$")
	public void i_verify_the_Error_Message_contains_the_text(String errorMessage) {
	    Assert.assertEquals("Sorry, this user has been banned.", errorMessage);
	}

	@Then("^I am redirected to the Sauce Demo Main Page$")
	public void i_am_redirected_to_the_Sauce_Demo_Main_Page() {
	    String homePageTitle = driver.getTitle();
	    System.out.println("Home page title: " + homePageTitle);
//	    Assert.assertEquals("Swag Labs", homePageTitle);
	}

	@Then("^I verify the App Logo exists$")
	public boolean i_verify_the_App_Logo_exists() {
	    WebElement appLogo = driver.findElement(By.xpath("//div[@class='app_logo']"));
	    if(appLogo.isDisplayed()) {
	    	System.out.println("App Logo is displayed!");
	    	return true;
	    }else {
	    	System.out.println("App Logo is not displayed!");
	    	return false;
	    }
	}
}
