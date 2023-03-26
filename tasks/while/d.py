a=int(input())
i=15
while(i!=0):
    if(a==1):
       i=0
       print('Yes')
    else:
      if(a%2==0):
        a=a/2
      elif(a%2!=0):
         print("No")
         i=0

