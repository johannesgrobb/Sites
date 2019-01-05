# -*- coding: utf-8 -*-
##############################################################################
#Example 1 - A class to represent a deck of playing cards.

import collections
##############################################################################
#Example 1-2 -   A simple 2D vector class
from math import hypot
#  get a random item from a sequence
from random import choice

# construct a simple class to represent individual cards
Card = collections.namedtuple('Card', ['rank', 'suit'])

class FrenchDeck:
    ranks = [str(n) for n in range(2, 11)] + list('JQKA')
    suits = 'spades diamonds clubs hearts'.split()
    
    def __init__(self):
        self._cards = [Card(rank, suit) for suit in self.suits
                                        for rank in self.ranks]
        
    def __len__(self):
        return len(self._cards)
    
    def __getitem__(self, position):
        return self._cards[position]
    
beer_card = Card('7', 'diamonds')
print(beer_card)

# gives number of cards
deck = FrenchDeck()
print(len(deck))

print(choice(deck))

# Because our __getitem__ delegates to the [] operator of self._cards, our 
# deck auto‐matically supports slicing

# top three cards of deck
print(deck[:3])

#  pick just the aces by starting on index 12 and skipping 13 cards at a time
print(deck[12::13])

#  implementing the __getitem__ special method makes the deck iterable
for card in deck:
    print(card)
    
# also iteration in reverse
for card in reversed(deck):
    print(card)
    
# Iteration is often implicit. If a collection has no __contains__ method,
# the in operator does a sequential scan.
Card('Q', 'hearts') in deck #True
Card('7', 'beasts') in deck #False

#  function that ranks cards by sorting in the order
# A-K-Q-J-10-2 and then spades>hearts>diamonds>clubs
suit_values = dict(spades=3, hearts=2, diamonds=1, clubs=0)

def spades_high(card):
    rank_value = FrenchDeck.ranks.index(card.rank)
    return rank_value * len(suit_values) + suit_values[card.suit]
for card in sorted(deck, key=spades_high):
    print(card)

##############################################################################
        



class Vector:
    
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y
        
    def __repr__(self):
        return 'Vector(%r, %r)' % (self.x, self.y)
    
    def __abs__(self):
        return hypot(self.x, self.y)
    
    def __bool__(self):
        return bool(abs(self))
    
    def __add__(self, other):
        x = self.x + other.x
        y = self.y + other.y
        return Vector(x, y)
    
    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)
    
##############################################################################
#Example 2 - 1 Cartesian product using a list comprehension.
colors = ['black', 'white']
sizes = ['s', 'm', 'l']

tshirts = [(color, size) for color in colors for size in sizes]
print(tshirts)

##############################################################################
