v=int(input())
t=int(input())
k=t*v
if(k>109):
    k-=109
if(k<0):
    k=109+k
print(k)