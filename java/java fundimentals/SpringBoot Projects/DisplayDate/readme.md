# 📅 DisplayDate — Spring Boot MVC Date & Time Dashboard

A clean Spring Boot MVC web application that displays the current **date** and **time** using JSTL formatting tags. Built as a learning project at AXSOS Academy to practice JSP templating, JSTL tag libraries, controller routing, and frontend integration with Tailwind CSS.

---

## ✨ Features

- **Dashboard page** with side-by-side navigation links styled with Tailwind CSS
- **Date page** displaying the current date formatted via `fmt:formatDate`
- **Time page** displaying the current time formatted via `fmt:formatDate`
- **JavaScript alerts** triggered on page load for each template page
- **External CSS & JS** files kept separate from JSP views
- **Responsive UI** built with Tailwind CSS CDN + Font Awesome icons
- **Clean MVC separation** — controller, views, and static assets clearly divided

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Java 17, Spring Boot 4.1.0 |
| MVC | Spring Web MVC (`@Controller`, `@RequestMapping`) |
| View Engine | JSP + JSTL (Jakarta EE) |
| Styling | Tailwind CSS (CDN), Font Awesome |
| Scripting | Vanilla JavaScript (external file) |
| Build Tool | Apache Maven |
| Packaging | WAR (deployed via embedded Tomcat) |

---

## 📁 Project Structure

```
DisplayDate/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/axsos/SpringBoot/DisplayDate/
│       │       ├── DisplayDateApplication.java   # Spring Boot entry point
│       │       └── DisplayDateController.java    # MVC controller
│       ├── resources/
│       │   └── application.properties            # JSP prefix/suffix config
│       └── webapp/
│           ├── WEB-INF/
│           │   └── views/
│           │       ├── index.jsp                 # Dashboard page
│           │       ├── date.jsp                  # Date template page
│           │       └── time.jsp                  # Time template page
│           └── js/
│               └── script.js                     # External JavaScript file
├── pom.xml
└── README.md
```

---

## ⚙️ Setup & Installation

### Prerequisites

- Java 17+
- Maven 3.8+
- Any IDE (IntelliJ IDEA, Eclipse, VS Code)

### 1. Create the Spring Boot Project

Go to [https://start.spring.io](https://start.spring.io) and configure:

- **Project:** Maven
- **Language:** Java
- **Spring Boot:** 4.1.0
- **Packaging:** WAR
- **Java:** 17
- **Dependencies:** Spring Web

### 2. Clone & Run

```bash
git clone https://github.com/your-username/DisplayDate.git
cd DisplayDate
mvn spring-boot:run
```

Visit: [http://localhost:8080](http://localhost:8080)

---

## 📦 Dependencies (pom.xml)

```xml
<!-- Spring MVC core -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webmvc</artifactId>
</dependency>

<!-- Embedded Tomcat for JSP rendering -->
<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-jasper</artifactId>
</dependency>

<!-- JSTL API and implementation -->
<dependency>
    <groupId>jakarta.servlet.jsp.jstl</groupId>
    <artifactId>jakarta.servlet.jsp.jstl-api</artifactId>
</dependency>
<dependency>
    <groupId>org.glassfish.web</groupId>
    <artifactId>jakarta.servlet.jsp.jstl</artifactId>
</dependency>
```

> `tomcat-embed-jasper` is required for Spring Boot to render `.jsp` files. Without it, views return a 404.

---

## 🔧 Configuration

### `application.properties`

```properties
spring.mvc.view.prefix=/WEB-INF/views/
spring.mvc.view.suffix=.jsp
```

This tells Spring MVC to look for JSP files inside `WEB-INF/views/` and append `.jsp` to the view name returned by the controller.

---

## 🎮 Controllers

### `DisplayDateController.java`

```java
@Controller
public class DisplayDateController {

    @RequestMapping("")
    public String index() {
        return "index";   // → /WEB-INF/views/index.jsp
    }

    @RequestMapping("/date")
    public String date() {
        return "date";    // → /WEB-INF/views/date.jsp
    }

    @RequestMapping("/time")
    public String time() {
        return "time";    // → /WEB-INF/views/time.jsp
    }
}
```

| Annotation | Purpose |
|---|---|
| `@Controller` | Marks this class as a Spring MVC controller that returns view names |
| `@RequestMapping` | Maps HTTP requests to handler methods by URL path |

---

## 📄 JSP Pages

All JSP files live in `src/main/webapp/WEB-INF/views/` — this location is intentional. Files inside `WEB-INF` are not directly accessible via URL, which forces all access to go through the controller.

| File | Route | Description |
|---|---|---|
| `index.jsp` | `/` | Dashboard with two navigation buttons side by side |
| `date.jsp` | `/date` | Displays the current date; triggers `dateAlert()` on load |
| `time.jsp` | `/time` | Displays the current time; triggers `timeAlert()` on load |

### Example: Date page view

```jsp
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>

<c:set var="now" value="<%=new java.util.Date()%>" />

<fmt:formatDate type="date" value="${now}" />
```

---

## 🏷️ JSTL Tags Used

| Tag | Library | Purpose |
|---|---|---|
| `<c:set>` | Core (`c`) | Creates a scoped variable (`now`) holding the current `Date` object |
| `<fmt:formatDate>` | Formatting (`fmt`) | Formats a `Date` value for display — `type="date"` shows date only, `type="time"` shows time only |

### Taglib declarations required in each JSP:

```jsp
<%@ taglib prefix="c"   uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>
```

---

## 🌐 JavaScript & CSS

### External JavaScript (`webapp/js/script.js`)

```javascript
function dateAlert() {
    alert("this is the date template");
}

function timeAlert() {
    alert("this is the time template");
}
```

Each alert function is called via the JSP `<body onload="...">` attribute, firing automatically when the page loads.

### Styling

Tailwind CSS is loaded via CDN — no build step required. The dashboard uses `flex` and `gap` utilities to place both navigation buttons on the same line, satisfying the wireframe requirement for inline links.

---

## 🔄 Application Flow

```
Browser Request
      │
      ▼
DispatcherServlet (Spring MVC)
      │
      ▼
DisplayDateController
  ├── GET /       → returns "index"  → index.jsp (Dashboard)
  ├── GET /date   → returns "date"   → date.jsp  (c:set + fmt:formatDate type="date")
  └── GET /time   → returns "time"   → time.jsp  (c:set + fmt:formatDate type="time")
      │
      ▼
JSP rendered by Tomcat Jasper → HTML sent to browser
```

---

## 🗺️ Example Routes

| Method | URL | Result |
|---|---|---|
| GET | `http://localhost:8080/` | Dashboard with Date & Time links |
| GET | `http://localhost:8080/date` | Current date + alert popup |
| GET | `http://localhost:8080/time` | Current time + alert popup |

---

## 🐛 Common Errors & Fixes

| Error | Cause | Fix |
|---|---|---|
| `Whitelabel Error Page` on JSP route | Missing `tomcat-embed-jasper` | Add it to `pom.xml` |
| `javax.servlet.jsp.JspException: No tag library found` | Wrong JSTL URI | Use `jakarta.tags.core` / `jakarta.tags.fmt` for Jakarta EE |
| JSP file not found | Wrong view path | Ensure files are in `src/main/webapp/WEB-INF/views/` |
| `script.js` not loading | Wrong static path | Place JS in `src/main/webapp/js/` and reference as `js/script.js` |
| Date shows epoch or null | `c:set` scriptlet not evaluated | Use `value="<%=new java.util.Date()%>"` — EL alone can't call Java constructors |

---

## 🎓 Learning Outcomes

- Configured Spring Boot MVC with JSP and JSTL from scratch
- Understood the role of `WEB-INF` in protecting view files from direct browser access
- Used `fmt:formatDate` to format server-side dates without writing Java in the view
- Separated concerns by externalizing JavaScript and CSS from JSP templates
- Applied `@Controller` and `@RequestMapping` to map URLs to view names

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

*Built with ☕ Java + 🌱 Spring Boot — AXSOS Academy Bootcamp*