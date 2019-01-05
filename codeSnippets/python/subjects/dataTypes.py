# -*- coding: utf-8 -*-
#Numbers

 #Type int
print (2 + 2)

#Type float
print (17 / 3)

#Type float that disregards the fractional
print (17 // 3) 

#Type float that only returns remainder
print (17 % 3) 

#Calculate power
print (2 ** 3)
   
# = used to assign a value to a variable
width = 10
height = 10
print (width * height)

#Strings
# Python strings are immutable
print ('Hello World')
print ("Hello World")

 # \ Used to escape characters
print ('doesn\'t')
print ('He said: "Hello World".')

# String Literal concatination
print ('Py' 'thon')

#String Concatenated with variable and literal
prefix = 'Py'
print(prefix + 'thon') 

# Strings can be indexed(Subscripted)
word = 'Python'

#First letter
print(word[0]) 

# Last letter
print(word[-1]) 

# Slicing from Position 0 - 2 (2 excluded)
print(word[2:0])

# Returns the length of a string
print(len(word))

#List/Array
# Lists are mutable

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
print(letters)

# replace some values
letters[2:5] = ['C', 'D', 'E']
print(letters)

# now remove them
letters[2:5] = []
print(letters)

# clear the list by replacing all the elements with an empty list
letters[:] = []
print(letters)
