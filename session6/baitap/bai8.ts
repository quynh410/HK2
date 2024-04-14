let firstName : string = "Nguyễn";
let lastName : string = "Nguy";

firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
var fullName = firstName + " " + lastName;
console.log(fullName); 
