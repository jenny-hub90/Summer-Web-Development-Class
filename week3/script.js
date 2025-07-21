var a = 10;
var a = 12;
console.log(a);

let b = 10;
b = 12;
console.log(b);

const $c = 90;

console.log($c);
console.log(typeof $c);

let name = "jenny";
let cast = "rajak";
console.log(name + cast);

let attendance = {
  fullName: "jenny rajak",
  studentId: "np03a190026",
  classGroup: 3,
  classType: "tutorial",
  isPresent: true,
};
console.log(attendance);
console.log(attendance.isPresent);
console.log(attendance["isPresent"]);

let string1="Jenny";
let string2="Jeshmi";

if(string1===string2){
    console.log("The string is equal");
}else if(string1 !== string2){
    console.log("The string is not equal");
}

let age = prompt("Enter the age:");
if(age<=13){
    console.log("Child");
}else if(age>13 && age<=18){
    console.log("Teenager");
}else if(age>=19){
    console.log("Adult");
}
