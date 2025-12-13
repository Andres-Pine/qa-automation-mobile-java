package ui;

import net.serenitybdd.screenplay.targets.Target;
import org.openqa.selenium.By;

public class LoginScreen {
    
    public static final Target USERNAME_FIELD = Target.the("username field")
            .located(By.id("username"));
    
    public static final Target PASSWORD_FIELD = Target.the("password field")
            .located(By.id("password"));
    
    public static final Target LOGIN_BUTTON = Target.the("login button")
            .located(By.id("loginButton"));
    
    public static final Target SUCCESS_MESSAGE = Target.the("success message")
            .located(By.id("successMessage"));
}