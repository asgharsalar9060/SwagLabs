package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\User\\OneDrive\\Documents\\JavaTraining\\SwagLabs\\src\\main\\java\\Features\\loginPage.feature", 
		glue={"StepDefinitions"}, 
		format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, 
		monochrome = true, 
		strict = true, 
		dryRun = false 
		//tags = {}			
		)

public class TestRunner {

}
