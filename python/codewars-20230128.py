## Given number, can be negative, integer
## Expected to return a whole integer or 0
## Given 10, multiples of 3/5 would be 3,5,6,9 the summation is 23

## set sum to 0
## if number is less than 0, return 0
## loop from 1 up to number, find multiples of 3 or 5, sum them
## return sum
    

def solution(number):
    sum = 0
    
    if number < 0:
        return 0
    
    for i in range(number):
        if i % 3 == 0 and i % 5 == 0:
            sum += i
            continue
        if i % 3 == 0:
            sum += i
            continue
        if i % 5 == 0:
            sum += i
            continue
    return sum

print(solution(10))
