# -*- coding: utf-8 -*-
#Problem 1 : Write a Python program to convert degree to radian
pi=22/7
degree = float(input("Input degrees: "))
radian = degree*(pi/180)
print(radian)

#Problem 2 : Write a Python program to calculate the area of a trapezoid
base_1 = 5
base_2 = 6
height = float(input("Height of trapezoid: "))
base_1 = float(input('Base one value: '))
base_2 = float(input('Base two value: '))
area = ((base_1 + base_2) / 2) * height
print("Area is:", area)

#Problem 3 : Write a Python program to calculate the area of a parallelogram
base = float(input('Length of base: '))
height = float(input('Measurement of height: '))
area = base * height
print("Area is: ", area)

#Problem 4 : Write a Python program to calculate surface volume and area of a cylinder
pi=22/7
height = float(input('Height of cylinder: '))
radian = float(input('Radius of cylinder: '))
volume = pi * radian * radian * height
sur_area = ((2*pi*radian) * height) + ((pi*radian**2)*2)
print("Volume is: ", volume)
print("Surface Area is: ", sur_area)

#Problem 5 : Write a Python program to calculate surface volume and area of a sphere.
pi=22/7
radian = float(input('Radius of sphere: '))
sur_area = 4 * pi * radian **2
volume = (4/3) * (pi * radian ** 3)
print("Surface Area is: ", sur_area)
print("Volume is: ", volume)

#Problem 6 : Write a Python program to convert a decimal number to binary number.
b_num = list(input("Input a binary number: "))
value = 0

for i in range(len(b_num)):
	digit = b_num.pop()
	if digit == '1':
		value = value + pow(2, i)
print("The decimal value of the number is", value)
 
#Problem 7 : Write a Python program to find the roots of a quadratic function.
from math import sqrt

print("Quadratic function : (a * x^2) + b*x + c")
a = float(input("a: "))
b = float(input("b: "))
c = float(input("c: "))

r = b**2 - 4*a*c

if r > 0:
    num_roots = 2
    x1 = (((-b) + sqrt(r))/(2*a))     
    x2 = (((-b) - sqrt(r))/(2*a))
    print("There are 2 roots: %f and %f" % (x1, x2))
elif r == 0:
    num_roots = 1
    x = (-b) / 2*a
    print("There is one root: ", x)
else:
    num_roots = 0
    print("No roots, discriminant < 0.")
    