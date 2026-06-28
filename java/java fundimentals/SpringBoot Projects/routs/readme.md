# Fortune Website – Spring Boot Routing Assignment

## Project Title

**Daikichi Fortune Website – Spring Boot Routes Practice**

---

# Project Overview

This project is a beginner-level Spring Boot web application that demonstrates how to create and manage URL routes using **Spring Boot Controllers**.

The application returns different text messages depending on which URL path the user enters into the browser.

This assignment focuses on understanding:

* Spring Boot project structure
* Controllers
* HTTP GET requests
* Class-level routing
* Method-level routing
* `@RestController`
* `@RequestMapping`

---

# Assignment Requirements

Create a website that displays different messages based on the entered URL.

Required URLs:

| URL                                       | Expected Output                                                          |
| ----------------------------------------- | ------------------------------------------------------------------------ |
| `http://localhost:8080/daikichi`          | Welcome!                                                                 |
| `http://localhost:8080/daikichi/today`    | Today you will find luck in all your endeavors!                          |
| `http://localhost:8080/daikichi/tomorrow` | Tomorrow, an opportunity will arise, so be sure to be open to new ideas! |

---

# Step 1 — Create Spring Starter Project

Open **Spring Tool Suite (STS)** or **IntelliJ**.

Create a new project:

```
File
→ New
→ Spring Starter Project
```

Project Settings:

```
Project Name:
daikichi-path-variables

Type:
Maven

Language:
Java

Packaging:
Jar

Java Version:
17
```

Dependencies:

```
Spring Web
```

Click **Finish**

---

# Step 2 — Project Structure

After creation, your project should look like:

```plaintext
daikichi-path-variables
│
├── src
│   └── main
│       ├── java
│       │   └── com.example.daikichi
│       │       │
│       │       ├── DaikichiApplication.java
│       │       │
│       │       └── controllers
│       │            └── DaikichiController.java
│       │
│       └── resources
│           └── application.properties
│
├── pom.xml
└── README.md
```

---

# Step 3 — Imports Needed

Inside `DaikichiController.java`

```java
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
```

### Explanation

### 1. RequestMapping

```java
@RequestMapping
```

Purpose:

* Maps URL paths to Java methods.
* Decides which method runs when a user enters a URL.

Example:

```java
@RequestMapping("/today")
```

Meaning:

When user enters:

```plaintext
localhost:8080/today
```

Run this method.

---

### 2. RestController

```java
@RestController
```

Purpose:

* Marks this class as a controller.
* Sends plain text directly to browser.

Without this annotation:
Spring will search for HTML pages.

---

# Step 4 — Main Application Class

File:

```plaintext
DaikichiApplication.java
```

Code:

```java
package com.example.daikichi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DaikichiApplication {

    public static void main(String[] args) {
        SpringApplication.run(
            DaikichiApplication.class,
            args
        );
    }

}
```

---

# Explanation

## Annotation

```java
@SpringBootApplication
```

Purpose:

Combines:

```java
@Configuration
@EnableAutoConfiguration
@ComponentScan
```

Job:
Starts Spring Boot automatically.

---

## Method

```java
main()
```

Input:

```plaintext
String[] args
```

Output:

```plaintext
void
```

Purpose:
Starts the application.

---

## Function

```java
SpringApplication.run()
```

Parameters:

```java
DaikichiApplication.class
args
```

Returns:

```plaintext
Application Context
```

Purpose:
Launches server.

---

# Step 5 — Create Controller

File:

```plaintext
controllers/DaikichiController.java
```

Code:

```java
package com.example.daikichi.controllers;

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

}
```

---

# Complete Controller Explanation

---

## Class

```java
public class DaikichiController
```

Purpose:
Contains all application routes.

Why use:
Organizes browser requests.

---

## Class Annotation

```java
@RequestMapping("/daikichi")
```

Purpose:
Creates a base URL.

Result:

```plaintext
localhost:8080/daikichi
```

All methods inherit this path.

---

# Method 1

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

Explanation:
Displays greeting message.

---

# Method 2

```java
public String today()
```

Route:

```plaintext
/daikichi/today
```

Returns:

```plaintext
Today you will find luck in all your endeavors!
```

Purpose:
Displays today's fortune.

---

# Method 3

```java
public String tomorrow()
```

Route:

```plaintext
/daikichi/tomorrow
```

Returns:

```plaintext
Tomorrow, an opportunity will arise, so be sure to be open to new ideas!
```

Purpose:
Displays tomorrow's fortune.

---

# Variables Used

This project contains **no custom variables**.

Only:

```java
String
```

Used as return values.

---

# Step 6 — Run Application

Run:

```plaintext
Run As
→ Spring Boot App
```

Console:

```plaintext
Tomcat started on port(s): 8080
```

---

# Step 7 — Test URLs

Open browser:

### Welcome

```plaintext
http://localhost:8080/daikichi
```

Output:

```plaintext
Welcome!
```

---

### Today

```plaintext
http://localhost:8080/daikichi/today
```

Output:

```plaintext
Today you will find luck in all your endeavors!
```

---

### Tomorrow

```plaintext
http://localhost:8080/daikichi/tomorrow
```

Output:

```plaintext
Tomorrow, an opportunity will arise, so be sure to be open to new ideas!
```

---

# Concepts Learned

* Spring Boot
* Controllers
* Routing
* URL Mapping
* REST API Basics
* HTTP GET Requests
* Java Methods
* Annotations
* MVC Pattern

---

# Final Result

The application successfully delivers fortune messages depending on the URL path entered by the user.

Example:

```plaintext
/daikichi
→ Welcome

/daikichi/today
→ Today's Fortune

/daikichi/tomorrow
→ Tomorrow's Fortune
```
