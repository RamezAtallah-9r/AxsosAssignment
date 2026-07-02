package com.axsos.SpringBoot.NinjaGold;

import java.util.ArrayList;
import java.util.Random;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import jakarta.servlet.http.HttpSession;

@Controller
public class NinjaController {

    @RequestMapping("/")
    public String index(HttpSession session) {
        // Initialize Gold
        Integer gold = (Integer) session.getAttribute("gold");
        if (gold == null) {
            gold = 0;
            session.setAttribute("gold", gold);
        }

        // Initialize Activities List
        if (session.getAttribute("activities") == null) {
            session.setAttribute("activities", new ArrayList<String>());
        }

        // Initialize Colors List
        if (session.getAttribute("colors") == null) {
            session.setAttribute("colors", new ArrayList<String>());
        }
        
        return "index";
    }
	
    @PostMapping("/gold")
    public String countGold(HttpSession session, @RequestParam String location) {
        Integer gold = (Integer) session.getAttribute("gold");
        if (gold == null) gold = 0;

        // Retrieve existing session arrays (lists)
        ArrayList<String> activities = (ArrayList<String>) session.getAttribute("activities");
        ArrayList<String> colors = (ArrayList<String>) session.getAttribute("colors");

        Random rand = new Random();
        int earned = 0;
        String message = "";
        String color = "";

        if ("farm".equals(location)) {
            earned = rand.nextInt(10, 21);
            message = "You entered a farm and earned " + earned + " gold.";
            color = "text-emerald-400"; // Green for win
        } 
        else if ("cave".equals(location)) {
            earned = rand.nextInt(5, 11);
            message = "You entered a cave and earned " + earned + " gold.";
            color = "text-cyan-400"; // Blue/Cyan for win
        } 
        else if ("house".equals(location)) {
            earned = rand.nextInt(2, 6);
            message = "You entered a house and earned " + earned + " gold.";
            color = "text-amber-400"; // Amber for win
        } 
        else { // quest
            earned = rand.nextInt(-50, 51);
            if (earned >= 0) {
                message = "You completed a quest and earned " + earned + " gold!";
                color = "text-emerald-400";
            } else {
                message = "You failed a quest and lost " + Math.abs(earned) + " gold... Ouch.";
                color = "text-rose-400"; // Red for loss
            }
        }

        // Apply game math & update session
        gold += earned;
        session.setAttribute("gold", gold);

        // Add to history arrays (Add at index 0 so newest messages appear at the top!)
        activities.add(0, message);
        colors.add(0, color);
        
        session.setAttribute("activities", activities);
        session.setAttribute("colors", colors);

        return "redirect:/";
    }
}