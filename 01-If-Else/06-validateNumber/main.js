input1 = +prompt ("KUB")
input2 = +prompt ("Cup")

// if (input == 2 == 2)  {
//     alert('Even number');
//   }
// console.log(input1)
// console.log(input2)
if (isNaN(input1) || isNaN(input2)) {
    alert('Invalid number');
  }
  else {alert(input1+input2)}
