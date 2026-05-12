from datetime import datetime
from LibraryItem import LibraryItem
class DVD(LibraryItem):
    def __init__(self, item_id, title, is_borrowed=False, director=None, release_date=None, rating=None,genre=None):
        super().__init__(item_id, title, is_borrowed)
        self.director = director
        self.release_date = release_date
        self.rating = rating
        self.genre = genre
        
        def calculate_late_fee(self):
            if self.is_borrowed and self.due_date < datetime.now():
                self.late_days = (datetime.now() - self.due_date).days
                return self.late_days * 0.9

    