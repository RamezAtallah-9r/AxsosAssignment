package com.axsos.SpringBoot.OmikujiForm;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class OmikujiController {

	public OmikujiController() {
		// TODO Auto-generated constructor stub
	}
@RequestMapping("")
public String index() {
	
	return "index";
}

@PostMapping("/result")
public String result(Model model, 
@RequestParam int number,@RequestParam String city,
@RequestParam String person,@RequestParam String hobby,
@RequestParam String creature,@RequestParam String message ) {
	model.addAttribute("number", number);
	model.addAttribute("city", city);
	model.addAttribute("person", person);
	model.addAttribute("hobby", hobby);
	model.addAttribute("creature", creature);
	model.addAttribute("message", message);
	
	return "result";
}

}
