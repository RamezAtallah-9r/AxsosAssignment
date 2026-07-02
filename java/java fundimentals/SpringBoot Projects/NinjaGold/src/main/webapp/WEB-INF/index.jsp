<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %> 

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://kit.fontawesome.com/25732d4a9b.js" crossorigin="anonymous"></script>
    <title>Ninja Gold</title>
</head>

<body class="bg-gray-100 text-gray-800 font-sans min-h-screen flex flex-col justify-between">

    <header class="text-center pt-8">
        <h1 class="text-xs uppercase tracking-widest text-gray-400 font-bold">Welcome to Ninja Gold</h1>
    </header>

    <main class="flex-grow max-w-4xl w-full mx-auto p-4 flex flex-col gap-6 justify-center">

        <div class="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm">
            <h2 class="text-lg font-medium text-gray-500 uppercase tracking-wide">Gold You Have</h2>
            <span class="text-4xl font-extrabold text-amber-500 block mt-1">💰 ${gold}</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <div
                class="bg-emerald-50/60 border border-emerald-200 rounded-xl p-5 text-center shadow-sm flex flex-col justify-between">
                <form action="/gold" method="post" class="flex flex-col h-full justify-between gap-4">
                    <div>
                        <h2 class="text-xl font-bold text-emerald-900">Farm</h2>
                        <p class="text-xs text-emerald-700 font-medium mt-1">earns 10-20 gold</p>
                    </div>
                    <input type="hidden" name="location" value="farm">
                    <button type="submit"
                        class="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm">
                        Find Gold
                    </button>
                </form>
            </div>

            <div
                class="bg-cyan-50/60 border border-cyan-200 rounded-xl p-5 text-center shadow-sm flex flex-col justify-between">
                <form action="/gold" method="post" class="flex flex-col h-full justify-between gap-4">
                    <div>
                        <h2 class="text-xl font-bold text-cyan-900">Cave</h2>
                        <p class="text-xs text-cyan-700 font-medium mt-1">earns 5-10 gold</p>
                    </div>
                    <input type="hidden" name="location" value="cave">
                    <button type="submit"
                        class="w-full bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm">
                        Find Gold
                    </button>
                </form>
            </div>

            <div
                class="bg-amber-50/60 border border-amber-200 rounded-xl p-5 text-center shadow-sm flex flex-col justify-between">
                <form action="/gold" method="post" class="flex flex-col h-full justify-between gap-4">
                    <div>
                        <h2 class="text-xl font-bold text-amber-900">House</h2>
                        <p class="text-xs text-amber-700 font-medium mt-1">earns 2-5 gold</p>
                    </div>
                    <input type="hidden" name="location" value="house">
                    <button type="submit"
                        class="w-full bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm">
                        Find Gold
                    </button>
                </form>
            </div>

            <div
                class="bg-rose-50/60 border border-rose-200 rounded-xl p-5 text-center shadow-sm flex flex-col justify-between">
                <form action="/gold" method="post" class="flex flex-col h-full justify-between gap-4">
                    <div>
                        <h2 class="text-xl font-bold text-rose-900">Quest</h2>
                        <p class="text-xs text-rose-700 font-medium mt-1">earns/lose 0-50 gold</p>
                    </div>
                    <input type="hidden" name="location" value="quest">
                    <button type="submit"
                        class="w-full bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors shadow-sm">
                        Take Risk
                    </button>
                </form>
            </div>

        </div>

        <div class="bg-slate-900 text-slate-300 border border-slate-800 rounded-xl p-5 shadow-inner">
            <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2 mb-3">
                Activity Log
            </h3>
            <ul class="font-mono text-sm space-y-1.5 max-h-36 overflow-y-auto">
                
                <c:forEach var="activity" items="${activities}" varStatus="status">
                    <li class="${colors[status.index]}">
                        &gt; <c:out value="${activity}" />
                    </li>
                </c:forEach>
                
                <c:if test="${empty activities}">
                    <li class="text-slate-500">&gt; No logs available yet. Start exploring!</li>
                </c:if>

            </ul>
        </div>

    </main>

    <footer class="text-center pb-8 text-xs text-gray-400">
        <p>&copy; 2026 Your Company. All rights reserved.</p>
    </footer>

</body>
</html>