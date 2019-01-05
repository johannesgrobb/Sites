# -*- coding: utf-8 -*-
#Fibbonacci series:
#First version prints fib numbers less than 100
n1, n2 = 0, 1
while n1 < 100:
    print(n1)
    n1, n2 = n2, n1+n2
    
#Second version prints fib numbers up to n as Function definition in a list

def fib(n):
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a+b
    return result
    
f2000 = fib(2000)
f2000