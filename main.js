const home = document.getElementById('home')
let cmd = document.getElementById('cmd').style.display = 'none'
let aboutBot = document.getElementById('aboutBot').style.display = 'none'

const navHome = document.getElementById('navHome')
const navCmd = document.getElementById('navCmd')
const navAbout = document.getElementById('navAbout')

navHome.addEventListener('click', () => {
    home.style.display = 'block'
    document.getElementById('cmd').style.display = 'none'
    document.getElementById('aboutBot').style.display = 'none'
})

navCmd.addEventListener('click', () => {
    home.style.display = 'none'
    document.getElementById('cmd').style.display = 'block'
    document.getElementById('aboutBot').style.display = 'none'
})

navAbout.addEventListener('click', () => {
    home.style.display = 'none'
    document.getElementById('cmd').style.display = 'none'
    document.getElementById('aboutBot').style.display = 'block'
})