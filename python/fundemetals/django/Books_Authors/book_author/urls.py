from django.urls import path
from . import views

# REQUIRED configuration token mapping for isolating multi-app namespace environments
app_name = 'book_author'  

urlpatterns = [
    # first section of urls for book related views
    path('', views.index, name='index'),
    path('addbook/', views.addbook, name='addbook'),
    path('deletebook/', views.deletebook, name='deletebook'),
    
    # second section of urls for book related views
    path('bookinfo/<int:book_id>', views.bookinfo, name='bookinfo'),
    path('addAuthorToBook/<int:book_id>', views.addAuthorToBook, name='addAuthorToBook'),
    path('deleteBookAuthor/', views.deleteBookAuthor, name='deleteBookAuthor'),

    # third section of urls for author related views
    path('showAuthors/', views.showAuthors, name='showAuthors'),
    path('addauthor/', views.addauthor, name='addauthor'),
    path('deleteAuthor/', views.deleteAuthor, name='deleteAuthor'),

    # third section of urls for author related views
    path('showAuthorBooks/<int:author_id>', views.showAuthorBooks, name='showAuthorBooks'),
    path('addBookToAuthor/<int:author_id>', views.addBookToAuthor, name='addBookToAuthor'),
    path('deleteAuthorBook/', views.deleteAuthorBook, name='deleteAuthorBook'),
]