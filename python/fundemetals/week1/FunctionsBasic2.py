#countdown

def countdown(n):
    nums=[]
    for i in range(n,-1,-1):
        nums.append(i)
    return nums
print(countdown(5))

#print and return

def print_and_return(list):
    print(list[0])
    return list[1]
print(print_and_return([1,2]))

#first plus length

def first_plus_length(list):
    return list[0] + len(list)
print(first_plus_length([1,2,3,4,5]))

#values greater than second

def values_greater_than_second(list):
    if len(list) < 2:
        return False
    output = []
    for i in list:
        if i > list[1]:
            output.append(i)
    print(len(output))
    return output
print(values_greater_than_second([5,2,3,2,1,4]))

#this length, that value

def length_and_value(size,value):
    output = []
    for i in range(size):
        output.append(value)
    return output
print(length_and_value(4,7))

