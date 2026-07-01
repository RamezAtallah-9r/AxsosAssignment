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
    <title>Your Fortune</title>
</head>

<body class="bg-gray-100 text-gray-800 font-sans min-h-screen flex flex-col justify-between">

    <!-- Header -->
    <header class="text-center pt-12">
        <h1 class="text-xs uppercase tracking-widest text-gray-400 font-semibold">Omikuji Result</h1>
    </header>

    <!-- Main Card -->
    <main class="flex-grow flex items-center justify-center p-4">
        <div class="w-full max-w-md bg-white border border-gray-200 rounded-xl p-8 shadow-sm">

            <!-- Message Paragraph -->
            <p class="text-lg md:text-xl text-gray-700 leading-relaxed text-center space-y-4">
                In <span class="font-semibold text-gray-900 bg-gray-100 px-1.5 py-0.5 rounded">${number}</span> years,
                you will live in <span
                    class="font-semibold text-gray-900 bg-gray-100 px-1.5 py-0.5 rounded">${city}</span>
                with <span class="font-semibold text-gray-900 bg-gray-100 px-1.5 py-0.5 rounded">${person}</span> as
                your roommate,
                Doing <span class="font-semibold text-gray-900 bg-gray-100 px-1.5 py-0.5 rounded">${hobby}</span> for
                a living.
                <br><br>
                The next time you see a <span
                    class="font-semibold text-gray-900 bg-gray-100 px-1.5 py-0.5 rounded">${creature}</span>,
                you will have good luck.
                <br><br>
                Also, <span class="italic text-gray-900 font-medium">"${message}"</span>
            </p>

            <!-- Back Button -->
            <div class="mt-8 pt-6 border-t border-gray-100 text-center">
                <a href="/" class="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                    &larr; Draw Another Fortune
                </a>
            </div>

        </div>
    </main>

    <!-- Footer -->
    <footer class="text-center pb-8 text-xs text-gray-400">
        <p>&copy; 2026 Your Company. All rights reserved.</p>
    </footer>

</body>

</html>