package drivers;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.MalformedURLException;
import java.net.URL;

public class AppiumDriverFactory {
    
    private static final String SAUCE_LABS_URL = "https://ondemand.us-west-1.saucelabs.com/wd/hub";
    private static final String BROWSERSTACK_URL = "https://hub-cloud.browserstack.com/wd/hub";
    
    public static AppiumDriver createDriver(String platform, String provider) throws MalformedURLException {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        
        switch (platform.toLowerCase()) {
            case "android":
                return createAndroidDriver(capabilities, provider);
            case "ios":
                return createIOSDriver(capabilities, provider);
            default:
                throw new IllegalArgumentException("Unsupported platform: " + platform);
        }
    }
    
    private static AndroidDriver createAndroidDriver(DesiredCapabilities capabilities, String provider) throws MalformedURLException {
        capabilities.setCapability("platformName", "Android");
        capabilities.setCapability("automationName", "Flutter");
        
        return new AndroidDriver(getProviderUrl(provider), capabilities);
    }
    
    private static IOSDriver createIOSDriver(DesiredCapabilities capabilities, String provider) throws MalformedURLException {
        capabilities.setCapability("platformName", "iOS");
        capabilities.setCapability("automationName", "Flutter");
        
        return new IOSDriver(getProviderUrl(provider), capabilities);
    }
    
    private static URL getProviderUrl(String provider) throws MalformedURLException {
        switch (provider.toLowerCase()) {
            case "saucelabs":
                return new URL(SAUCE_LABS_URL);
            case "browserstack":
                return new URL(BROWSERSTACK_URL);
            case "local":
                return new URL("http://localhost:4723/wd/hub");
            default:
                throw new IllegalArgumentException("Unsupported provider: " + provider);
        }
    }
}