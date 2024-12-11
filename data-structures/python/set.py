# set in an unique data store. It is an object only with values

# define a new set
my_set = set() # or
my_another_set = { 'orange', 'banana' } # in order to access add method, should have at least one item

my_another_set.add('mango') # Adds a single element
print(my_another_set) # output: set(['orange', 'mango', 'banana'])

# update element. can use this to add multiple elements to the set
my_another_set.update(['grape'])
print(my_another_set)

# add new value to the set
my_set.add(2)
my_set.add(2) # this will not add
my_set.add(3)
my_set.add(4)
my_set.add(5)

# print set
print(my_set) # output: set([2,3,4,5])

# remove element from random location
my_set.pop()
print(my_set) # output

# remove with error if not found
fruits.remove('banana')  # raises KeyError if element doesn't exist

# remove without error if not found
fruits.discard('banana')  # no error if element doesn't exist

# check length
print(len(my_set)) # output: 3

# check element exists
print(2 in my_set)
print(9 not in my_set)

# clear entire list
# my_set.clear()
# print(my_set)

# loop set
for num in my_set:
  print(num)

##### Utils

# remove duplicated from a list
numbers = [1, 2, 2, 3, 4, 4, 5]
unique_numbers = set(numbers)  # output: {1, 2, 3, 4, 5}

# create a set of squared numbers - Comprehensions
squared_set = { x**2 for x in range(10) }
