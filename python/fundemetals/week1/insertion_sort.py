def insertion_sort(list):
    for i in range(1, len(list)):
        j = i
        while j > 0 and list[j] < list[j-1]:
            list[j], list[j-1] = list[j-1], list[j]
            j -= 1
    return list

list=[9,5,4,6,8,2,66,5,41,2,5,4]
print(insertion_sort(list))

