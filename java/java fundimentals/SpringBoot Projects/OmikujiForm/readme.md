# 🍀 Omikuji Fortune Generator — Spring Boot MVC Web Application

A dynamic **Spring Boot MVC web application** that generates personalized **Omikuji fortunes** based on user input.

Users complete a fortune form and receive a customized prediction generated from their answers. The application demonstrates **Spring MVC routing, JSP rendering, JSTL templating, form handling, session-ready architecture, and clean UI design using Tailwind CSS.**

---

## 📌 Project Overview

Omikuji (おみくじ) are traditional Japanese fortune papers that predict future outcomes.

This project recreates that experience digitally by allowing users to submit answers through a form and receive a personalized fortune generated dynamically.

The application focuses on learning:

* Spring Boot MVC architecture
* Request mapping and routing
* Form handling using `@RequestParam`
* Dynamic JSP rendering
* JSTL integration
* UI development using Tailwind CSS

---

# ✨ Features

* 🍀 Generate personalized Omikuji fortunes
* 📝 Interactive user input form
* 🔄 Dynamic rendering using JSP + JSTL
* 🚦 Spring MVC routing
* 🎨 Responsive UI with Tailwind CSS
* 📄 Fortune result page generation
* ⚡ Form submission using POST requests
* 🧩 Modular MVC structure

---

# 🧰 Tech Stack

| Layer        | Technology      |
| ------------ | --------------- |
| Backend      | Spring Boot 4   |
| Architecture | MVC             |
| Language     | Java 17         |
| Frontend     | JSP             |
| Templating   | JSTL            |
| Styling      | Tailwind CSS    |
| Build Tool   | Maven           |
| Server       | Embedded Tomcat |
| Packaging    | WAR             |

---

# 📁 Project Structure

```plaintext
OmikujiForm
│
├── src
│   └── main
│       ├── java
│       │   └── com
│       │       └── axsos
│       │           └── SpringBoot
│       │               └── OmikujiForm
│       │                   └── OmikujiController.java
│       │
│       ├── webapp
│       │   ├── WEB-INF
│       │   │   ├── index.jsp
│       │   │   └── result.jsp
│       │   │
│       │   └── static
│       │
│       └── resources
│           └── application.properties
│
├── pom.xml
└── README.md
```

---

# 🚀 Getting Started

## Prerequisites

Install:

* Java 17+
* Maven 3+
* Spring Tool Suite / IntelliJ
* Git

---

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/OmikujiForm.git
```

Move into project:

```bash
cd OmikujiForm
```

---

## Run Application

Build:

```bash
mvn clean install
```

Start:

```bash
mvn spring-boot:run
```

Open:

```plaintext
http://localhost:8080
```

---

# ⚙️ Configuration

## application.properties

```properties
spring.mvc.view.prefix=/WEB-INF/
spring.mvc.view.suffix=.jsp
```

### Explanation

| Property | Purpose                      |
| -------- | ---------------------------- |
| prefix   | Location of JSP files        |
| suffix   | Automatically appends `.jsp` |

---

# 📦 Dependencies (pom.xml)

## Spring Web

```xml
<dependency>
 <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

Provides:

* MVC
* Controllers
* Embedded server

---

## JSP Engine

```xml
<dependency>
 <groupId>org.apache.tomcat.embed</groupId>
 <artifactId>tomcat-embed-jasper</artifactId>
</dependency>
```

Responsible for:

* Compiling JSP pages
* Rendering views

---

## JSTL

```xml
<dependency>
 <groupId>jakarta.servlet.jsp.jstl</groupId>
 <artifactId>jakarta.servlet.jsp.jstl-api</artifactId>
</dependency>
```

Provides:

* `c:set`
* `c:if`
* `c:forEach`
* `fmt:*`

---

# 🧭 Controller Explanation

## OmikujiController

```java
@Controller
public class OmikujiController {

@RequestMapping("")
public String index(){
return "index";
}

@PostMapping("/result")
public String result(...){
return "result";
}

}
```

---

## Routes

| Route         | Method | Purpose                   |
| ------------- | ------ | ------------------------- |
| `/`           | GET    | Display Omikuji form      |
| `/result`     | POST   | Process form              |
| `/result.jsp` | View   | Display generated fortune |

---

## Annotation Breakdown

### `@Controller`

Marks the class as MVC controller.

---

### `@RequestMapping`

Maps URL requests.

Example:

```java
@RequestMapping("")
```

Loads:

```plaintext
localhost:8080/
```

---

### `@PostMapping`

Processes submitted forms.

Example:

```java
@PostMapping("/result")
```

---

# 🧩 Model Handling

This project currently does not use a dedicated model class.

Data is transferred using:

```java
@RequestParam
```

and injected into:

```java
Model
```

Example:

```java
model.addAttribute("city", city);
```

---

# 📄 JSP Pages

---

## index.jsp

Main Omikuji input form.

Collects:

* Number
* City
* Person
* Hobby
* Creature
* Message

Submits:

```html
<form action="/result" method="post">
```

---

## result.jsp

Displays generated fortune.

Example output:

```plaintext
In 10 years,
you will live in Tokyo
with Alex as your roommate,
doing Software Engineering.

The next time you see a Cat,
you will have good luck.

Also:
"Keep believing in yourself."
```

---

# 🏷️ JSTL Tags Used

---

## Core Library

Import:

```jsp
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
```

---

## `c:out`

Safely prints values.

Example:

```jsp
<c:out value="${city}" />
```

---

## `fmt`

Formatting utilities.

Import:

```jsp
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
```

---

## `fn`

JSTL utility functions.

Example:

```jsp
fn:length()
```

---

# 🎨 Frontend Design

## Tailwind CSS

Used for:

* Layout
* Buttons
* Typography
* Responsive design

Imported via CDN:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

---

# 🔄 Application Flow

```plaintext
User
 ↓
Open Homepage
 ↓
Fill Omikuji Form
 ↓
Submit Form
 ↓
POST /result
 ↓
Controller Processes Input
 ↓
Model Stores Attributes
 ↓
result.jsp Renders Fortune
 ↓
User Receives Fortune
```

---

# 🌐 Example Usage

Input:

```plaintext
Number: 10
City: Tokyo
Person: John
Hobby: Programming
Creature: Fox
Message: Stay curious
```

Output:

```plaintext
In 10 years,
you will live in Tokyo
with John as your roommate,
doing Programming.

The next time you see a Fox,
you will have good luck.

Also:
Stay curious
```

---

# ❗ Common Errors & Fixes

## JSP Not Loading

### Fix

```properties
spring.mvc.view.prefix=/WEB-INF/
spring.mvc.view.suffix=.jsp
```

---

## JSTL Tags Not Working

Install:

```plaintext
jakarta.servlet.jsp.jstl
```

---

## HTTP 404

Verify:

```java
@RequestMapping("")
```

---

## Form Data Empty

Verify:

```html
name=""
```

matches:

```java
@RequestParam
```

---

# 🧪 Future Improvements

* Session storage support
* Form validation
* `@ModelAttribute`
* Database integration
* Multiple fortune templates
* User history
* Randomized fortune generation

---

# 🎓 Learning Outcomes

After completing this project you will understand:

* MVC pattern
* Spring Controllers
* JSP rendering
* JSTL usage
* Form processing
* Dynamic templates
* HTTP request lifecycle

---

# 🤝 Contributing

Contributions are welcome.

Steps:

```bash
Fork
→ Clone
→ Create Branch
→ Commit
→ Push
→ Open Pull Request
```

---

# 📜 License

Licensed under the MIT License.

---

# 👨‍💻 Author

Built as part of Spring Boot MVC training and JSP/JSTL practice.

If this project helped you, consider giving the repository a ⭐
