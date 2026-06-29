package com.axsos.SpringBoot.PathVariable;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PathVariableController {

	public PathVariableController() {
		// TODO Auto-generated constructor stub
	}
	@RequestMapping("/daikichi")
	public String daikichi() {
		return "Welcome";
	}
	
	@RequestMapping("/daikichi/today")
	public String today() {
		return "Today you will find luck in all your endeavors!";
	}
	@RequestMapping("/daikichi/tomorrow")
	public String tomorrow() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
	}
	@RequestMapping("/daikichi/travel/{city}")
	public String travel(@PathVariable("city") String city ) {
		return "Congratulations! You will soon travel to "+ city;	
	}
	
	@RequestMapping("/daikichi/lotto/{num}")
	public String lotto(@PathVariable("num") int num ) {
		if(num%2==0) {
			return "ou will take a grand journey in the near future but be wary of tempting offers.";
		}
		else {
			return "You have enjoyed the fruits of your labor, but now is a great time to spend time with family and friends.";
		}
	}

}
