from datetime import datetime
class LibraryItem:
    def __init__(self, item_id, title, is_borrowed=False):
        self.item_id = item_id
        self.title = title
        self.is_borrowed = is_borrowed
        self.borrower_name = None
        self.due_date = None
        self.late_days = None

    def borrow_item(self, borrower_name, due_date):
        if self.is_borrowed:
            print(f"{self.title} is already borrowed.")
            return False
        self.is_borrowed = True
        self.borrower_name = borrower_name
        self.due_date = due_date
        
    def return_item(self):
        if not self.is_borrowed:
            print(f"{self.title} is not borrowed.")
            return False
        self.is_borrowed = False
        self.borrower_name = None
        self.due_date = None
        
    def check_availability(self):
        if self.is_borrowed:
            print(f"{self.title} is currently borrowed by {self.borrower_name}.")
            return False
        else:
            print(f"{self.title} is available.")
            return True
    def calculate_late_fee(self):
        if self.is_borrowed and self.due_date < datetime.now():
            self.late_days = (datetime.now() - self.due_date).days
            return self.late_days * 0.5

    def send_overdue_notification(self):
        if self.late_days is not None:
            print(f"Warning: {self.title} is overdue by {self.late_days} days.")
        pass