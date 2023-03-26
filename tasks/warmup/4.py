def missing_char(str, n):
  front = str[:n]   
  back = str[n+1:]  
  return front + back

s=str(input())
a=int(input())
l=missing_char(s,a)
print(l)