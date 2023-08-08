let input = prompt('');

if(input === null || input.trim()=== '' || isNaN(input)=== true) {alert ("Invalid number");}

else if (input > 0) {
    alert('Positive number');
  }
else if (input == 0) {
  alert('zero');
}

else {
    alert('Negative number');
  }

