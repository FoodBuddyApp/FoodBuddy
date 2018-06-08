package test;

import static org.junit.Assert.*;

import org.junit.Test;

import logic.FoodBuddyHome;

public class FoodBuddyHomeTests {

	@Test
	public void OptionsHidden() {
		FoodBuddyHome fb = new FoodBuddyHome();
		assertTrue(fb.OptionsHidden());
	}
	
	@Test
	public void OptionsShown() {
		FoodBuddyHome fb = new FoodBuddyHome();
		assertTrue(fb.OptionsShown());
	}
	
	@Test
	public void SearchEnabled() {
		FoodBuddyHome fb = new FoodBuddyHome();
		assertTrue(fb.SearchEnabled());
	}
	
	@Test
	public void SearchDisabled() {
		FoodBuddyHome fb = new FoodBuddyHome();
		assertTrue(fb.SearchDisabled());
	}
	
}
