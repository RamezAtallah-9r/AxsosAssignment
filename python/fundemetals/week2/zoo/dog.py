from animal import Animal
class Dog(Animal):
    def __init__(self,name, health, age, happiness):
        super().__init__(name, health, age, happiness)
        self.loyalty = 10
        self.position = "standing"

    def get_loyalty(self):
        return self.loyalty

    def get_position(self):
        return self.position

    def order(self, command):
        self.position = command

    def feed(self): 
        self.happiness += 20
        self.health += 10