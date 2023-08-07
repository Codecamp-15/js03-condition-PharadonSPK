let a = 1;
let b = 0;
let c = -1;
let input = +prompt()

switch (input) {
  case 1:
    alert( 'one' );
    break;
  case 0:
    alert( 'zero!' );
    break;
  case -1:
    alert( 'Minus zero' );
    break;
  default:
    alert('Invalid number');
}
