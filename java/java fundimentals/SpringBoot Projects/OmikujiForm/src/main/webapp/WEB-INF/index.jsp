<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page isELIgnored="false" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://kit.fontawesome.com/25732d4a9b.js" crossorigin="anonymous"></script>
    <title>Omikuji Form</title>
</head>

<body onload="dateAlert()" class="bg-gray-50 text-gray-900 flex flex-col min-h-screen font-sans">

    <header class="bg-white border-b border-gray-200 py-5 shadow-sm">
        <h1 class="text-3xl font-bold text-gray-800 text-center tracking-tight">Send an Omikuji!</h1>
    </header>

    <main class="flex-grow container mx-auto px-4 py-12 flex justify-center items-center">

        <form action="/result" method="post"
            class="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6 p-6 sm:p-8">

            <div class="flex flex-col gap-1.5">
                <label class="text-sm font-semibold text-gray-700">Pick any number from 5 to 25</label>
                <input type="number" name="number" placeholder="5" min="5" max="25"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400">
            </div>

            <div class="flex flex-col gap-1.5">
                <label class="text-sm font-semibold text-gray-700">Enter the name of any city</label>
                <input type="text" name="city" placeholder="Brazil"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400">
            </div>

            <div class="flex flex-col gap-1.5">
                <label class="text-sm font-semibold text-gray-700">Enter the name of any real person</label>
                <input type="text" name="person" placeholder="John"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400">
            </div>

            <div class="flex flex-col gap-1.5">
                <label class="text-sm font-semibold text-gray-700">Enter Profession, Endeavor, or Hobby</label>
                <input type="text" name="hobby" placeholder="Programmer"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400">
            </div>

            <div class="flex flex-col gap-1.5">
                <label class="text-sm font-semibold text-gray-700">Enter any type of living thing</label>
                <input type="text" name="creature" placeholder="Ferret"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400">
            </div>

            <div class="flex flex-col gap-1.5">
                <label class="text-sm font-semibold text-gray-700">Say something nice to someone</label>
                <textarea name="message" rows="3" placeholder="Have a wonderful day!"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 resize-none"></textarea>
            </div>

            <div class="pt-2">
                <button type="submit"
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 shadow-sm">
                    Submit
                </button>
            </div>
        </form>

    </main>

    <footer class="bg-white border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        <p>&copy; 2026 Your Company. All rights reserved.</p>
    </footer>

</body>

</html>