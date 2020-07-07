const date = new Date();

const renderCal = () => {

    date.setDate(1);

    const monthDays = document.querySelector('.days');

    // +1 gives last day of current month
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    // give last days of prev month
    const prevLastDay =  new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const firstDayIndex = date.getDay();

    //getDay return index number
    const lastDayIndex =  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    let months = [
        'January',
        'Feburary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    document.querySelector('.date h1').innerHTML
    = months[date.getMonth()];

    document.querySelector('.date p').innerHTML
    = new Date().toDateString();

    let days = '';

    for(let x = firstDayIndex; x > 0; x-- ){
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for(let i = 1 ; i<= lastDay; i++) {
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="today">${i}</div>`
        } else {
            days += `<div>${i}</div>`  
        }
    }

    for(let j = 1; j <= nextDays; j++){
        days += `<div class="next-date">${j}</div>`
        monthDays.innerHTML = days;
    };

}

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() -  1)
    renderCal();
})

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1)
    renderCal();
})


renderCal();

let focus = () =>{
    document.querySelector('.days').addEventListener('click', () => {
        console.log('I was clicked');
    })
}

focus();

// when day is clicked, toggle class

// css display:none
// create function to show on click
// function to hide on click



// use localstorage to save data
// some how to show that event is on that date