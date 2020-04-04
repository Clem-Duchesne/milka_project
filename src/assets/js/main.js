const sr = ScrollReveal();
var plusBtn = document.getElementsByClassName('details__button')[0];
var nutritionnalValues = document.getElementsByClassName('nutritional_values')[0];
var bannierFront = document.getElementsByClassName('presentation__page')[0];
var bannierBack = document.getElementsByClassName('presentation__page')[1];


function showDetails(){
    
    nutritionnalValues.classList.toggle('hidden');
    plusBtn.children[0].classList.toggle('fi-xnluxl-plus');
    plusBtn.children[0].classList.toggle('fi-xtluxl-minus-thin');
}
function showBackBannier(){
    bannierFront.classList.toggle('hidden');
    sr.reveal('.presentation__page:nth-child(2)');
    bannierBack.classList.toggle('hidden');
    setTimeout(function(){
        bannierBack.classList.toggle('hidden');
        
        sr.reveal('.presentation__page:nth-child(1)');
        bannierFront.classList.toggle('hidden');
    },3000);
}
plusBtn.addEventListener('click', showDetails, false);
bannierFront.addEventListener('mouseover',showBackBannier, false);

sr.reveal('.presentation__button', {scale : 0.5, reset : true});
sr.reveal('.details__product', {origin : 'left', distance : '5%', reset : true});
sr.reveal('.details__ingredients', {origin : 'right', distance : '5%', delay : 200, reset : true});
sr.reveal('.cow__picture', {origin : 'left', distance : '5%', reset : true});
sr.reveal('.cow__presentation div', {origin : 'right', distance : '5%', delay : 200, reset : true});
sr.reveal('.recipe', {origin : 'bottom', duration : 1000, distance : '5%', reset : true});