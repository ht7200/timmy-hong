---
title: Advanced JavaScript
date: 2020-3-15
tags:
 - JavaScript
categories: 
 - Interview
---


# JS

## Data types

There are eight basic data types in JavaScript.Including seven primitive types and a special type(Object)   
Primitive:`null`，`undefined`，`boolean`，`number`，`bigint `，`string`，`symbol`   
The number type represents both integer and floating point numbers.Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: `Infinit`y, `-Infinity` and `NaN`.   
String conversion happens when we need the string form of a value.
```js
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
```
The `Objec`t type is special. In contrast, objects are used to store collections of data and more complex entities.
```js
let a = { name: 'FE' }
let b = a
b.name = 'EF'
console.log(a.name) // EF
```
## Typeof
The `typeof` operator returns the type of the argument. It’s useful when we want to process values of different types differently or just want to do a quick check.
The`typeof` operator returns type of primitive types correctly except `null`
```js
typeof 1 // 'number'
typeof '1' // 'string'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof b // b hasn't declared, undefined
```
There’s no special “function” type in JavaScript. `Functions` belong to the `object` type. But `typeof` treats them differently, returning `"function"`. That’s not quite correct, but very convenient in practice.
```js
typeof [] // 'object'
typeof {} // 'object'
typeof console.log // 'function'
```
The result of `typeof null` is "object". That’s wrong. It is an officially recognized error in typeof, kept for compatibility. Of course, `null` is not an object. It is a special value with a separate type of its own.this is an error in the language.
```js
typeof null // 'object'
```
If we want to get a correctly data type,We can use `Object.prototype.toString.call(xx)`.Then We can get a string like `[object Type] `.
## Type Conversions
### Boolean Conversion
* Values that are intuitively “empty”, like `0`, an empty string`''`, `null`, `undefined`, and `NaN`, become false.
* Other values become true.
### Object to primitive conversion
To do the conversion, JavaScript tries to find and call three object methods:
1. Call `obj[Symbol.toPrimitive](hint)` – the method with the symbolic key` Symbol.toPrimitive` (system symbol), if such method exists,
2. Otherwise if hint is "string"
try `obj.toString()` and `obj.valueOf()`, whatever exists.
3. Otherwise if hint is "number" or "default"
try `obj.valueOf()` and `obj.toString()`, whatever exists.
```js
let a = {
  valueOf() {
    return 0;
  },
  toString() {
    return '1';
  },
  [Symbol.toPrimitive]() {
    return 2;
  }
}
1 + a // => 3
'1' + a // => '12'
```
## Operators
### String concatenation, binary +
Usually, the plus operator + sums numbers.But, if the binary + is applied to strings, it merges (concatenates) them:
```js
let s = "my" + "string";
alert(s); // mystring
```
Note that if one of the operands is a string, the other one is converted to a string too.For example:
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
```js
```
### Numeric conversion, unary +
If the operand is not a number, the unary plus converts it into a number.
```js
// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
```
if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?The binary plus would add them as strings,If we want to treat them as numbers, we need to convert and then sum them.
```js
let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23", the binary plus concatenates strings
alert( Number(apples) + Number(oranges) ); // 5
```