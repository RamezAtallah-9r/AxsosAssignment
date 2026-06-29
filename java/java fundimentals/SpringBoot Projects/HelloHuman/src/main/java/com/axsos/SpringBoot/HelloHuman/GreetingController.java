package com.axsos.SpringBoot.HelloHuman;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

	public GreetingController() {
		// TODO Auto-generated constructor stub
	}

	@RequestMapping("/")
	public String hello(@RequestParam(value = "FirstName", defaultValue = "Human") String fname,
						@RequestParam(value = "LastName", required = false) String lname,
						@RequestParam(value = "Times", defaultValue = "1") int times) {
		StringBuilder greeting = new StringBuilder();

		for (int i = 0; i < times; i++) {
			greeting.append("Welcome ").append(fname);

			// Securely check that lname is neither null nor empty
			if (lname != null && !lname.trim().isEmpty()) {
				greeting.append(" ").append(lname);
			}

			// Adds a separating space between greetings (except after the last one)
			if (i < times - 1) {
				greeting.append(" ");
			}
		}
		return greeting.toString();
	}
}
