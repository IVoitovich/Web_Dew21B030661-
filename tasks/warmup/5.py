def monkey_trouble(a_smile, b_smile):
  if a_smile and b_smile:
    return True
  if not a_smile and not b_smile:
    return True
  return False

a=bool(input("Enter value 0(not smile) or 1(smile):"))
b=bool(input("Enter value 0(not smile) or 1(smile):"))
c=monkey_trouble(a,b)
print(c)