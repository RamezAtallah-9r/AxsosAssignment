def selectio_sort(list):
    for i in range(0, len(list),1):
        min = list[i]
        for j in range(i + 1, len(list),1):
            if list[j] < min:
                min = list[j]
                index = j
        list[index] = list[i]
        list[i] = min
    return list

list=[9,5,4,6,8,2,66,5,41,2,5,4]
print(selectio_sort(list))