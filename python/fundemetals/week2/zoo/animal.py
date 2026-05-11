class Animal:
    def __init__(self, name, health, age, happiness):
        self.name = name
        self.health = health
        self.age = age
        self.happiness = happiness
    
    def display_info(self):
        print(f"Name: {self.name}\nHealth: {self.health}\nAge: {self.age}\nHappiness: {self.happiness}")
    def feed(self):
        self.happiness += 10
        self.health += 10