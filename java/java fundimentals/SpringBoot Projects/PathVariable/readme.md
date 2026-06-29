# Daikichi Routes – Path Variables Assignment

---

# Project Title

**Daikichi Routes – Dynamic URLs Using @PathVariable**

---

# Project Overview

This assignment extends the previous **Routes Project** by introducing **dynamic URLs** using Spring Boot's `@PathVariable`.

Previously, routes were static:

```plaintext
/daikichi
/daikichi/today
/daikichi/tomorrow
```

Now users can send information directly inside the URL path.

Examples:

```plaintext
/daikichi/travel/kyoto
/daikichi/lotto/8
```

The server extracts values from the URL and generates a dynamic response.

---

# Assignment Objective

Practice:

* URL Routing
* Dynamic Routes
* `@RequestMapping`
* `@PathVariable`
* Conditional Statements
* Handling String and Integer path values

---

# Required Routes

| URL                      | Output                                                                   |
| ------------------------ | ------------------------------------------------------------------------ |
| `/daikichi`              | Welcome!                                                                 |
| `/daikichi/today`        | Today you will find luck in all your endeavors!                          |
| `/daikichi/tomorrow`     | Tomorrow, an opportunity will arise, so be sure to be open to new ideas! |
| `/daikichi/travel/kyoto` | Congratulations! You will soon travel to kyoto!                          |
| `/daikichi/lotto/8`      | Journey fortune                                                          |
| `/daikichi/lotto/5`      | Family fortune                                                           |

---

# Step 1 — Required Imports

Inside `DaikichiController.java`

```java
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
```

---

# Imports Explanation

## @RestController

```java
@RestController
```

Purpose:

* Converts class into REST controller.
* Returns plain text.

---

## @RequestMapping

```java
@RequestMapping
```

Purpose:

Maps browser URL to method.

Example:

```java
@RequestMapping("/today")
```

Meaning:

```plaintext
localhost:8080/today
```

Triggers that method.

---

## @PathVariable

```java
@PathVariable
```

Purpose:

Extract values directly from URL.

Example:

URL:

```plaintext
localhost:8080/daikichi/travel/kyoto
```

Extracted:

```java
@PathVariable("city")
String city
```

Result:

```plaintext
city = "kyoto"
```

---

# Step 2 — Project Structure

```plaintext
src
└── main
    └── java
        └── com.axsos.routes
            │
            ├── RoutesApplication.java
            │
            └── controllers
                └── DaikichiController.java
```

---

# Step 3 — Controller Code

File:

```plaintext
DaikichiController.java
```

Code:

```java
package com.axsos.routes.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/daikichi")
public class DaikichiController {

    @RequestMapping("")
    public String welcome() {
        return "Welcome!";
    }


    @RequestMapping("/today")
    public String today() {

        return "Today you will find luck in all your endeavors!";
    }


    @RequestMapping("/tomorrow")
    public String tomorrow() {

        return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas!";
    }


    @RequestMapping("/travel/{city}")
    public String travel(
            @PathVariable("city")
            String city
    ) {

        return "Congratulations! You will soon travel to "
                + city + "!";

    }


    @RequestMapping("/lotto/{number}")
    public String lotto(
            @PathVariable("number")
            int number
    ) {

        if(number % 2 == 0){

            return "You will take a grand journey in the near future but be wary of tempting offers.";

        }

        return "You have enjoyed the fruits of your labor, but now is a great time to spend time with family and friends.";

    }

}
```

---

# Complete Code Explanation

---

# Class

```java
public class DaikichiController
```

Purpose:

Stores all route methods.

---

# Class Annotation

```java
@RequestMapping("/daikichi")
```

Purpose:

Creates common route prefix.

Result:

```plaintext
localhost:8080/daikichi
```

---

# Method 1 — welcome()

```java
public String welcome()
```

Route:

```plaintext
/daikichi
```

Returns:

```plaintext
Welcome!
```

---

# Method 2 — today()

Route:

```plaintext
/daikichi/today
```

Returns:

```plaintext
Today you will find luck in all your endeavors!
```

---

# Method 3 — tomorrow()

Route:

```plaintext
/daikichi/tomorrow
```

Returns:

```plaintext
Tomorrow, an opportunity will arise...
```

---

# Method 4 — travel()

```java
public String travel(
@PathVariable String city
)
```

Input:

```plaintext
travel/kyoto
```

Stored:

```plaintext
city = kyoto
```

Returns:

```plaintext
Congratulations! You will soon travel to kyoto!
```

Purpose:

Creates dynamic message from URL.

---

# Method 5 — lotto()

```java
public String lotto(
@PathVariable int number
)
```

Input:

```plaintext
lotto/8
```

Logic:

```plaintext
If even → Journey message
If odd → Family message
```

Operator:

```java
number % 2
```

Meaning:

Checks if number is even or odd.

---

# Variables Used

| Variable | Type   | Purpose                |
| -------- | ------ | ---------------------- |
| city     | String | Stores travel location |
| number   | int    | Stores lotto value     |

---

# Step 4 — Run Application

```plaintext
Run As
→ Spring Boot App
```

Console:

```plaintext
Tomcat started on port(s): 8080
```

---

# Step 5 — Test URLs

Welcome:

```plaintext
localhost:8080/daikichi
```

---

Today:

```plaintext
localhost:8080/daikichi/today
```

---

Tomorrow:

```plaintext
localhost:8080/daikichi/tomorrow
```

---

Travel:

```plaintext
localhost:8080/daikichi/travel/kyoto
```

Output:

```plaintext
Congratulations! You will soon travel to kyoto!
```

---

Lotto (Even):

```plaintext
localhost:8080/daikichi/lotto/8
```

Output:

```plaintext
You will take a grand journey...
```

---

Lotto (Odd):

```plaintext
localhost:8080/daikichi/lotto/5
```

Output:

```plaintext
You have enjoyed the fruits...
```

---

# Concepts Learned

* Static Routes
* Dynamic Routes
* URL Path Variables
* `@PathVariable`
* `@RequestMapping`
* Conditional Logic
* Spring Boot Controllers

---

# Final Result

This application demonstrates how Spring Boot extracts values directly from URLs using `@PathVariable` and generates dynamic responses based on user input.
