package abilities;

import io.appium.java_client.AppiumDriver;
import net.serenitybdd.screenplay.Ability;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.RefersToActor;

public class UseMobileApp implements Ability, RefersToActor {
    
    private final AppiumDriver driver;
    private Actor actor;

    public UseMobileApp(AppiumDriver driver) {
        this.driver = driver;
    }

    public static UseMobileApp with(AppiumDriver driver) {
        return new UseMobileApp(driver);
    }

    public static AppiumDriver as(Actor actor) {
        return actor.abilityTo(UseMobileApp.class).driver;
    }

    @Override
    public <T extends Ability> T asActor(Actor actor) {
        this.actor = actor;
        return (T) this;
    }
}