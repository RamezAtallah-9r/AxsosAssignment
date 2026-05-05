#Basic
for i in range(150):
    print(i)

#Multiples of Five
for i in range(5,1000):
    if i%5==0:
        print(i)
        
#Counting, the Dojo Way        
for i in range(1, 101):
        if i % 10 == 0:
            print("Coding Dojo")
        elif i % 5 == 0:
            print("Coding")
        else:
            print(i)
            
#Whoa. That Sucker's Huge
total = 0
for i in range(0, 500001, 1):
        if i%2 != 0:
            total += i
print(total)

#Countdown by Fours
for i in range(2018, 0, -4):
        print(i)     
        
#Flexible Counter
low_num = 2
high_num = 30
mult = 3        
for i in range(low_num, high_num+1):
        if i%mult==0:
            print(i)                  
            
