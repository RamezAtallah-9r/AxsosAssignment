<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

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
<body class="bg-gray-200 text-gray-900 flex flex-col min-h-screen">
	<header class="bg-white border-b border-gray-200 p-4">
		<h1 class="text-2xl font-medium text-gray-500 text-center">Time
			Dashboard</h1>
	</header>

	<main
		class="flex-grow container mx-auto p-4 flex gap-8 justify-center items-center">
		<div
			class="px-3 py-4 rounded-lg bg-green-500 text-white hover:bg-green-600 hover:scale-110 w-fit flex justify-between items-center gap-x-2">
			<i class="fa-solid fa-calendar" style="color: rgb(255, 212, 59);"></i>
			<a href="/date">Date Template</a>
		</div>
		<div
			class="px-3 py-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 hover:scale-110 w-fit flex justify-between items-center gap-x-2">
			<i class="fa-regular fa-clock" style="color: rgb(116, 192, 252);"></i>
			<a href="/time">Time Template</a>
		</div>

	</main>

	<footer
		class="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-600">
		<p>&copy; 2026 Your Company. All rights reserved.</p>
	</footer>
	<script src="js/script.js"></script>
</body>
</html>