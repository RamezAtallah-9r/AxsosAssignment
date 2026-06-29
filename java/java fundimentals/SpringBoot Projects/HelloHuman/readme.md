# Hello Human – Spring Boot Greeting Assignment

---

# Project Title

**Hello Human – Dynamic Greeting Web Application**

---

# Project Overview

This Spring Boot project demonstrates how to use **URL Query Parameters** to dynamically generate greetings in the browser.

The application returns plain text responses based on user input from the URL.

### Features:

* Default greeting: `Human`
* Custom first name support
* Optional last name support
* Repeat greeting multiple times using `times` parameter

---

# Assignment Goal

Build a web application that:

* Displays `"Welcome Human"` if no name is provided
* Displays `"Welcome Khoa"` if a first name is provided
* Displays `"Welcome John Doe"` if both first and last name are provided
* Repeats the greeting based on `times` parameter

---

# Example URLs

| URL                             | Output                                 |
| ------------------------------- | -------------------------------------- |
| `/`                             | Welcome Human                          |
| `/?FirstName=Khoa`              | Welcome Khoa                           |
| `/?FirstName=John&LastName=Doe` | Welcome John Doe                       |
| `/?FirstName=John&Times=3`      | Welcome John Welcome John Welcome John |

---

# Project Structure

```plaintext
src
└── main
    └── java
        └── com.axsos.SpringBoot.HelloHuman
            ├── HelloHumanApplication.java
            └── GreetingController.java
```

---

# Imports Used

```java
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
```

---

# Imports Explanation

## @RestController

Marks this class as a REST controller.

### Job:

* Handles HTTP requests
* Returns raw text (not HTML)

---

## @RequestMapping

Maps HTTP requests to specific methods.

### Example:

```java
@RequestMapping("/")
```

### Meaning:

When user visits:

```
localhost:8080/
```

This method runs.

---

## @RequestParam

Reads values from URL query string.

### Example:

```
?FirstName=Khoa
```

Maps into:

```java
@RequestParam(value="FirstName")
```

---

# Controller Class

```java
@RestController
public class GreetingController
```

### Purpose:

Handles all greeting-related requests.

---

# Constructor

```java
public GreetingController() { }
```

### Purpose:

* Default constructor
* Not required, but automatically created by Spring
* Can be used for dependency injection if needed

---

# Main Method

```java
@RequestMapping("/")
public String hello(...)
```

### Route:

```
http://localhost:8080/
```

---

# Parameters Explanation

---

## 1. FirstName

```java
@RequestParam(value = "FirstName", defaultValue = "Human")
String fname
```

### Purpose:

Stores user’s first name.

### Behavior:

* If not provided → defaults to `"Human"`
* Example:

```
?FirstName=Khoa → fname = Khoa
```

---

## 2. LastName

```java
@RequestParam(value = "LastName", required = false)
String lname
```

### Purpose:

Stores optional last name.

### Behavior:

* Can be null
* Checked safely before use

---

## 3. Times

```java
@RequestParam(value = "Times", defaultValue = "1")
int times
```

### Purpose:

Controls how many times greeting repeats.

### Default:

* 1 if not provided

---

# Core Logic Explanation

## StringBuilder

```java
StringBuilder greeting = new StringBuilder();
```

### Why used:

* More efficient than String concatenation
* Good for loops

---

## Loop Logic

```java
for (int i = 0; i < times; i++)
```

### Purpose:

Repeats greeting based on user input.

---

## Greeting Construction

```java
greeting.append("Welcome ").append(fname);
```

### Output example:

```
Welcome John
```

---

## Last Name Check

```java
if (lname != null && !lname.trim().isEmpty())
```

### Purpose:

Ensures:

* No null error
* No empty spaces added

### Adds:

```
Welcome John Doe
```

---

## Separator Logic

```java
if (i < times - 1)
```

### Purpose:

Adds space between repeated greetings.

---

# Variables Used

| Variable | Type          | Purpose                    |
| -------- | ------------- | -------------------------- |
| fname    | String        | First name input           |
| lname    | String        | Last name input (optional) |
| times    | int           | Number of repetitions      |
| greeting | StringBuilder | Builds final output        |

---

# Output Examples

## Default

```
/
→ Welcome Human
```

---

## First Name Only

```
?FirstName=Khoa
→ Welcome Khoa
```

---

## Full Name

```
?FirstName=John&LastName=Doe
→ Welcome John Doe
```

---

## Multiple Times

```
?FirstName=John&Times=3
→ Welcome John Welcome John Welcome John
```

---

# Concepts Learned

* Spring Boot REST Controllers
* Query Parameters
* Default Values
* Optional Parameters
* StringBuilder optimization
* Looping in Java
* Input validation

---

# Final Result

This project successfully demonstrates how a Spring Boot application can dynamically generate responses based on URL input, including optional parameters and repeated output behavior.
