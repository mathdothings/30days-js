const data = asabenehChallenges2020
const {
    challengeTitle: title,
    challengeYear: year,
    challengeSubtitle: subtitle,
    challenges,
} = data

// generate random rgb colors

function randomColor() {
    const color = []
    for (let x = 0; x < 3; x++) {
        let random = Math.floor(Math.random() * 256)
        color.push(random)
    }

    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}

function changeColor() {
    setInterval(() => {
        yearElement.style.color = randomColor()
    }, 1000)
}

function getCurrentDate() {
    // YY/DD/MM hh:mm:ss
    const date = new Date()
    const year = date.getFullYear()
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    let month = date.getMonth()
    month = months[month]
    const day = date.getDate()
    const hour = date.getHours()
    let min = date.getMinutes()
    min <= 10 ? (min = '0' + min) : min
    const sec = date.getSeconds()
    return `${year}/${day}/${month} ${hour}:${min}:${sec}`
}

function changeDate() {
    setInterval(() => {
        dateElement.textContent = getCurrentDate()
    }, 1000)
}

// apply general css rules
const all = document.querySelector('*')
all.style.textAlign = 'center'
all.style.fontFamily = 'Arial'

// create elements and append elements to html body
const titleElement = document.createElement('h1')
document.body.appendChild(titleElement)
titleElement.textContent = title + ' in '
titleElement.style.display = 'inline'
titleElement.style.marginRight = '10px'

const yearElement = document.createElement('span')
document.body.appendChild(yearElement)
yearElement.textContent = year
yearElement.style.fontFamily = 'sans'
yearElement.style.color = changeColor()
yearElement.style.fontSize = '5rem'

const subtitleElement = document.createElement('h2')
document.body.appendChild(subtitleElement)
subtitleElement.textContent = subtitle
subtitleElement.style.textDecoration = 'underline'
subtitleElement.style.fontFamily = 'serif'
subtitleElement.style.fontSize = '1.15rem'

const dateElement = document.createElement('p')
document.body.appendChild(dateElement)
dateElement.textContent = changeDate()
dateElement.style.fontFamily = 'monospaced'
dateElement.style.fontSize = '1.5rem'
dateElement.style.margin = '2rem auto'
dateElement.style.padding = '1rem'
dateElement.style.backgroundColor = 'purple'
dateElement.style.width = 'fit-content'

const list = document.createElement('ul')
document.body.appendChild(list)
challenges.forEach((challenge) => {
    const li = document.createElement('li')
    list.appendChild(li)
    list.style.listStyle = 'none'
    list.style.display = 'inline'
    li.textContent = challenge.name
    li.style.marginBottom = '0.25rem'
    li.style.padding = '1rem'
    li.style.display = 'flex'
    li.style.alignItems = 'center'
    li.style.justifyContent = 'space-between'
    if (challenge.status === 'Done') {
        li.style.backgroundColor = 'green'
    }

    if (challenge.status === 'Ongoing') {
        li.style.backgroundColor = 'yellow'
    }

    if (challenge.status === 'Coming') {
        li.style.backgroundColor = 'red'
    }

    // details
    const details = document.createElement('details')
    li.appendChild(details)
    const summary = document.createElement('summary')
    summary.textContent = challenge.name.split('Of')[1]
    details.appendChild(summary)
    const topics = document.createElement('p')
    topics.textContent = challenge.topics
    details.appendChild(topics)

    // status
    const status = document.createElement('p')
    li.appendChild(status)
    status.textContent = challenge.status
})
