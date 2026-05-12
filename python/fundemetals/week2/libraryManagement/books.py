from datetime import datetime
from LibraryItem import LibraryItem
class Book(LibraryItem):
    def __init__(self, item_id, title, is_borrowed=False, author=None, genre=None, pages=None, publisher=None):
        super().__init__(item_id, title, is_borrowed)
        self.author = author
        self.genre = genre
        self.pages = pages
        self.publisher = publisher
        
        def calculate_late_fee(self):
            if self.is_borrowed and self.due_date < datetime.now():
                self.late_days = (datetime.now() - self.due_date).days
                return self.late_days * 0.7

    