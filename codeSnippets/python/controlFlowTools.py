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
    
    