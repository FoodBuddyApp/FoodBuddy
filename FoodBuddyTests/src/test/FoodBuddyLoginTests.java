package test;

import static org.junit.Assert.*;

import org.junit.Test;
import logic.FoodBuddyLogin;

public class FoodBuddyLoginTests {

	@Test
	public void LoginUser() {
		FoodBuddyLogin login = new FoodBuddyLogin();
		assertTrue(login.LoginUser());
	}
	
	@Test
	public void BadLogin() {
		FoodBuddyLogin login = new FoodBuddyLogin();
		assertTrue(login.BadLogin());
	}

}
