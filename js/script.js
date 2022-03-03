let today = new Date()
const optionDate = {weekday: 'long'}
let localeFr = 'fr-FR'
let localeEn = 'en-US'
const currentDay = (new Intl.DateTimeFormat(localeFr, optionDate).format(today))

// Afficher l'heure
// const currentHour = today.getHours()
// const displayHour = document.querySelector('#hour')
// displayHour.innerHTML = currentHour

// Afficher les minutes
// const currentMinute = today.getMinutes()
// const displayMinute = document.querySelector('#minute')
// displayMinute.innerHTML = (currentMinute < 10 ? '0' : '') + currentMinute

// Afficher les secondes
// const currentSecond = today.getSeconds()
// const displaySecond = document.querySelector('#seconds')
// displaySecond.innerHtml = (currentSecond < 10 ? '0' : '') + currentSecond

// Affichage du jour dynamique
let dayToday = document.querySelector('#' + currentDay)
dayToday.style.color = '#00FF97'

function startTime() {
    today = new Date()

    function timeTo12HrFormat(time) {   // Take a time in 24 hour format and format it in 12 hour format
        // console.log(time)
        let time_array = time.split(":")
        let ampm = 'AM'

        if (time_array[0] >= 12) {
            ampm = 'PM'
        }

        if (time_array[0] > 12) {
            time_array[0] = time_array[0] - 12
        }

        let format_time
        format_time = time_array[0] + ':' + time_array[1] + ':' + time_array[2] + ' ' + ampm
        return format_time
    }

    const hourFormatEn = timeTo12HrFormat(today.toLocaleTimeString())
    const hourFormatFr = today.toLocaleTimeString()

    // document.querySelector('#time-hours').innerHTML = today.toLocaleTimeString();
    const hour = document.querySelector('#time-hours')
    hour.innerHTML = hourFormatFr

    setTimeout(function () {
        startTime()
    }, 1000);

    if (hour.innerHTML.length > 8) {
        document.querySelector('#short').classList.add("active")
    } else {
        document.querySelector('#long').classList.add("active")

        const display24 = document.querySelector('#long')
        const display12 = document.querySelector('#short')

        console.log(display24.classList.contains("active"))
    }
}

/*1. changement de active
2. ...*/


