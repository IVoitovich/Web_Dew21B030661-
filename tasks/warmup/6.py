def parrot_trouble(talking, hour):
  return (talking and (hour < 7 or hour > 20))

a=bool(input("Enter value 0(False) or 1(True):"))
b=int(input("Enter value in range [0, 23]:"))
c=parrot_trouble(a,b)
print(c)