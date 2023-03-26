def near_hundred(n):
  return ((abs(100 - n) <= 10) or (abs(200 - n) <= 10))

n=int(input())
t=near_hundred(n)
print(t)