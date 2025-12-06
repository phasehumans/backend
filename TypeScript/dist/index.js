"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    console.log(`hello, good morning ${name}`);
}
greet("Chaitanya");
function sumF(num1, num2) {
    return num1 + num2;
}
console.log(sumF(2, 3));
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(19));
function delayFn(fn) {
    setTimeout(fn, 1000);
}
delayFn(function () {
    console.log("hello there");
});
