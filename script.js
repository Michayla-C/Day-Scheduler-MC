$ (document).ready (function() {
    let d = new Date()

    let year = d.getFullYear()
    let month = d.getMonth()+1;
    let day = d.getDate()
    
    let totalDays = new Date(year, month, 0).getDate()
    
    let output = (month <10 ? '0': '') + month + '/' + (day <10 ? '0' : '') + '/' + year;
})

$ ('.date').text('')

let row = 0, length = 0, colum = 0
let timeObj = {
    "8 AM" : 1,
    "9 AM" : 2,
    "10 AM" : 3,
    "11 AM" : 4,
    "12 PM" : 5,
    "1 PM" : 6,
    "2 PM" : 7,
    "3 PM" : 8,
    "4 PM" : 9,
    "5 PM" : 10,
}

$('.taskContainerForm').submit(function(e) {
    e.preventDefault()

    row = timeObj [$ ("#start").val()]

    length = (timeObj [$ ("#end").val()]) - (timeObj[$("#start").val()])

    $('.task').append (`<div class='event' style='grid-row:${row}/span ${length});
    grid-coloum:${column};backgroung-colour: yellow;'>Reservationn</div`)
    $('.tasksContainerForm') [0].reset()
    $('.tasksContainerForm').off()
    $('.tasksContainer').toggle()
})

$ ('.tasksContainer').toggle()

$ ('.tasksContainerClose').click(function() {
    $('.tasksContainer').css('displey', 'none')
})

colum = e.target.className.match(/\d+/) [0]