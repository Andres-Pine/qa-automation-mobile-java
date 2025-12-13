package tasks;

import abilities.UseMobileApp;
import models.User;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.actions.Enter;
import ui.LoginScreen;

public class Login implements Task {
    
    private final User user;

    public Login(User user) {
        this.user = user;
    }

    public static Login with(User user) {
        return new Login(user);
    }

    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
            Enter.theValue(user.getUsername()).into(LoginScreen.USERNAME_FIELD),
            Enter.theValue(user.getPassword()).into(LoginScreen.PASSWORD_FIELD),
            Click.on(LoginScreen.LOGIN_BUTTON)
        );
    }
}