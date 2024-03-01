//input for name 
let name = null;
name=prompt("Enter your name");
//input for age
let age =null;
age=prompt("Enter your age");
//validation for name, age
if(name == "" && parseInt(age) && age == "") {
   //display alert error if name or age are not entered from client or age is not integer
   alert("You need to enter name and age");
}
else {
   //display success alert to client
   alert(`Hello ${name} ! Nice to see you`);
}

