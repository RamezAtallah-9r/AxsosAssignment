<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="fn" uri="jakarta.tags.functions" %>
<%@ taglib prefix="fmt" uri="jakarta.tags.fmt" %>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://kit.fontawesome.com/25732d4a9b.js"
	crossorigin="anonymous"></script>
<title>Tailwind App</title>
</head>
<body onload="timeAlert()" class="bg-gray-200 text-gray-900 flex flex-col min-h-screen">
	<c:set var="now" value="<%=new java.util.Date()%>" />

	<header class="bg-white border-b border-gray-200 p-4">
		<h1 class="text-2xl font-medium text-gray-500 text-center">Time
			Dashboard</h1>
	</header>

	<main
		class="flex-grow container mx-auto p-4 flex flex-col gap-8 justify-center items-center">
		<div>
			<h1 class="text-2xl font-medium text-gray-500 text-center">
				Formatted Time: <fmt:formatDate type="time" value="${now}" />
			</h1>
		</div>
		<div
			class="px-3 py-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 hover:scale-110 w-fit flex justify-between items-center gap-x-2">
			<i class="fa-regular fa-clock" style="color: rgb(116, 192, 252);"></i>
			<a href="/">back</a>
		</div>

	</main>

	<footer
		class="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-600">
		<p>&copy; 2026 Your Company. All rights reserved.</p>
	</footer>
	<script src="js/script.js"></script>
</body>
</html>