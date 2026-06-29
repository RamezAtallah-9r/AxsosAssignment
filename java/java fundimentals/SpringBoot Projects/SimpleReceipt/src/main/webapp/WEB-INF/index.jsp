<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Tailwind App</title>
</head>
<body class="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
    <header class="bg-white border-b border-gray-200 p-4">
    </header>

    <main class="flex-grow container mx-auto p-4">
        <h1>Customer Name: <c:out value="${name}" /> </h1>
        <h2>Item Name: <c:out value="${itemName}" /></h2>
        <h2>Price:$ <c:out value="${price}" /></h2>
        <h2>Description: <c:out value="${description}" /></h2>
        <h2>Vendor: <c:out value="${vendor}" /></h2>
    </main>

    <footer class="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-600">
        <p>&copy; 2026 Your Company. All rights reserved.</p>
    </footer>
</body>
</html>