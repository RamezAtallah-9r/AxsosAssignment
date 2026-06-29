# ⏱️ Time Dashboard - Spring Boot Date & Time Display App

[![Java Version](https://img.shields.io/badge/Java-17%2B-blue?logo=openjdk)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen?logo=spring)](https://spring.io/projects/spring-boot)
[![Frontend](https://img.shields.io/badge/Frontend-JSP%20%7C%20Tailwind%20CSS-orange)](#)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A lightweight, production-ready Spring Boot MVC web application that serves as a front-end template system for displaying the current date and time. It features a central dashboard, server-side date formatting via JSTL, and a modern UI built with Tailwind CSS.

---

## 📑 Table of Contents
1. [Project Description](#-project-description)
2. [Features](#-features)
3. [Tech Stack](#-tech-stack)
4. [Project Setup Instructions](#-project-setup-instructions)
5. [Dependencies](#-dependencies-pomxml)
6. [Configuration](#-configuration)
7. [Project Structure](#-project-structure)
8. [Controllers Explanation](#-controllers-explanation)
9. [Models Explanation](#-models-explanation)
10. [JSP Pages Explanation](#-jsp-pages-explanation)
11. [JSTL Tags Used](#-jstl-tags-used)
12. [JavaScript & CSS Usage](#-javascript--css-usage)
13. [How the Application Works](#-how-the-application-works)
14. [Example Routes](#-example-routes)
15. [Common Errors & Fixes](#-common-errors--fixes)
16. [Learning Outcomes](#-learning-outcomes)
17. [License](#-license)

---

## 📖 Project Description
**Time Dashboard** is a simple yet elegant Spring Boot MVC application designed to demonstrate server-side rendering and front-end templating. The application provides a centralized dashboard that links to two distinct templates: one for displaying the current **Date** and another for the current **Time**. 

By utilizing the JSTL (JSP Standard Tag Library) for date formatting and integrating external CSS/JS, this project bridges the gap between backend Java logic and modern, responsive front-end design.

---

## ✨ Features
- 📊 **Centralized Dashboard**: A clean landing page with side-by-side navigation buttons linking to the Date and Time templates.
- 📅 **Server-Side Formatting**: Dynamically formats the current server date and time using JSTL `<fmt:formatDate>`.
- 🎨 **Modern UI**: Styled with Tailwind CSS (via CDN) and FontAwesome icons for a sleek, responsive, and mobile-friendly design.
- ⚡ **Interactive JavaScript**: External JS file triggers custom browser alerts upon loading the specific Date and Time pages.
- 🏗️ **MVC Architecture**: Clean separation of concerns using Spring Boot Controllers and secured JSP views.

---

## 🛠️ Tech Stack
- **Backend**: Java 17, Spring Boot 3.x, Spring Web MVC
- **Frontend**: JSP (JavaServer Pages), JSTL, HTML5
- **Styling & Icons**: Tailwind CSS (CDN), FontAwesome (CDN)
- **Scripting**: Vanilla JavaScript
- **Build Tool**: Apache Maven
- **Server**: Embedded Apache Tomcat

---

## 🚀 Project Setup Instructions

### How to Create the Spring Project
1. Go to [Spring Initializr](https://start.spring.io/).
2. Select **Maven**, **Java 17**, and **Spring Boot 3.x.x**.
3. Add Dependencies: *Spring Web*, *Lombok* (optional), and ensure packaging is set to **WAR** or **JAR** (JAR is fine for embedded Tomcat).
4. Generate, download, and import the project into your IDE.

### Folder Structure & Static Assets
Ensure your JSP files are placed in `src/main/webapp/WEB-INF/views/` and your static assets (like `script.js`) are in `src/main/resources/static/`.

### How to Run the App
```bash
# Clone the repository
git clone https://github.com/yourusername/time-dashboard.git
cd time-dashboard

# Run the application using Maven
./mvnw spring-boot:run

# Or run the main class `DisplayDateApplication.java` directly from your IDE
```
Once started, visit: `http://localhost:8080/`

---

## 📦 Dependencies (pom.xml)
Here is a breakdown of the core dependencies required for this JSP-based Spring Boot application:

```xml
<!-- Spring Boot Web: Includes Spring MVC and embedded Tomcat -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<!-- Tomcat Jasper: Required to compile and render JSP files -->
<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-jasper</artifactId>
    <scope>provided</scope>
</dependency>

<!-- JSTL API and Implementation: Provides standard tags for JSP (Jakarta EE) -->
<dependency>
    <groupId>jakarta.servlet.jsp.jstl</groupId>
    <artifactId>jakarta.servlet.jsp.jstl-api</artifactId>
</dependency>
<dependency>
    <groupId>org.glassfish.web</groupId>
    <artifactId>jakarta.servlet.jsp.jstl</artifactId>
</dependency>
```
*Note: We use the `jakarta.*` namespace dependencies because Spring Boot 3.x migrated to Jakarta EE 9+.*

---

## ⚙️ Configuration
To ensure Spring Boot knows where to find your JSP files, add the following to `src/main/resources/application.properties`:

```properties
# Server Configuration
server.port=8080

# JSP View Resolver Configuration
# Tells Spring where to find JSP files and what extension to use
spring.mvc.view.prefix=/WEB-INF/views/
spring.mvc.view.suffix=.jsp
```

---

## 📂 Project Structure
```text
time-dashboard/
├── src/
│   ├── main/
│   │   ├── java/com/axsos/SpringBoot/DisplayDate/
│   │   │   ├── DisplayDateController.java  # Handles HTTP requests
│   │   │   └── DisplayDateApplication.java # Main entry point
│   │   ├── resources/
│   │   │   ├── static/
│   │   │   │   └── js/
│   │   │   │       └── script.js           # External JavaScript file
│   │   │   └── application.properties      # App configuration
│   │   └── webapp/
│   │       └── WEB-INF/
│   │           └── views/                  # Secured JSP files
│   │               ├── index.jsp           # Dashboard page
│   │               ├── date.jsp            # Date template
│   │               └── time.jsp            # Time template
│   └── test/                               # Unit tests
├── pom.xml                                 # Maven dependencies
└── README.md
```

---

## 🎮 Controllers Explanation
The `DisplayDateController` handles routing for the application. It is kept lightweight because the heavy lifting (date generation) is done in the JSP via JSTL.

```java
package com.axsos.SpringBoot.DisplayDate;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DisplayDateController {

    // Maps to the root URL: http://localhost:8080/
    @RequestMapping("")
    public String index() {
        return "index"; // Resolves to /WEB-INF/views/index.jsp
    }

    // Maps to: http://localhost:8080/date
    @RequestMapping("/date")
    public String date() {
        return "date"; // Resolves to /WEB-INF/views/date.jsp
    }

    // Maps to: http://localhost:8080/time
    @RequestMapping("/time")
    public String time() {
        return "time"; // Resolves to /WEB-INF/views/time.jsp
    }
}
```
- **`@Controller`**: Marks the class as an MVC controller capable of handling web requests and returning view names.
- **`@RequestMapping`**: Maps specific HTTP URL paths to these methods.

---

## 🧱 Models Explanation
This specific application does not require a dedicated Java Model class (like `Task.java` or `User.java`). Instead, it leverages the native `java.util.Date` object directly within the JSP using JSTL to keep the architecture simple and focused on view rendering.

---

## 🖥️ JSP Pages Explanation
All JSP files are securely placed in `src/main/webapp/WEB-INF/views/`. This prevents users from accessing the raw JSP files directly via the browser URL.

- **`index.jsp` (Dashboard)**: The landing page. It uses Tailwind's `flex` utilities to display two navigation buttons ("Date Template" and "Time Template") side-by-side on the same line.
- **`date.jsp` (Date Template)**: Displays the current formatted date. It includes an `onload="dateAlert()"` attribute in the `<body>` tag to trigger a JavaScript alert when the page loads.
- **`time.jsp` (Time Template)**: Displays the current formatted time. Similar to the date page, it triggers `timeAlert()` on page load.

---

## 🏷️ JSTL Tags Used
We use the JSP Standard Tag Library (JSTL) to handle logic and formatting cleanly.

- **`<c:set>`**: Used to capture the current server time into a variable named `now`.
  ```jsp
  <c:set var="now" value="<%=new java.util.Date()%>" />
  ```
- **`<fmt:formatDate>`**: Formats the `now` variable into a readable string. The `type` attribute determines the output format.
  ```jsp
  <!-- In date.jsp -->
  <fmt:formatDate type="date" value="${now}" />
  
  <!-- In time.jsp -->
  <fmt:formatDate type="time" value="${now}" />
  ```

---

## 🎨 JavaScript & CSS Usage
- **CSS (Tailwind CSS)**: Loaded via CDN (`<script src="https://cdn.tailwindcss.com"></script>`). It provides utility classes for layout (`flex`, `gap-8`), colors (`bg-blue-500`, `text-white`), and interactive hover effects (`hover:scale-110`).
- **Icons (FontAwesome)**: Loaded via CDN to render the calendar (`fa-calendar`) and clock (`fa-clock`) icons next to the navigation links.
- **JavaScript**: An external file (`script.js`) is linked at the bottom of the JSP pages. It contains two functions:
  ```javascript
  function dateAlert(){
      alert("this is the date template");
  }
  function timeAlert(){
      alert("this is the time template");
  }
  ```
  These are triggered by the `<body onload="...">` event in their respective JSP files.

---

## 🔄 How the Application Works
1. **Request**: The user navigates to `http://localhost:8080/`.
2. **Controller**: The `DisplayServlet` routes the request to `DisplayDateController.index()`, which returns the string `"index"`.
3. **View Resolution**: Spring's `ViewResolver` maps `"index"` to `/WEB-INF/views/index.jsp`.
4. **Rendering**: The JSP engine processes the file, applying Tailwind styles and rendering the HTML.
5. **Navigation**: The user clicks the "Date Template" button, sending a GET request to `/date`.
6. **JSTL Processing**: `date.jsp` loads. The `<c:set>` tag grabs the server's current time, and `<fmt:formatDate>` formats it.
7. **Client-Side Execution**: The browser receives the HTML, loads the external `script.js`, and the `onload` event triggers the `dateAlert()` popup.

---

## 🛣️ Example Routes
| HTTP Method | Endpoint | Description |
|-------------|----------|-------------|
| `GET`       | `/`      | Displays the main Dashboard with navigation links |
| `GET`       | `/date`  | Displays the Date Template and triggers the date alert |
| `GET`       | `/time`  | Displays the Time Template and triggers the time alert |

---

## 🐛 Common Errors & Fixes
- **Whitelabel Error Page (404) when accessing JSP**:
  *Fix*: Ensure `tomcat-embed-jasper` is in your `pom.xml` and that `spring.mvc.view.prefix` and `suffix` are correctly set in `application.properties`.
- **JSTL Tags Showing as Plain Text or Throwing Errors**:
  *Fix*: Ensure you are using the correct Jakarta EE taglib URIs for Spring Boot 3:
  `<%@ taglib prefix="c" uri="jakarta.tags.core" %>`
  `<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>`
- **CSS or JavaScript Not Loading (404 in Console)**:
  *Fix*: Static files must be placed in `src/main/resources/static/`. If your JS is in `static/js/script.js`, reference it in JSP as `<script src="js/script.js"></script>`.

---

## 🎓 Learning Outcomes
By studying and building this project, developers will master:
- Setting up a **Spring Boot MVC** project with JSP support.
- Configuring the **ViewResolver** to map controller returns to JSP files.
- Utilizing **JSTL** (`<c:set>`, `<fmt:formatDate>`) for server-side data formatting without writing messy Java scriptlets.
- Integrating **external CSS frameworks** (Tailwind) and **JavaScript** files into a Spring Boot JSP application.
- Structuring a clean, secure, and maintainable **MVC folder hierarchy**.

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute it for your own learning or commercial projects.