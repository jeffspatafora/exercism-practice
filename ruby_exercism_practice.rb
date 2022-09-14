# string = "hello"

# p string[-1]

def add_one_every_other(numbers)
  new_numbers = []
  i = 0
  while i < numbers.length
    new_numbers << numbers[i] + 1
    new_numbers << numbers[i + 1]
    i += 2
  end
  p new_numbers
end

add_one_every_other([2, 5, 0, 7, 4, 1])