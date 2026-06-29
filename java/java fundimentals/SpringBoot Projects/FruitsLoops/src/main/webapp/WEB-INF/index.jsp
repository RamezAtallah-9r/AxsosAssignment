<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Fruits App</title>
</head>
<body class="bg-gray-200 text-gray-900 flex flex-col min-h-screen">
    <header class="bg-white border-b border-gray-200 p-4">
        <h1 class="text-2xl text-pink-400 font-bold">Fruit Store</h1>
    </header>

    <main class="flex-grow container mx-auto p-4">
        <!-- Added rounding, shadow, and centered width container for cleaner presentation -->
        <div class="w-full md:w-1/3 overflow-hidden rounded-lg border border-gray-200 shadow-md">
            <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <!-- Table Header -->
                <thead class="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-700">
                    <tr>
                        <th scope="col" class="px-6 py-4">Name</th>
                        <th scope="col" class="px-6 py-4 text-right">Price</th>
                    </tr>
                </thead>
            
                <!-- Table Body -->
                <tbody class="divide-y divide-gray-200 border-t border-gray-200">
                    <!-- FIXED: Removed space inside the tag -->
                    <c:forEach var="fruit" items="${fruits}">
                        <tr class="hover:bg-gray-50 transition-colors duration-150">
                            <!-- FIXED: Changed fruit.getName to fruit.name -->
                            <td class="px-6 py-4 font-medium text-gray-900">
                                <c:out value="${fruit.name}" />
                            </td>
                            <!-- FIXED: Changed fruit.getPrice to fruit.price -->
                            <td class="px-6 py-4 text-right font-semibold text-gray-900">
                                $<c:out value="${fruit.price}" />
                            </td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
        </div>
    </main>

    <footer class="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-600">
        <p>&copy; 2026 Your Company. All rights reserved.</p>
    </footer>
</body>
</html>
