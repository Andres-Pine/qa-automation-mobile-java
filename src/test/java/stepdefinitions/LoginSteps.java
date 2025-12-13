package stepdefinitions;

import abilities.UseMobileApp;
import drivers.AppiumDriverFactory;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import models.User;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.abilities.BrowseTheWeb;
import questions.IsUserLogged;
import tasks.Login;

import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;
import static org.hamcrest.Matchers.is;

public class LoginSteps {
    
    private Actor user = Actor.named("User");
    
    @Before
    public void setUp() throws Exception {
        user.can(UseMobileApp.with(AppiumDriverFactory.createDriver("android", "local")));
    }
    
    @Given("the user is on the login screen")
    public void theUserIsOnTheLoginScreen() {
        // Navigation to login screen if needed
    }
    
    @When("the user enters valid credentials")
    public void theUserEntersValidCredentials() {
        user.attemptsTo(Login.with(new User("validUser", "validPassword")));
    }
    
    @When("the user enters invalid credentials")
    public void theUserEntersInvalidCredentials() {
        user.attemptsTo(Login.with(new User("invalidUser", "invalidPassword")));
    }
    
    @Then("the user should be logged in successfully")
    public void theUserShouldBeLoggedInSuccessfully() {
        user.should(seeThat(IsUserLogged.successfully(), is(true)));
    }
    
    @Then("the user should see an error message")
    public void theUserShouldSeeAnErrorMessage() {
        user.should(seeThat(IsUserLogged.successfully(), is(false)));
    }
}