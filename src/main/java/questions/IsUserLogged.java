package questions;

import abilities.UseMobileApp;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.questions.Visibility;
import ui.LoginScreen;

public class IsUserLogged implements Question<Boolean> {

    public static IsUserLogged successfully() {
        return new IsUserLogged();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        return Visibility.of(LoginScreen.SUCCESS_MESSAGE).answeredBy(actor);
    }
}