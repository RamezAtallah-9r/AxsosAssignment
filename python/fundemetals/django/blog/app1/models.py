from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.first_name
    
def create_user(firstname,lastname,email,password):
    user=User.objects.create(first_name=firstname,
                        last_name=lastname,
                        email=email,
                        password=password
                        )
    return user

def check_user(email):
    user=User.objects.filter(email=email)
    if user:
        return True
    else:
        return False