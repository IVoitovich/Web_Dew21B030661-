def election(x, y, z):
    no=0
    yes=0
    list=[x,y,z]
    for i in range(len(list)):
        if(list[i]==0):no+=1
        else:yes+=1
    if(yes>no):print("yes")
    else:print("no")

a=int(input())
b=int(input())
election(a,b)