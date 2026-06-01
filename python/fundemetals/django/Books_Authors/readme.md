# 📚 Books & Authors Management System (Django)

A simple Django web application to manage books and authors with a **Many-to-Many relationship**.  
Users can create books, create authors, and link them together dynamically.

---

## 🚀 Features

### 📖 Books

- Create new books
- View all books
- Delete books
- View a single book with its authors
- Add authors to a book
- Remove authors from a book

### ✍️ Authors

- Create new authors
- View all authors
- Delete authors
- View a single author with their books
- Add books to an author
- Remove books from an author

---

## 🧠 Project Structure

book_author/
├── models.py # Book & Author models + helper functions
├── views.py # All business logic (CRUD + relationships)
├── urls.py # Application routes
├── templates/
│ └── book_author/
│ ├── index.html
│ ├── book.html
│ ├── authors.html
│ └── author_books.html

---

## 🗄️ Database Models

### 📘 Book

- title (CharField)
- description (TextField)
- created_at (DateTime)
- updated_at (DateTime)

### 👤 Author

- name (CharField)
- book (ManyToManyField → Book)

---

## 🔗 Relationships

- A **Book can have many Authors**
- An **Author can have many Books**

This is implemented using Django `ManyToManyField`.

---

## ⚙️ Installation & Setup

### 1. Clone project

```bash
git clone <repo-url>
cd project-folder
2. Create virtual environment
python -m venv env

Activate:

# Windows

env\Scripts\activate
3. Install dependencies
pip install django
4. Run migrations
python manage.py makemigrations
python manage.py migrate
5. Run server
python manage.py runserver

Open in browser:

http://127.0.0.1:8000/
📌 Main Routes
Route ----------- Description
/                         Books homepage
/addbook          Add new book
/showAuthors      Authors list
/book/<id>          Book details
/author/<id>      Author details

🔄 Key Functionalities

➕ Add relationship
Add author to book
Add book to author


❌ Remove relationship
Remove author from book
Remove book from author


🧪 Example Flow
├──Create a Book
├──Create an Author
├──Open Book page
├──Attach Author to Book
├──Open Author page
├──Attach Book to Author
├──View relationships dynamically


🛠️ Tech Stack
Python 3
Django
SQLite
HTML
TailwindCSS


⚠️ Notes
This project uses Django Many-to-Many relationships
Field naming must match exactly between models, views, and templates
Case sensitivity matters in Django URLs
📷 Screenshots (optional)



![Screenshot 2026-06-01 232445.png](C:\Users\zzeta\OneDrive\Pictures\Screenshots\Screenshot%202026-06-01%20232445.png)



![Screenshot 2026-06-01 232502.png](C:\Users\zzeta\OneDrive\Pictures\Screenshots\Screenshot%202026-06-01%20232502.png)



![Screenshot 2026-06-01 232515.png](C:\Users\zzeta\OneDrive\Pictures\Screenshots\Screenshot%202026-06-01%20232515.png)



![Screenshot 2026-06-01 232527.png](C:\Users\zzeta\OneDrive\Pictures\Screenshots\Screenshot%202026-06-01%20232527.png)





👨‍💻 Author

Built as a learning project for mastering:

Django CRUD
Many-to-Many relationships
Template rendering
URL routing system