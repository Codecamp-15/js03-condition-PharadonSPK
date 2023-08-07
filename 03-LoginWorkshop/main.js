let user = prompt()
if (user !== 'codecamp' ) {
    user = 'guest'
} 

else if (user === 'codecamp') { password = prompt()
    if (password === '123456') { user = 'codecamp'
} else if (password !== '123456') {
        alert('wrong password')
    } 
    
}
alert('Welcome'+ ' ' + user)
// alert(user)