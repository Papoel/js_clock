let format
const optionDate = {weekday: 'long'}

// Define my div Clock (she must receive the current hour)
const clockElement = document.querySelector('.clock')
// Select all buttons (12 or 24 hours)
const spanElements = document.querySelectorAll('.days ul li span')

// Select all buttons (12 or 24 hours)
const formatElements = document.querySelectorAll('.format span')

// Get the Current Locale
const userLocale =
    navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;

// Get the current day
const date = new Date()
const currentDay = (new Intl.DateTimeFormat(userLocale, optionDate).format(date))

const format_time = clockElement.getAttribute('data-format')
document.querySelector('#format-' + format_time).classList.add("active")

// Display on page the current day
document.querySelector('#' + currentDay).classList.add("active")

// Call generateTime each second
setInterval(generateTime, 1000)

// Insert the current time
function generateTime() {
// Initialise the date format
    format = clockElement.getAttribute('data-format')
// Define my time variable
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes() + 3
    let sec = date.getSeconds()
    date = date.toLocaleTimeString()
// Define AM or PM instead current hour
    const ampm = (hour > 12) ? 'PM' : 'AM'
// Check the data-format in my div clock and display instead the choice
    if (format === '12') {
        hour = (hour > 12) ? hour % 12 : hour
    }

// Check if current minutes is < 10, in this case add a 0 before minutes
    if (min < 10) {
        min = '0' + min
    }

// Check if current seconds is < 10, in this case add a 0 before seconds
    if (sec < 10) {
        sec = '0' + sec
    }

// Insert inside my div the current time, and check if the format is 12, in this case display ampm
    if (format === '12') {
        clockElement.innerHTML = `<h1>${hour} : ${min} : ${sec} ${ampm}</h1>`
    } else {
        clockElement.innerHTML = `<h1>${hour} : ${min} : ${sec}</h1>`
    }

    displayWindowSize()
}

// loop on buttons and give to div clock the value of format time
formatElements.forEach(span => {
    // On click, I want to change the current time format
    span.addEventListener('click', () => {
        let format = span.getAttribute('data-format')
        clockElement.setAttribute('data-format', format)
        document.querySelector('#format-' + format).classList.add("active")

        // Verified the format and add or remove the button background color
        if (span.getAttribute('data-format') === '12') {
            document.querySelector('#format-24').classList.remove("active")
        } else {
            document.querySelector('#format-12').classList.remove("active")
        }
        generateTime()
    })
})

function displayWindowSize() {

    if (screen.width < 670) {
        // console.log('Ecran < 670px')
        spanElements.forEach(span => {
            if (!span.classList.contains("active")) {
                span.style.display = "none"
            }
        })
    } else {
        spanElements.forEach(span => {
            span.style.display = "inline"
        })
    }
}


