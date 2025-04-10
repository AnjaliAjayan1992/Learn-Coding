
function validateEmail() {
  const email = document.getElementById("email").value;
  const errorMsg = document.getElementById("error-msg");
  
  // Simple email regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return false; // prevent form submission
  }

  errorMsg.textContent = "";
  return true; // allow form submission
}








// const student = {
//   firstName: "Adam",
//   lastName: "Antony",
//   age: 10
// };


// let {firstName, lastName} = student;

// console.log(firstName + " " + lastName);


// const numbers = [45, 4, 9, 16, 25];
// let result = numbers.reduce(myFunction);

// function myFunction(total, value) {
//     return total + value;
//   }
// console.log(result)


// const numbers = [10, 20, 30, 40];
// const newArr = numbers.filter(myFunction);

// function myFunction(num) {
//   return num < 25;
// }
// console.log(newArr);





// const numbers = [10, 20, 30, 40];
// const newArr = numbers.map(myFunction);



// function myFunction(num) {
//   return num * 10;
// }
// console.log(newArr);


// const vegetables=['tomato','carrot','cabbage'];
// vegetables[0]='beetroot';
// vegetables.push('Beans');
// let vegetablesLength=vegetables.length;
// let output='';
// for(i=0; i<vegetablesLength; i++){
//     output+=vegetables[i] +"\n";
// }
// console.log(output);







// const flowers=['Rose', 'jasmine', 'hibiscus'];
// flowers.forEach(myfunction);
// function myfunction(value)
//   {
//     console.log(value);
//   }  


// let firstName='Anjali';
// let lastName='Ajayan';
// let fullName=`I am  ${firstName} ${lastName}`;
// console.log(fullName)

// function person(first, last, age)
// {
//  this.firstname=first,
//  this.lastname=last,
//  this.age=age,
//  this.fullName= function(){
//   return this.firstname + this.lastname
//  };
// }
// const father= new person('Akhilesh', 'Ajayan',60)
// const son=new person('Arush','Akhilesh',32)
// console.log (father.fullName() + ' is ' + father.age + ' years old ');
// console.log (son.fullName() + ' is ' + son.age + ' years old ');



//  let z=add(10,20);
//  function add(x,y){
//   return x+y;
//  }

//  let person={Name:"John", Age:"25"};
//  console.log (person.Name + ' is ' + person.Age + ' years old ');

//  const person = {
//     firstName:"John",
//     lastName: "Antony",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
// console.log(person.fullName())