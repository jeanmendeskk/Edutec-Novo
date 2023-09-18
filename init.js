const buton = document.querySelector('.init')
const popup = document.querySelector('.popup-wrapper2')
const popup2 = document.querySelector('.popup-wrapper3')
const closeButton = document.querySelector('.popup-close2')
const closeButton2 = document.querySelector('.popup-close3')
const closeButton3 = document.querySelector('.popup-close4')
const closeButton4 = document.querySelector('.popup-close5')
const closeButton5 = document.querySelector('.popup-close6')
const buton2 = document.querySelector('.proxm')
const buton3 = document.querySelector('.ante')
const buton4 = document.querySelector('.proxm2')
const popup3 = document.querySelector('.popup-wrapper4')
const buton5 = document.querySelector('.ante2')
const buton6 = document.querySelector('.proxm3')
const popup4 = document.querySelector('.popup-wrapper5')
const buton7 = document.querySelector('.ante3')
const popup5 = document.querySelector('.popup-wrapper6')
const buton8 = document.querySelector('.proxm4')
const buton9 = document.querySelector('.fim')
const butonx = document.querySelector('.ante4')

buton.addEventListener('click', () =>  {
    popup.style.display = 'block'
})

closeButton.addEventListener('click', () => {
    popup.style.display = 'none'
})

closeButton2.addEventListener('click', () => {
    popup2.style.display = 'none'
})

closeButton3.addEventListener('click', () => {
    popup3.style.display = 'none'
})

closeButton4.addEventListener('click', () => {
    popup4.style.display = 'none'
})

closeButton5.addEventListener('click', () => {
    popup5.style.display = 'none'
})

buton2.addEventListener('click', () => {
    popup2.style.display = 'block'
    popup.style.display = 'none'
})

buton3.addEventListener('click', () => {
    popup2.style.display = 'none'
    popup.style.display = 'block'
})

buton4.addEventListener('click', () => {
    popup2.style.display = 'none'
    popup3.style.display = 'block'
})

buton5.addEventListener('click', () => {
    popup3.style.display = 'none'
    popup2.style.display = 'block'
})

buton6.addEventListener('click', () => {
    popup3.style.display = 'none'
    popup4.style.display = 'block'
})

buton7.addEventListener('click', () => {
    popup4.style.display = 'none'
    popup3.style.display = 'block'
})

buton8.addEventListener('click', () => {
    popup4.style.display = 'none'
    popup5.style.display = 'block'
})

butonx.addEventListener('click', () => {
    popup5.style.display = 'none'
    popup4.style.display = 'block'
})

buton9.addEventListener('click', () => {
    popup5.style.display = 'none'
})