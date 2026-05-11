from animal import Animal
from dog import Dog
from sheep import Sheep
from lion import Lion
from fox import Fox

class Zoo:
    def __init__(self,name):
        self.name = name
        self.animals = []
        self.current_time =12
    
    def add_animal(self, animal):
        self.animals.append(animal)
        
    def get_animals(self):
        return self.animals
    
    def feed_animals(self, time=None):
        if time is None:
            if self.current_time < 12:
                print("It's too early to feed the animals.")
            else:
                for animal in self.animals:
                    animal.feed()
        else:
            if self.current_time >= time:
                for animal in self.animals:
                    animal.feed()
            else:
                print("It's too early to feed the animals.")
    def update_time(self,time):
        self.current_time =time
        self.feed_animals() 
    
    def display_animals(self):
        for animal in self.animals:
            animal.display_info()
            print("\n")
            print("--" * 10)
        

zoo1 = Zoo("Zoo1")
zoo1.add_animal(Dog("Todo",100,4,10))
zoo1.add_animal(Sheep(10,"black","sheep1",70,1,5))
zoo1.add_animal(Lion("Gojo",80,7,7))
zoo1.add_animal(Fox("Kurama",50,3,5))
zoo1.update_time(13)
zoo1.feed_animals(14)
zoo1.display_animals()
