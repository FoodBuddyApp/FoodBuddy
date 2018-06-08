package logic;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class FoodBuddyRecipes {
	
	/**
	 * @param ingredients
	 * @return false if 0 returned recipes OR recipe count at top of page
	 * 		   does not equal the number of recipes displayed. Returns true
	 * 		   otherwise. 
	 */
	public boolean LoopThroughRecipes(String ingredients[])
	{
		System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver");
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:5000/");
		for(int i = 0; i < ingredients.length; i++)
		{
			driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div/div[1]/span/input")).sendKeys(ingredients[i]);
			driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div/div[1]/span/span/button")).click();	
		}
		driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div/button[2]")).click();	
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		WebElement recipeResults;
		try { 
			recipeResults = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/h1"));
		} catch(NoSuchElementException e) {
			driver.close();
			return false; 
		}
		String tokens[] = recipeResults.getText().split(" ", 2);
		int numRecipes = Integer.parseInt(tokens[0]);
		WebElement thisRecipe;
		for(int i = 1; i < numRecipes+1; i++)
		{
			thisRecipe = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div/div["+i+"]/div[2]/div[1]/h2"));
			if(!thisRecipe.isDisplayed())
			{
				driver.close();
				return false;
			}
			System.out.println(i + ": " + thisRecipe.getText());
		}
		driver.close();
		return true;
	}
}
