from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.contrib import messages
from django.urls import reverse
from .models import *

# =========================================================
# BOOKS SECTION
# =========================================================

# 🟢 Show all books (INDEX PAGE)
def index(request):
    context = {
        'books': get_all_books()  # fetch all Book objects from DB
    }
    return render(request, 'book_author/index.html', context)


# 🟢 Add new book to database
def addbook(request):
    if request.method == 'POST':
        title = request.POST.get('title')  # get input from form
        description = request.POST.get('description')

        addBook(title, description)  # helper function in models.py

    return redirect('book_author:index')


# 🟢 Delete a book
def deletebook(request):
    if request.method == 'POST':
        book_id = request.POST.get('book_id')  # hidden input from form

        book_instance = Book.objects.get(id=book_id)  # fetch book
        book_instance.delete()  # delete from DB

    return redirect('book_author:index')


# =========================================================
# BOOK DETAILS PAGE (BOOK ↔ AUTHORS)
# =========================================================

# 🟢 Show single book + its authors
def bookinfo(request, book_id):
    book = get_object_or_404(Book, id=book_id)

    # 🔥 available authors = NOT already linked to this book
    available_authors = Author.objects.exclude(
        id__in=book.authors.values_list('id', flat=True)
    )

    context = {
        'book': book,
        'authors': available_authors
    }

    return render(request, 'book_author/book.html', context)


# 🟢 Add author to a book (MANY-TO-MANY RELATIONSHIP)
def addAuthorToBook(request, book_id):
    if request.method == 'POST':
        authorId = request.POST.get('author')

        book_instance = Book.objects.get(id=book_id)
        author_instance = Author.objects.get(id=authorId)

        # 🔥 correct ManyToMany direction (Book owns authors field)
        book_instance.authors.add(author_instance)

    return redirect('book_author:bookinfo', book_id=book_id)


# 🟢 Remove author from a book
def deleteBookAuthor(request):
    if request.method == 'POST':
        book_id = request.POST.get('book_id')
        author_id = request.POST.get('author_id')

        book_instance = Book.objects.get(id=book_id)
        author_instance = Author.objects.get(id=author_id)

        # 🔥 remove relation (NOT delete objects)
        book_instance.authors.remove(author_instance)

    return redirect('book_author:bookinfo', book_id=book_id)


# =========================================================
# AUTHORS SECTION
# =========================================================

# 🟢 Show all authors page
def showAuthors(request):
    context = {
        'authors': get_all_authors()
    }
    return render(request, 'book_author/authors.html', context)


# 🟢 Add new author
def addauthor(request):
    if request.method == 'POST':
        name = request.POST.get('name')  # MUST match HTML input name

        addAuthor(name)  # helper function in models.py

    return redirect('book_author:showAuthors')


# 🟢 Delete author
def deleteAuthor(request):
    if request.method == 'POST':
        author_id = request.POST.get('author_id')

        author_instance = Author.objects.get(id=author_id)
        author_instance.delete()

    return redirect('book_author:showAuthors')


# =========================================================
# AUTHOR DETAILS PAGE (AUTHOR ↔ BOOKS)
# =========================================================

# 🟢 Show author + books
def showAuthorBooks(request, author_id):
    author = get_object_or_404(Author, id=author_id)

    books = get_all_books()  # all books for dropdown

    context = {
        'author': author,
        'books': books
    }

    return render(request, 'book_author/author_books.html', context)


# 🟢 Add book to author (M2M relationship)
def addBookToAuthor(request, author_id):
    if request.method == 'POST':
        book_id = request.POST.get('book_id')

        author_instance = Author.objects.get(id=author_id)
        book_instance = Book.objects.get(id=book_id)

        # 🔥 correct direction based on your model:
        # Author.book = ManyToManyField(Book)
        author_instance.book.add(book_instance)

    return redirect('book_author:showAuthorBooks', author_id=author_id)


# 🟢 Remove book from author
def deleteAuthorBook(request):
    if request.method == 'POST':
        author_id = request.POST.get('author_id')
        book_id = request.POST.get('book_id')

        author_instance = Author.objects.get(id=author_id)
        book_instance = Book.objects.get(id=book_id)

        # 🔥 FIX: must match your model field name (book not books)
        author_instance.book.remove(book_instance)

    return redirect('book_author:showAuthorBooks', author_id=author_id)