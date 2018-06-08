package logic;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class FoodBuddyHome {
	public boolean OptionsHidden()
	{
		System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver");
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:5000/");
		WebElement textBox = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div/div[3]/div/div[1]/h3"));
		boolean res = textBox.isDisplayed();
		driver.close();
		return !res;
	}
	
	public boolean OptionsShown()
	{
		System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver");
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:5000/");
		WebElement textBox = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div/div[3]/div/div[1]/h3"));
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div/button[1]")).click();
		boolean res = textBox.isDisplayed();
		driver.close();
		return res;
	}
	
	public boolean SearchDisabled()
	{
		System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver");
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:5000/");
		WebElement textBox = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div/button[2]"));
		boolean res = textBox.isEnabled();
		driver.close();
		return !res;
	}
	
	public boolean SearchEnabled()
	{
		System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver");
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:5000/");
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div/div[1]/span/input")).sendKeys("Chicken");
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div/div[1]/span/span/button")).click();		
		WebElement textBox = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div/button[2]"));
		boolean res = textBox.isEnabled();
		driver.close();
		return res;
	}
	
	
}
