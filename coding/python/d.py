a = [1,2,3]
b = [3,2]
c = [2]

X = [x for x in a if x not in b]
Y = [y for y in b if y not in c]

print(X)
print(Y)