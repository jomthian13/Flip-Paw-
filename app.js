//selector
const container = document.querySelector(".container");
const photo = document.querySelector(".game-keys");
const score = document.querySelector(".game-score");
const fail = document.querySelector(".game-fail");
const reset = document.querySelector(".btn-reset");

let counter = 0;
//event listener
photo.addEventListener('click', photoFlip)
reset.addEventListener('click', resetGame)

//shuffle function
window.onload = function() {
    for (var i = 0; i < photo.children.length; i++) {
        photo.append(photo.children[Math.random() * i | 0]);
    }
  };

//main-function
function photoFlip(event) {
    const key = event.target;
    const cardId = key.querySelector('img').id;
    console.log(key.querySelector('img').id)
    const firstPhoto = container.dataset.firstPhoto;
    if (cardId == "paw!") {
        key.classList.add("reveal")
        alert("Behold Paw Magic!!")
        fail.textContent = 0;
        if (firstPhoto.id == "paw!") {
            container.dataset.firstPhoto = '';
        }
    }else if (counter === 0) {
    key.classList.add("reveal")
    key.id = "flipped";
    container.dataset.firstPhoto = key.innerHTML
    counter++
    }else if (counter > 0) {
        if (firstPhoto === key.innerHTML) {
        key.classList.add("reveal");
        key.id = "flipped";
        score.textContent = parseFloat(score.textContent) + 1;
        counter = 0;
        container.dataset.firstPhoto = '';
        } else {
            key.classList.add("reveal");
            fail.textContent = parseFloat(fail.textContent) + 1;
            setTimeout(function(){
                key.classList.remove("reveal")
            }, 1000)
        }
    }
    
}
//reset
function resetGame(event) {location.reload()}