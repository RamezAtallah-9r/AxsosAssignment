# Ninja Gold

A Spring Boot MVC web application where players explore different locations to find gold. Players can choose to visit safe zones with guaranteed small payouts or take high-stakes risks for larger rewards, complete with a real-time activity log tracking their history.

---

## Features
* **Session-Based Gold Tracking:** Persistently tracks the player's total gold across requests using `HttpSession`.
* **Risk/Reward Mechanics:** Features four unique locations (Farm, Cave, House, Quest) with distinct min/max gold yields.
* **Dynamic Activity Log:** Displays a running history of actions with conditional text colors indicating wins (green/blue/amber) or losses (red).
* **Responsive Dashboard:** Styled with Tailwind CSS for a clean, modern look.

---

## Tech Stack
* **Backend:** Spring Boot, Java 17, Spring MVC
* **Frontend:** JSP (JavaServer Pages), JSTL (Jakarta Standard Tag Library)
* **Styling:** Tailwind CSS, FontAwesome

---

## Assignment Objectives
* Practice configuring a Spring Boot MVC application.
* Utilize `HttpSession` to store and update stateful user data.
* Implement server-side logic using HTML forms, hidden inputs, and `@RequestParam`.
* Generate randomized range values dynamically in Java.
* Render dynamic arrays and conditional styling using JSTL core tags (`<c:forEach>`, `<c:if>`).

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/ninja-gold.git](https://github.com/yourusername/ninja-gold.git)
   cd ninja-gold
   ```

2. **Open the project:**
   * Import the project into your preferred IDE (STS, IntelliJ IDEA, or Eclipse) as an existing Maven project.

3. **Update dependencies:**
   * Allow Maven to download and build all required dependencies.

4. **Run the application:**
   * Run `NinjaGoldApplication.java` as a Spring Boot Application, or execute the following command in your terminal:
   ```bash
   mvn spring-boot:run
   ```

5. **Access the app:**
   * Open your browser and navigate to: `http://localhost:8080`

---

## Configuration

### application.properties
Configure the Spring Internal Resource View Resolver to look for JSP files inside the standard secure directory structure:

```properties
spring.mvc.view.prefix=/WEB-INF/
spring.mvc.view.suffix=.jsp
```

### Dependencies
The project uses the following key dependencies in `pom.xml` to support Spring Web, embedded Tomcat compilation, and Jakarta JSTL processing:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-jasper</artifactId>
    <scope>provided</scope>
</dependency>

<dependency>
    <groupId>jakarta.servlet.jsp.jstl</groupId>
    <artifactId>jakarta.servlet.jsp.jstl-api</artifactId>
    <version>3.0.0</version>
</dependency>
<dependency>
    <groupId>org.glassfish.web</groupId>
    <artifactId>jakarta.servlet.jsp.jstl</artifactId>
    <version>3.0.1</version>
</dependency>
```

---

## Folder Structure

```text
NinjaGold
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── axsos
│   │   │           └── SpringBoot
│   │   │               └── NinjaGold
│   │   │                   ├── NinjaGoldApplication.java
│   │   │                   └── NinjaController.java
│   │   ├── resources
│   │   │   └── application.properties
│   │   └── webapp
│   │       └── WEB-INF
│   │           └── index.jsp
│   └── test
├── pom.xml
└── README.md
```

---

## Project Workflow

```text
User
  │
  ▼
Clicks "Find Gold" or "Take Risk" Button
  │
  ▼
POST Form submitted with hidden 'location' parameter
  │
  ▼
NinjaController (@PostMapping("/gold"))
  │
  ▼
Generates random gold amount & appends text/color to tracking lists
  │
  ▼
Updates variables in HttpSession
  │
  ▼
Controller issues a "redirect:/" to clear form state
  │
  ▼
GET Route ("/") reads current Session state
  │
  ▼
index.jsp processes lists via JSTL and renders the updated view
```

---

## Core Libraries & Prebuilt Methods

### Required Package Imports
The following core Java and Spring Framework libraries are imported to handle state, random generations, data sets, and routing web traffic:

```java
// Spring MVC Routing Dependencies
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

// Session and Data Architecture Imports
import jakarta.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Random;
```

### Prebuilt Methods Used
* `HttpSession.getAttribute(String name)`: Retrieves existing user data stored from previous requests.
* `HttpSession.setAttribute(String name, Object value)`: Saves updated game state arrays and values to memory.
* `Random.nextInt(int origin, int bound)`: Standard randomizer method to calculate random gold yields within specific bounds (inclusive of origin, exclusive of bound).
* `ArrayList.add(int index, E element)`: Inserts a new log entry at index `0` to keep recent history at the top of the feed.
* `String.equals(Object obj)`: Compares the values of text strings reliably instead of checking memory reference locations (`==`).
* `Math.abs(int a)`: Removes negative signs from integers to present clean "lost X gold" messaging layout logs.

---

## Architecture & Routing

### GET /
* **Description:** Initializes the game state if a session does not exist (sets gold to `0` and creates empty activity arrays). Renders the main dashboard view.
* **Controller Implementation:** Maps to `public String index(HttpSession session)` and returns `"index"`.

### POST /gold
* **Description:** Extracts the form submission payload, processes location rules, updates gold amounts, and prepends historical data string/color values to session arrays.
* **Parameters:** `@RequestParam("location") String location`
* **Logic Summary:**
  * **farm:** Adds 10–20 gold
  * **cave:** Adds 5–10 gold
  * **house:** Adds 2–5 gold
  * **quest:** Adds or removes 0–50 gold

---

## JSP & JSTL Implementation

The template leverages JSTL core tags to process and display backend state data dynamically:

* **Tag Declaration Header:**
  ```jsp
  <%@ taglib prefix="c" uri="jakarta.tags.core" %>
  ```
* **`<c:forEach>` with `varStatus`:** Used to iterate through the text log list and synchronously reference individual indices inside the secondary color tracking list.
* **`<c:out>`:** Escapes and prints text logs onto the template layout to mitigate script injection vectors.
* **`<c:if>`:** Conditional fallback structural rule displaying a placeholder prompt if the tracking array list contains no elements.

```jsp
<c:forEach var="activity" items="${activities}" varStatus="status">
    <li class="${colors[status.index]}">
        &gt; <c:out value="${activity}" />
    </li>
</c:forEach>
```

---

## Screenshots

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Activity Log
![Activity Log](screenshots/game.png)

---

## Common Errors & Fixes

* **404 Page Not Found:** Ensure `@Controller` is declared on your routing class and that package scanning path alignments match your main Application class file root location.
* **400 Bad Request:** Verify that the HTML `<input name="...">` spelling and casing match your controller's `@RequestParam("...")` target precisely.
* **JSP Elements Blank / Raw Text Output:** Double-check that your JSP template includes the `<%@ taglib ... %>` import directive on line 1, and ensure the Jasper compiler dependency is active in `pom.xml`.
* **Logic Skips Target Blocks:** Ensure you use `.equals()` instead of identity comparison operators (`==`) to safely compare incoming string objects inside Java.

---

## Learning Outcomes
* Configured context-aware routing structures using Spring MVC controllers.
* Evaluated object reference equality differences in Java string comparisons.
* Managed transient client session states safely inside an `HttpSession` instance.
* Structured relational JSTL render iteration schemes to process multi-array inputs concurrently.
```