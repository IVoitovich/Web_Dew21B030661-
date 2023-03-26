a=int(input())
k=0
list=[]
for i in range(0, a):
    c=int(input())
    list.append(c)
for i in range(len(list)):
    if(list[i]>0):
        k+=1

print(k)        