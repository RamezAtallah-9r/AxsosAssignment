from django.shortcuts import render, redirect
from django.views.decorators.http import require_http_methods

@require_http_methods(["GET"])
def index(request):
    request.session.setdefault("visits", 0)
    request.session.setdefault("added", 0)
    
    request.session["visits"] += 1
    request.session.modified = True
    
    return render(request, "counter/index.html", {
        "visits": request.session["visits"],
        "added": request.session["added"],
        "total": request.session["visits"] + request.session["added"]
    })

@require_http_methods(["POST"])
def count(request):
    request.session.setdefault("added", 0)
    
    action = request.POST.get("action")
    
    if action == "add_fixed":
        request.session["added"] += 2
    
    elif action == "add_custom":
        try:
            value = int(request.POST.get("value") or 0)
            request.session["added"] += value
        except ValueError:
            pass  # Silently ignore invalid input
    
    request.session.modified = True
    return redirect("index")

@require_http_methods(["POST"])
def destroy_session(request):
    request.session.flush()
    return redirect("index")