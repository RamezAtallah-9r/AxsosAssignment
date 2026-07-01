<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://kit.fontawesome.com/25732d4a9b.js" crossorigin="anonymous"></script>
    <title>Counter App - Dashboard</title>
</head>
<body class="bg-gray-200 text-gray-900 flex flex-col min-h-screen">

    <header class="bg-white border-b border-gray-200 p-4">
        <h1 class="text-2xl font-medium text-gray-500 text-center">Counter Dashboard</h1>
    </header>

    <main class="flex-grow container mx-auto p-4 flex flex-col gap-8 justify-center items-center">
        <div>
            <p class="text-xl font-medium text-gray-500 text-center">
                You have visited 
                <a href="/" class="text-blue-500 underline">the home page</a> 
                <span id="counter" class="font-bold text-stone-700 bg-white px-3 py-1 rounded shadow-sm mx-2">${sessionScope.visits}</span> times.
            </p> 
        </div>
        <div class="px-3 py-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition hover:scale-110 w-fit flex justify-between items-center gap-x-2">
            <i class="fa-solid fa-house"></i>
            <a href="/" class="font-medium">Test Another Visit?</a>
        </div>
    </main>

    <footer class="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-600">
        <p>&copy; 2026 Your Company. All rights reserved.</p>
    </footer>

</body>
</html>
