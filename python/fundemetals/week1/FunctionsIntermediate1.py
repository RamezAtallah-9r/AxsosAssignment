def randInt(x=0,y=100):
    import random
    if x != 0 and y == 100:
        return random.randint(0,x)
    return random.randint(x,y)

print(randInt())
print(randInt(5))
print(randInt(5,15))
    