from LibraryItem import LibraryItem
from books import Book
from DVDS import DVD
from Magazines import Magazine
from datetime import datetime, timedelta

book1 = Book(
    item_id=1,
    title="Python Programming",
    author="John Smith",
    genre="Education",
    pages=450,
    publisher="Tech Press"
)

dvd1 = DVD(
    item_id=2,
    title="Inception",
    director="Christopher Nolan",
    release_date="2010-07-16",
    rating="PG-13",
    genre="Sci-Fi"
)

magazine1 = Magazine(
    item_id=3,
    title="National Geographic",
    publisher="NatGeo",
    genre="Science"
)

# -------------------------------
# Check Availability
# -------------------------------
print("=== Availability Check ===")
book1.check_availability()
dvd1.check_availability()
magazine1.check_availability()

# -------------------------------
# Borrow Items
# -------------------------------
print("\n=== Borrowing Items ===")
book1.borrow_item("Alice", datetime.now() + timedelta(days=7))
dvd1.borrow_item("Bob", datetime.now() + timedelta(days=5))
magazine1.borrow_item("Charlie", datetime.now() + timedelta(days=3))

# -------------------------------
# Check Availability Again
# -------------------------------
print("\n=== Availability After Borrowing ===")
book1.check_availability()
dvd1.check_availability()
magazine1.check_availability()

# -------------------------------
# Simulate Overdue Items
# -------------------------------
print("\n=== Simulating Overdue ===")
book1.due_date = datetime.now() - timedelta(days=4)
dvd1.due_date = datetime.now() - timedelta(days=2)
magazine1.due_date = datetime.now() - timedelta(days=6)

# -------------------------------
# Calculate Late Fees
# -------------------------------
print("\n=== Late Fees ===")
print(f"Book Late Fee: ${book1.calculate_late_fee()}")
print(f"DVD Late Fee: ${dvd1.calculate_late_fee()}")
print(f"Magazine Late Fee: ${magazine1.calculate_late_fee()}")

# -------------------------------
# Send Notifications
# -------------------------------
print("\n=== Overdue Notifications ===")
book1.send_overdue_notification()
dvd1.send_overdue_notification()
magazine1.send_overdue_notification()

# -------------------------------
# Return Items
# -------------------------------
print("\n=== Returning Items ===")
book1.return_item()
dvd1.return_item()
magazine1.return_item()

# -------------------------------
# Final Availability Check
# -------------------------------
print("\n=== Final Availability ===")
book1.check_availability()
dvd1.check_availability()
magazine1.check_availability()