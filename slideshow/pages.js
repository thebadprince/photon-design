let pageNumber = 0

const pages = [
    {
        copy: "...is a Brooklyn-based team of passionate nerds working in health technology",
        background: "#D6F49D",
        circle: "#FB5607"
    },
    {
        copy: "...builds modern prescribing tools that keep providers off the phone from pharmacies",
        background: "#C9E4CA",
        circle: "#8338EC"
    },
    {
        copy: "...lets patients choose their pharmacy, select pick up time, and get realtime updates",
        background: "#D6BBC0",
        circle: "#3066BE"
    },
    {
        copy: "...is a marketplace where patients can price shop for prescriptions",
        background: "#FFECCC",
        circle: "#A4303F"
    },
    {
        copy: "...is changing the economics of healthcare by bringing transparency to prescriptions",
        background: "#FFD791",
        circle: "#DB3069"
    }
]

const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')


const next = function() {
    pageNumber = pageNumber + 1

    if (pageNumber > pages.length - 1) {
        pageNumber = 0
    }

    updateSection()
}

const previous = function() {
    pageNumber = pageNumber - 1

    if (pageNumber < 0) {
        pageNumber = pages.length - 1
    }

    updateSection()
}

const updateSection = function() {
    outputTag.innerHTML = pages[pageNumber].copy
    circleTag.style.backgroundColor = pages[pageNumber].circle
    bodyTag.style.backgroundColor = pages[pageNumber].background
}


nextTag.addEventListener('click', function() {
    next()    
})

previousTag.addEventListener('click', function() {
    previous()
})