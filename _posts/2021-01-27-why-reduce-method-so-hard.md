---
title: Using the Reduce function in JavaScript
description: JavaScript series - reduce function
read_time: "5 min"
img-lg: "https://res.cloudinary.com/susanjsp/image/upload/v1609587601/my-blog/welcome-lg_fbnlos.png"
img-sm: "https://res.cloudinary.com/susanjsp/image/upload/v1609587080/my-blog/welcome-sm_s1gase.png"
category: "🔅 JavaScript"
tags: javascript
layout: post
likes: 0
---
As I'm doing a deep dive into JavaScript, I thought I'd come here and share some of the knowledge I've gained and hopefully make things a little easier for some of you out there. Today, we're tackling...
the Reduce method! <!--break-->

Spending months learning ruby is pretty good on the scale of things - writing variables, functions and even programs are pretty intuitive and readable. However, jumping from ruby to javascript was a steep learning curve. Whether it was the syntax, or the shift in the type of programming that's being done, it felt like I was taking a deep dive into the ocean without knowing how to swim.

One function in particular haunted me - the reduce function. When browsing StackOverflow and other JS blogs for solutions, the reduce function kept rearing it's ugly head. Every time I saw it, I would try to read about it but for some reason I just couldn't wrap my head around it.

Today, we're going to learn how to use the reduce function and master it!! There's no other choice, so kick your text editor of choice into gear and let's get it! By the end of this tutorial, we're going to love this function.

The array.reduce() function is one that can be called on an array object. You call it on an array, and it produces a single value as the output (a single number, a single array or a single object, etc).

There are 2 separate arguments that we need to specify.
  1. The reducer function
  2. The start value (optional, starts at first value in array if not specificed);

```js
Array.prototype.reduce(reducer_function, start_value);
```
The reducer_function must have the first 2 arguments, with 2 extra optional arguments.
```js
reducer_function(accumulator, currentValue, index, array);

// This is what the skeleton of the function looks like, with all the optional arguments
Array.prototype.reduce(reducer_function(accumulator, currentValue, index, array) {
}), start_value);
```
- Accumulator -> the running total of the function. For example, if we are looking to sum all of the numbers in the array, the accumulator stores the total sum after each iteration.
- CurrentValue -> the current element being processed in the array
- Index -> the index of the current element being processed
- Array -> the array that reduce() was called upon

## Sum all elements of an array
```js
const array = [8, 9, 10, 11, 12];

// array.reduce(function(accumulator, currentValue, index, array), start_value);

// 1. Substitute argument names to names specific to our problem (create the skeleton)
array.reduce(function(sum, number) {
  console.log(number);
}, 0);

// 2. Think about how to execute reducer function. As we are summing the numbers, we can create code as follows
array.reduce(function(sum, number) {
  return sum += number;
}, 0);

// 3. Remember to put return - without it 'sum' won't be applying the code from the block
// 4. start_value is optional - when omitted, it automatically starts at 0, so we can remove it.
const sumArr = array.reduce(function(sum, number) {
  return sum += number;
});
console.log(sumArr); // 50
```

I hope this has helped to clear up how to use this function. Hopefully now you'll just need a few more practise exercises on it, and you'll get it!
