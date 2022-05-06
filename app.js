function entered() {
    
    let year = document.querySelector(`input`).value;

if (year % 100 !=0 && year % 4 ==0) {
    alert(`Year ${year} is a leap year.`)
} else if (year % 400 == 0) {
    alert(`Year ${year} is a leap year.`)
} else {
    alert(`Year ${year} is not a leap year.`)
}
}

document.querySelector('input').addEventListener
('keydown', function(event){
    if (event.key == 'Enter'){
        entered()
    }
})
