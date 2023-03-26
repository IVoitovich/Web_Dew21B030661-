a=int(input())
k=0
list=[]
for i in range(0, a):
    c=int(input())
    list.append(c)
for i in range(1, len(list)-1):
    if(list[i-1]<list[i] and list[i]>list[i+1]):
           k+=1
print(k)
  