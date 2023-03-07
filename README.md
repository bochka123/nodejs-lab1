# Node.js Lab1
Completing of the first lab for node.js

## Task 1

Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

### Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

[Link to task](https://www.codewars.com/kata/52b7ed099cdc285c300001cd)

## Task 2

A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

### The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

[Link to task](https://www.codewars.com/kata/5287e858c6b5a9678200083c)

## Task 3

There is an array with some numbers. All numbers are equal except for one. Try to find it!
    
    findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

[Link to task](https://www.codewars.com/kata/585d7d5adb20cf33cb000235)