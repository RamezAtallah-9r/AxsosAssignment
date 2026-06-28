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
	public String hello(@RequestParam(value="FirstName", defaultValue = "Human") String fname,
			            @RequestParam(value="LastName", required = false) String lname,
			            @RequestParam(value="Times", defaultValue = "1") int times) {
		String Greeting="";
		for(int i=0;i<times;i++) {
			if(lname==null || lname=="") {
				Greeting+="Welcome "+fname;
			}
			else {
				Greeting+="Welcome "+fname+" "+lname;
			}
		}
		return Greeting;
	}
}
