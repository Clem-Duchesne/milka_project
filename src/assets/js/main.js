var plusBtn = document.getElementsByClassName('ingredients__button')[0];
var nutritionnalValues = document.getElementsByClassName('nutritional_values')[0];
console.log(nutritionnalValues);


function showDetails(){
    
    nutritionnalValues.classList.toggle('hidden');
    plusBtn.children[0].classList.toggle('fi-xnluxl-plus');
    plusBtn.children[0].classList.toggle('fi-xtluxl-minus-thin');
}
plusBtn.addEventListener('click', showDetails, false);



