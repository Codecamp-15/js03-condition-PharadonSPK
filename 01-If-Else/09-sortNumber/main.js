// let input1 = +prompt ("Kub")
// let input2 = +prompt ("Cup")
// let input3 = +prompt ("Kab")

// if (input1 > input2 && input2 > input3 ) {
//     alert(input1,input2,input3)
    
// } 
// else if (input2 > input1 && input1 > input3) {
//     alert(input2,input1,input3)
// }
// else if (input3 > input2 && input2 > input1) {
//     alert(input3,input2,input1)
// }

let x = +prompt()
let y = +prompt()
let z = +prompt()
let max;
let min;
let mid;

if (x>=y&&x>=z){
    max = x;
    if (y>z){
        mid = y;
        min = z;
    } else {
        mid = z;
        min = y;
    }
}else if (y>=x&& y>=z) {
    max = y;
    if (x>=z){
        mid = x;
        min = z;
    } else{
        mid=z;
        min=x;
    }
}else if (z>=x&&z>=y){
    max=z;
    if(x>=y){
        mid=x;
        min=y;
    } else {
        mid=y;
        min=x;
    }
}
alert(`${max},${mid},${min}`)