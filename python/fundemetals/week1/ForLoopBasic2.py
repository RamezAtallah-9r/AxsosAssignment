#biggi size
def biggie_size(list):
    for i in range(len(list)):
        if list[i] > 0:
            list[i] = "big"
    return list

#count positives
def count_positives(list):
    count=0
    for i in range(len(list)):
        if list[i] > 0:
            count+=1
    list[len(list)-1] = count
    return list

#sum total
def sum_total(list):
    sum=0
    for i in range(len(list)):
        sum+=list[i]
    return sum

#average
def average(list):
    sum=0
    for i in range(len(list)):
        sum+=list[i]
    return sum/len(list)

#length
def length(list):
    return len(list)

#minimum
def minimum(list):
    min=list[0]
    for i in range(len(list)):
        if list[i] < min:
            min=list[i]
    return min

#maximum
def maximum(list):
    max=list[0]
    for i in range(len(list)):
        if list[i] > max:
            max=list[i]
    return max

#ultimate analysis
def ultimate_analysis(list):
    return {"sumTotal":sum_total(list),"average":average(list),"minimum":minimum(list),"maximum":maximum(list),"length":length(list)}
list=[1,2,3,4,5]
print(ultimate_analysis(list))

#reverse list
def reverse_list(list):
    list.reverse()
    return list

list=[1,2,3,4,5]
print(reverse_list(list))
