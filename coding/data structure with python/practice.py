#def mergeSortedArray(arr1,arr2,arr3):
def mergeSortedArray(arr1,arr2,arr3):    
    i=0
    j=0
    k=0
    len1=len(arr1)
    len2=len(arr2)
    len3=len(arr3)
    
    arr = []
    
    while((i<len1) and (j<len2) and (k<len3)):
        if(arr1[i]<arr2[j]):
            if(arr1[i]<arr3[k]):
                arr.append(arr1[i])
                i=i+1
        elif(arr2[j]<arr3[k]):
            if(arr2[j]<arr1[i]):
                arr.append(arr2[j])
                j=j+1
        elif(arr3[k]<arr2[j]):
            if(arr3[k]<arr1[i]):
                arr.append(arr3[k])
                k=k+1
    while(i<len1):
            arr.append(arr1[i])
            i=i+1
    while(j<len2):
            arr.append(arr2[j])
            j=j+1
    while(k<len3):
            arr.append(arr3[k])
            k=k+1
    return arr
            
           
    


arr1 = [1, 3,7,8,12]
arr2= [2,6,9,11,14]
arr3= [4,5,10,13,15]
arr = mergeSortedArray(arr1, arr2, arr3)
print(arr)
