const container = document.querySelector('.container');
const trainersSlider = document.querySelector('.trainers_slider-container');
const trainersContainer = document.querySelector('.trainers_container');
const trainerCard = document.querySelector('.trainer_section');
const trainerCards = document.querySelectorAll('.trainer_section');
const trainersButtons = document.querySelectorAll('.trainers_nav-button');

function toggletrainer(button) {
    for (trainerButton of trainersButtons) {
        trainerButton.classList.remove("active_trainer-tab");
    }
    button.classList.add('active_trainer-tab');
    let slideWidth = trainerCard.scrollWidth;
    let transformWidth = 'calc((-' + slideWidth + 'px + -100vw)*'+ button.value +')';
    let transforme = 'translate(' + transformWidth + ', 0px)';
    trainersContainer.style.transform = transforme;
}
window.onload = function() {
    if (window.innerWidth < 726) {
        return
    }
    let containerWidth = container.scrollWidth + 'px';
    trainerCards.forEach(card => { card.style.width = containerWidth});;
}