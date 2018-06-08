package logic;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class FoodBuddyLogin {
	public boolean LoginUser()
	{
		System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver");
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:5000/");
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/nav/div/div/div/div")).click();		
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div/div/a[1]/span")).click();		
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[2]/span[1]/input")).sendKeys("zdrichar");
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[2]/span[2]/input")).sendKeys("password");
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/button")).click();
		try {
			// Make sure page loads
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		WebElement textBox = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/nav/div/p"));
		if(textBox.getText().equals("Welcome Guest!"))
		{
			driver.close();
			return false;
		}
		else
		{
			driver.close();
			return true; 
		}
	}
	
	public boolean BadLogin()
	{
		System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver");
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:5000/");
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/nav/div/div/div/div")).click();		
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div/div/a[1]/span")).click();		
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[2]/span[1]/input")).sendKeys(Math.random()+"");
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[2]/span[2]/input")).sendKeys(Math.random()+"");
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/button")).click();
		try {
			// Make sure page loads
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		WebElement textBox = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/p"));
		if(!textBox.isDisplayed())
		{
			driver.close();
			return false;
		}
		else
		{
			driver.close();
			return true; 
		}
	}
	
}
