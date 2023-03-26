def sleep_in(weekday, vacation):
  if not weekday or vacation:
    return True
  else:
    return False

a=bool(input("Enter value 0 or 1:"))
b=bool(input("Enter value 0 or 1:"))
p=sleep_in(a, b)
print(p)