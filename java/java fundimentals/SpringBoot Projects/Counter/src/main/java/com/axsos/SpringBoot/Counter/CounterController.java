package com.axsos.SpringBoot.Counter;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import jakarta.servlet.http.HttpSession;

@Controller
public class CounterController {

    public CounterController() {
        // Constructor
    }

    @RequestMapping("/")
    public String index(HttpSession session) {
        // 1. Retrieve as Integer object (can be null)
        Integer count = (Integer) session.getAttribute("visits");
        
        // 2. If it doesn't exist, initialize it to 0
        if (count == null) {
            count = 0;
        }
        
        // 3. Increment the count
        count++;
        
        // 4. Save it back to the session
        session.setAttribute("visits", count);
        
        return "index";
    }

    @RequestMapping("/counter")
    public String counter(HttpSession session) {
        // If the user goes straight to /counter without visiting index,
        // initialize it to 0 so the JSP doesn't show a blank value.
        if (session.getAttribute("visits") == null) {
            session.setAttribute("visits", 0);
        }
        return "counter";
    }
}
