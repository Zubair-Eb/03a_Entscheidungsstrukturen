"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
const ageJohn = 30;
const ageMark = 30;

console.log(ageJohn);
console.log(ageMark);


// Deklaration
let isJohnOlder, isJohnEqual;


// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);

// if (ageJohn > ageMark) 
// {
//     console.log("John ist älter.");
// }

// if (isJohnOlder) {
//     // Ja-Zweig
//     console.log("John ist älter.");
// } 
//     else {
//     // Nein-Zweig
//     console.log("John ist jünger.");
// }

/************ Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older")

/************ IF - ELSE IF ************/
// mit alternativen Fällen (älter, jünger, gleich alt)
// Fallunterscheidung I
if (isJohnOlder) 
{
     // 1- Alernative
    console.log("John ist älter.");
} 
else if (isJohnEqual) 
{
    // else if () weitere Alternativen 
    console.log("John ist gleich alt.");
} 
else 
{
    // Nein-Zweig (letzte Alternative)
    console.log("John ist jünger.");
}