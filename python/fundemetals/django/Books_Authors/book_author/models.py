from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
class Author(models.Model):
    name = models.CharField(max_length=255)
    book = models.ManyToManyField(Book, related_name='authors')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

def addBook(title, description):
    book = Book.objects.create(title=title, description=description)

def addAuthor(name):
    author = Author.objects.create(name=name)
    return author

def get_all_books():
    return Book.objects.all()

def get_all_authors():
    return Author.objects.all()