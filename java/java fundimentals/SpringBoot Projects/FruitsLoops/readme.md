# 🍎 Fruit Store — Spring Boot MVC + JSP + JSTL

A dynamic Spring Boot web application that displays a fruit catalog and prices using **Model View Controller (MVC)** architecture, **JSP**, **JSTL**, and **Object-Oriented Programming (OOP)** concepts.

This project demonstrates how to pass Java objects from the controller into the view and render them dynamically using `c:forEach`.

---

# Table of Contents

* Project Overview
* Features
* Tech Stack
* Quick Start
* Prerequisites
* Installation
* Project Structure
* Architecture Overview
* Application Configuration
* Dependencies
* Models
* Controller
* View (JSP)
* JSP Tags
* Dynamic Rendering with c:forEach
* Running the Application
* Example Output
* Concepts Learned
* Common Errors & Solutions
* Developer Checklist
* License

---

# Project Overview

This project creates a **Fruit Store webpage** that displays a dynamic catalog of fruits and their prices.

Instead of hardcoding HTML rows, the application:

1. Creates fruit objects.
2. Stores them inside an ArrayList.
3. Sends them through Spring's `Model`.
4. Uses JSP + JSTL to render the data.

---

# Features

✅ Dynamic rendering using `c:forEach`

✅ MVC architecture

✅ JSP template rendering

✅ Java OOP using Item model

✅ Spring Model data transfer

✅ TailwindCSS styling

✅ JSTL support

✅ Clean project structure

---

# Tech Stack

| Technology    | Purpose                |
| ------------- | ---------------------- |
| Java          | Backend Language       |
| Spring Boot   | MVC Framework          |
| JSP           | View Rendering         |
| JSTL          | Dynamic Template Logic |
| Maven         | Dependency Management  |
| TailwindCSS   | Styling                |
| Tomcat Jasper | JSP Rendering          |

---

# Quick Start

## Prerequisites

Install:

```plaintext id="10afl1"
Java JDK 17+

Spring Tools Suite / Eclipse

Maven

Git
```

Verify:

```bash
java --version
mvn -version
```

---

# Installation

## 1. Create Project

Open:

```plaintext id="d68s0w"
File
→ New
→ Spring Starter Project
```

Configuration:

```plaintext id="0v3iyr"
Project Name:
FruitsLoops

Type:
Maven

Language:
Java

Packaging:
Jar
```

Dependency:

```plaintext id="3hxq0u"
Spring Web
```

Click:

```plaintext id="36bq0d"
Finish
```

---

# Project Structure

```plaintext id="hz9c6t"
FruitsLoops
│
├── src
│
├── main
│
│   ├── java
│   │
│   │   └── com.axsos.SpringBoot.FruitsLoops
│   │
│   │       ├── FruitsLoopsApplication.java
│   │       │
│   │       ├── controllers
│   │       │   └── FruitsLoopsController.java
│   │       │
│   │       └── models
│   │           └── Item.java
│   │
│   ├── resources
│   │   └── application.properties
│   │
│   └── webapp
│       │
│       └── WEB-INF
│           └── index.jsp
│
├── pom.xml
│
└── README.md
```

---

# Architecture Overview

```plaintext id="f1f7tw"
Controller
↓
Model
↓
JSP
↓
JSTL
↓
Browser
```

---

# Application Configuration

Open:

```plaintext id="pd6x9x"
src/main/resources/application.properties
```

Add:

```properties
spring.mvc.view.prefix=/WEB-INF/
spring.mvc.view.suffix=.jsp
```

Explanation:

```plaintext id="q2ovlo"
prefix
→ folder location

suffix
→ file extension
```

Spring loads:

```plaintext id="7lw0nw"
WEB-INF/index.jsp
```

---

# Dependencies

Open:

```plaintext id="kxw8ck"
pom.xml
```

Add:

```xml
<dependencies>

<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-web</artifactId>
</dependency>

<dependency>
<groupId>org.apache.tomcat.embed</groupId>
<artifactId>tomcat-embed-jasper</artifactId>
</dependency>

<dependency>
<groupId>jakarta.servlet.jsp.jstl</groupId>
<artifactId>jakarta.servlet.jsp.jstl-api</artifactId>
</dependency>

<dependency>
<groupId>org.glassfish.web</groupId>
<artifactId>jakarta.servlet.jsp.jstl</artifactId>
</dependency>

</dependencies>
```

Update:

```plaintext id="suhj7t"
Maven
→ Update Project
```

---

# Models

## Item.java

Represents one fruit.

Fields:

```java
private String name;

private double price;
```

Constructor:

```java
Item(
String name,
double price
)
```

Methods:

```java
getName()

setName()

getPrice()

setPrice()
```

Why getters matter:

JSP accesses:

```jsp
${fruit.name}
```

Internally:

```java
fruit.getName()
```

---

# Controller

## FruitsLoopsController.java

Creates:

```java
ArrayList<Item>
```

Stores:

```java
model.addAttribute(
"fruits",
fruits
);
```

Returns:

```java
return "index";
```

---

# View (JSP)

Location:

```plaintext id="ld8o5q"
src/main/webapp/WEB-INF/index.jsp
```

Required tags:

```jsp
<%@ page
language="java"
contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>

<%@ taglib
prefix="c"
uri="http://java.sun.com/jsp/jstl/core"%>

<%@ taglib
prefix="fn"
uri="http://java.sun.com/jsp/jstl/functions"%>
```

---

# JSP Tags

## c:forEach

Loops through collection.

Example:

```jsp
<c:forEach
var="fruit"
items="${fruits}">
```

Equivalent:

```java
for(Item fruit:fruits)
```

---

## c:out

Displays values safely.

Example:

```jsp
<c:out value="${fruit.name}" />
```

---

# Dynamic Rendering with c:forEach

Example:

```jsp
<tbody>

<c:forEach
var="fruit"
items="${fruits}">

<tr>

<td>

<c:out
value="${fruit.name}"
/>

</td>

<td>

$

<c:out
value="${fruit.price}"
/>

</td>

</tr>

</c:forEach>

</tbody>
```

Result:

```plaintext id="aw4znd"
Kiwi           $1.50
Mango          $2.00
Goji Berries   $4.00
Guava          $0.75
```

---

# Running the Application

Run:

```plaintext id="me8m9p"
Run As
→ Spring Boot App
```

Open:

```plaintext id="qsh75d"
http://localhost:8080
```

---

# Example Output

```plaintext id="gh6yl0"
Fruit Store

Name            Price

Kiwi            $1.50
Mango           $2.00
Goji Berries    $4.00
Guava           $0.75
```

---

# Concepts Learned

* MVC
* Spring Boot
* JSP
* JSTL
* c:forEach
* OOP
* Model
* Dynamic Rendering

---

# Common Errors & Solutions

### JSP Not Loading

Check:

```plaintext id="m1o0ps"
WEB-INF exists
```

---

### c:forEach Not Working

Check:

```plaintext id="7jgy5m"
JSTL dependencies
```

---

### Values Missing

Check:

```plaintext id="4oaqw0"
Getters exist
```

---

### View Not Found

Check:

```properties
spring.mvc.view.prefix=/WEB-INF/
```

---

# Developer Checklist

✓ Dependencies installed

✓ application.properties configured

✓ WEB-INF created

✓ JSP tags imported

✓ Model data passed

✓ c:forEach working

✓ Tailwind rendering

---

# License

Created for educational purposes as part of Spring Boot MVC training.
