def prime(a):
    k=0
    for i in range(2, int(a**0.5)+1):
        if(a%i==0):
            k+=1
        else:k+=0
    if(k==0):
        print("prime")
    else:print("composite")

a=int(input())
prime(a)