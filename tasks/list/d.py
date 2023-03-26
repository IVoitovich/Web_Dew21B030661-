a=int(input())
k=0
list=[]
for i in range(0, a):
    c=int(input())
    list.append(c)
for i in range(len(list)-1):
    if((list[i]>=0 and list[i+1]>=0) or (list[i]<0 and list[i+1]<0)):
           k+=1
if(k>0):print('yes')
else:print("No")     