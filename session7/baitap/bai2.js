"use strict";
let numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Duyệt từng mảng 
console.log("các số lớn hơn 2 và nhỏ hơn 5 là");
for (let i = 0; i < numberss.length; i++) {
    if (numberss[i] > 2 && numberss[i] < 5) {
        console.log(numberss[i]);
    }
}
