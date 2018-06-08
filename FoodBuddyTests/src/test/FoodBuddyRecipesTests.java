package test;

import static org.junit.Assert.*;

import org.junit.Test;

import logic.FoodBuddyRecipes;

public class FoodBuddyRecipesTests {

	@Test
	public void LoopThroughOne() {
		FoodBuddyRecipes fb = new FoodBuddyRecipes();
		String ingredients[] = {"Chicken"};
		assertTrue(fb.LoopThroughRecipes(ingredients));
	}
	
	@Test
	public void LoopThroughExtensive() {
		FoodBuddyRecipes fb = new FoodBuddyRecipes();
		String ingredients[] = {"Chicken", "Spinach", "Feta", "Broccoli", "Kale"};
		assertTrue(fb.LoopThroughRecipes(ingredients));
	}
	
	@Test
	public void LoopThroughNone() {
		FoodBuddyRecipes fb = new FoodBuddyRecipes();
		String ingredients[] = {"NoIngredient"};
		assertFalse(fb.LoopThroughRecipes(ingredients));
	}

}
