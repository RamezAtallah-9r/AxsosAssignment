from animal import Animal
class Sheep(Animal):
    def __init__(self, woolLength, woolColor,name, health, age, happiness):
        super().__init__(name, health, age, happiness)
        self.woolLength = woolLength
        self.woolColor = woolColor
    def get_wool_length(self):
        return self.woolLength
    def get_wool_color(self):
        return self.woolColor
    def shave(self):
        self.woolLength = 0
    