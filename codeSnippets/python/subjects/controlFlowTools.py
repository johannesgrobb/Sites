# -*- coding: utf-8 -*-

#if statements

x = int(input("Please enter an integer: "))
if x < 0:
    x = 0
    print ('Negative changed to zero')
elif x == 0:
    print ('Zero')
elif x == 1:
    print ('Single')
else:
    print('More')

#for statements
    
names = ['Johan', 'Zilla', 'Raynardt', 'Willie']
for w in names:
    print (w, len(w));
  
# Loop over a slice copy of the entire list
for w in names[:]:
    if len(w) > 6:
        names.insert(0, w)
        
# range Function
        
for i in range(10):
    print(i)
    
# range() and len()
    
a = ['Johan', 'Zilla', 'Raynardt', 'Willie']
for i in range(len(a)):
    print(i, a[i])
    
#break 

for n in range(2, 10):
    for x in range (2, n):
        if n % x == 0:
            print(n, 'equals', x, '*', n//x)
            break
    else:
        print(n, 'is a prime number')

#continue        

for num in range(2, 10):
    if num % 2 == 0:
        print("Found an even number", num)
        continue
    print ("Found a number", num)
    
#Default Argument Values

def ask_ok(prompt, retries=4, reminder="Please try again"):
    while True:
        ok = input(prompt)
        if ok in ('y', 'ye', 'yes'):
            return True
        if ok in ('n', 'no', 'nop', 'nope'):
            return False
        retries = retries - 1
        if retries < 0:
            raise ValueError('invalid user responese')
            print(reminder)
            
ask_ok('Do you really want to quit?')
ask_ok('OK to overwrite the file?', 2)
ask_ok('OK to overwrite the file?', 2, 'Come on, only yes or no!')
    
#Keyword Arguments
def parrot(voltage, state='a stiff', action='voom', type='Norwegian Blue'):
    print("-- This parrot wouldn't", action, end=' ')
    print("if you put", voltage, "volts through it.")
    print("-- Lovely plumage, the", type)
    print("-- It's", state, "!")

parrot(1000)                                          # 1 positional argument
parrot(voltage=1000)                                  # 1 keyword argument
parrot(voltage=1000000, action='VOOOOOM')             # 2 keyword arguments
parrot(action='VOOOOOM', voltage=1000000)             # 2 keyword arguments
parrot('a million', 'bereft of life', 'jump')         # 3 positional arguments
parrot('a thousand', state='pushing up the daisies')  # 1 positional, 1 keyword

#Lambda Expressions
def make_incrementor(n):
    return lambda x: x + n

f = make_incrementor(42)
f(0)
f(1)