# Additional Configuration for JSP + JSTL (Required)

---

# 1. pom.xml Dependencies

Open:

```plaintext
pom.xml
```

Inside `<dependencies>` add:

```xml
<!-- Spring Web -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>


<!-- JSP Rendering Engine -->
<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-jasper</artifactId>
</dependency>


<!-- JSTL API -->
<dependency>
    <groupId>jakarta.servlet.jsp.jstl</groupId>
    <artifactId>jakarta.servlet.jsp.jstl-api</artifactId>
</dependency>


<!-- JSTL Implementation -->
<dependency>
    <groupId>org.glassfish.web</groupId>
    <artifactId>jakarta.servlet.jsp.jstl</artifactId>
</dependency>
```

---

# Dependency Explanation

---

## spring-boot-starter-web

Purpose:

Creates Spring MVC application.

Provides:

* Controllers
* Routing
* Embedded Tomcat

---

## tomcat-embed-jasper

Purpose:

Enables:

```plaintext
.jsp
```

files to render.

Without it:

```plaintext
HTTP 404
or
Cannot resolve JSP
```

---

## jakarta.servlet.jsp.jstl-api

Purpose:

Allows using JSP tags:

```jsp
<c:out>
<c:forEach>
<c:if>
```

---

## jakarta.servlet.jsp.jstl

Purpose:

Provides actual JSTL implementation.

Without it:

```plaintext
Unknown tag c:out
```

---

# 2. Configure application.properties

File:

```plaintext
src/main/resources/application.properties
```

Add:

```properties
spring.mvc.view.prefix=/WEB-INF/
```

Optional (recommended):

```properties
spring.mvc.view.suffix=.jsp
```

Explanation:

```plaintext
prefix → where JSP files exist
suffix → file extension
```

Spring will search:

```plaintext
/WEB-INF/index.jsp
```

---

# 3. Create JSP Folder Structure

Inside project:

```plaintext
src
└── main
    │
    ├── java
    │
    ├── resources
    │
    └── webapp
        │
        └── WEB-INF
            │
            └── index.jsp
```

Important:

```plaintext
WEB-INF
```

must be inside:

```plaintext
src/main/webapp
```

NOT:

```plaintext
resources
```

---

# 4. Required JSP Tags

At the TOP of every JSP page:

```jsp
<%@ page language="java"
contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>

<%@ taglib
prefix="c"
uri="http://java.sun.com/jsp/jstl/core"%>
```

Explanation:

---

## page Directive

```jsp
<%@ page %>
```

Purpose:

Configures JSP page.

Sets:

* Java language
* UTF-8 encoding

---

## taglib Directive

```jsp
<%@ taglib %>
```

Purpose:

Imports JSTL library.

Without this:

```jsp
<c:out>
```

will fail.

---

# 5. Complete index.jsp Example

File:

```plaintext
src/main/webapp/WEB-INF/index.jsp
```

Code:

```jsp
<%@ page language="java"
contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>

<%@ taglib
prefix="c"
uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<title>Receipt</title>

</head>

<body>

<h1>Customer Receipt</h1>

<hr>

<p>
Customer:
<c:out value="${name}" />
</p>

<p>
Item:
<c:out value="${itemName}" />
</p>

<p>
Price:
$
<c:out value="${price}" />
</p>

<p>
Description:
<c:out value="${description}" />
</p>

<p>
Vendor:
<c:out value="${vendor}" />
</p>

</body>

</html>
```

---

# 6. Controller Example

```java
@Controller
public class ReceiptController {

    @RequestMapping("/")
    public String index(Model model){

        model.addAttribute(
                "name",
                "Tony Stark"
        );

        model.addAttribute(
                "itemName",
                "Arc Reactor"
        );

        model.addAttribute(
                "price",
                1500.75
        );

        model.addAttribute(
                "description",
                "Portable clean energy source."
        );

        model.addAttribute(
                "vendor",
                "Stark Industries"
        );

        return "index";

    }

}
```

Notice:

```java
return "index";
```

NOT:

```java
return "index.jsp";
```

because:

```properties
spring.mvc.view.suffix=.jsp
```

already appends `.jsp`.

---

# Final Checklist

✓ Dependencies installed

✓ `WEB-INF` folder created

✓ `application.properties` configured

✓ `@Controller` used

✓ JSP tags imported

✓ Matching `model.addAttribute()` keys

✓ Return view name correctly

Open:

```plaintext
http://localhost:8080/
```

Receipt should render successfully.
