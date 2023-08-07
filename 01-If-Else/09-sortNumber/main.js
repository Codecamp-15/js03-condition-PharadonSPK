let input1 = +prompt ("Kub")
let input2 = +prompt ("Cup")
let input3 = +prompt ("Kab")

if (input1 > input2 && input2 > input3 ) {
    alert(input1,input2,input3)
    
} 
else if (input2 > input1 && input1 > input3) {
    alert(input2,input1,input3)
}
else if (input3 > input2 && input2 > input1) {
    alert(input3,input2,input1)
}

