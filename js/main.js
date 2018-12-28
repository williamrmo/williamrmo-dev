// for modal

const $hideButton = document.getElementById('hide-modal')
const $modal = document.getElementById('modal')
const $overlay = document.getElementById('overlay')
const $mail = document.getElementById('modal-mail')

$hideButton.addEventListener('click', (e) => {
    $modal.style.animation = 'modalOut .8s forwards'
    $overlay.classList.remove('active')
})

$mail.addEventListener('click', (e) => {
    $modal.style.animation = 'modalIn .8s forwards'
    $overlay.classList.add('active')
})


// for burguer menu

const ipad = window.matchMedia('screen and (max-width: 768px)');
const menu = document.querySelector('.menu');
const burgerButton = document.getElementById('burguer-menu')

ipad.addListener(validation);

function validation(event) {
    if (event.matches){
        burgerButton.addEventListener('click', hideShow)
    } else {
        burgerButton.removeEventListener('click', hideShow)
    }
}
validation(ipad);

function hideShow () {
    if (menu.classList.contains('is-active')) {
        menu.classList.remove('is-active')
    } else {
        menu.classList.add('is-active')
    }
}

// for click banner