package com.axsos.SpringBoot.DisplayDate;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DisplayDateController {

	public DisplayDateController() {
		// TODO Auto-generated constructor stub
	}
	@RequestMapping("")
	public String index() {
		return "index";
	}
	@RequestMapping("/date")
	public String date() {
		return "date";
	}
	@RequestMapping("/time")
	public String time() {
		return "time";
	}
}
