from animal import Animal
class Lion(Animal):
    def __init__(self,name, health, age, happiness):
        super().__init__(name, health, age, happiness)
        self.attack = 25
    def get_attack(self):
        return self.attack
    def roar(self):
        print("ROAR!")
    