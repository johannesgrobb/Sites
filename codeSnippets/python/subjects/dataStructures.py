# -*- coding: utf-8 -*-
#Methods of list objects

fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']

#Add an item to the end of the list.
fruits.append('grape')

#Extend the list by appending all the items from the iterable. 
fruits.extend(iterable)

#Insert an item at a given position. The first argument is the index of the 
# element before which to insert.
fruits.insert(3, 'bannana')

# Remove the first item from the list whose value is equal to x.
fruits.remove('orange')

# Remove the item at the given position in the list, and return it. 
fruits.pop(['pear'])

# Remove all items from the list.
fruits.clear()

# Return zero-based index in the list of the first item whose value is equal to x.
fruits.index('banna', 4)

# Return the number of times x appears in the list.
fruits.count('apple')

# Sort the items of the list in place
fruits.sort(key=None, reverse=False)

# Reverse the elements of the list in place.
fruits.reverse()

# Return a shallow copy of the list.
fruits.copy()


#Using lists as Stacks
stack = [3, 4, 5]
stack.append(6)
stack.append(7)
stack
# Returns [3,4,5,6,7]
stack.pop()
# Returns 7
stack
# Returns [3,4,5,6]
stack.pop()
# Returns 6
stack
# Returns [3,4,5]

# Using Lists as Queues
from collections import deque
queue = deque(["Eric", "John", "Micheal"])
queue.append("Terry")
queue.append("Graham")
queue.popleft()
# Returns 'Eric'

queue.popleft()
# Returns 'John'

queue
# Returns deque(['Micheal', 'Terry', 'Graham'])


#List comprehensions
squares = []
for x in range(10):
    squares.append(x**2)
    
squares
# Returns [0,1,4,9,16,25,49,64,81]

squares = [x**2 for x in range(10)]
# Returns [0,1,4,9,16,25,49,64,81]

combs = []
for x in [1,2,3]:
    for y in [3,1,4]:
        if x != y:
            combs.append((x, y))
combs
# Returns [(1, 3), (1, 4), (2, 3), (2, 1), (2, 4), (3, 1), (3, 4)]

# Comprehension with a tuple
vec = [-4, -2, 0, 2, 4]

# create a new list with the values doubled
[x*2 for x in vec]
# Returns [-8, -4, 0, 4, 8]

# filter the list to exclude negative numbers
[x for x in vec if x >= 0]
# Returns [0, 2, 4]

# apply a function to all the elements
[abs(x) for x in vec]
# Returns [4, 2, 0, 2, 4]

# call a method on each element
freshfruit = ['  banana', '  loganberry ', 'passion fruit  ']
[weapon.strip() for weapon in freshfruit]
# Returns ['banana', 'loganberry', 'passion fruit']

# create a list of 2-tuples like (number, square)
[(x, x**2) for x in range(6)]
# Returns [(0, 0), (1, 1), (2, 4), (3, 9), (4, 16), (5, 25)]

# flatten a list using a listcomp with two 'for'
vec = [[1,2,3], [4,5,6], [7,8,9]]
[num for elem in vec for num in elem]
# Returns [1, 2, 3, 4, 5, 6, 7, 8, 9]


# Nested List Comprehensions
matrix = [[1,2,3,4], [5,6,7,8], [9,10,11,12]]
# transpose rows and columns
[[row[i] for row in matrix] for i in range(4)]
# Returns [[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
