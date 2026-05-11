from animal import Animal
class Fox(Animal):
    def __init__(self,name, health, age, happiness):
        super().__init__(name, health, age, happiness)
        self.attack = 10
    def get_attack(self):
        return self.attack
    def run(self):
        print("RUN!")
    def feed(self):
        self.happiness += 15
        self.health += 10