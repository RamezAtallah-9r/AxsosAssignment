from django.db import models

class Dojo(models.Model):
    name = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    desc = models.TextField(default="old dojo")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.name


class Ninja(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    dojo = models.ForeignKey(Dojo,related_name="ninjas",on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
def create_dojo(name, city, state):
    dojo = Dojo.objects.create(name=name, city=city, state=state)
    return dojo

def create_ninja(first_name, last_name, dojo):
    ninja = Ninja.objects.create(first_name=first_name, last_name=last_name, dojo=dojo)
    return ninja

def get_all_dojos():
    return Dojo.objects.all()

def get_all_ninjas():
    return Ninja.objects.all()

def delete_dojos(dojo_id):
    dojo = Dojo.objects.get(id=dojo_id)
    dojo.delete()