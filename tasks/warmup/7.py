def pos_neg(a, b, negative):
  if negative:
    return (a < 0 and b < 0)
  else:
    return ((a < 0 and b > 0) or (a > 0 and b < 0))
  
a=int(input("Enter value :"))
b=int(input("Enter value :"))
c=bool(input("Enter value 0(False) or 1(True):"))
d=pos_neg(a,b,c)
print(d)