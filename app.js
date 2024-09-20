var velkommen ="Hei! Så hyggelig at du vil se hva jeg har fått til.";
alert(velkommen);
var spørsmål1 ="Kan du svare på tre spørsmål for meg? Jeg lover dette ikke er noe virus."
alert(spørsmål1);
var virus = "Jeg vet det er akkurat hva et virus ville ha sagt, men det er ikke det altså. Klar for spørsmål?"
alert(virus);

navn = prompt("Hva heter du?");
alder = prompt("Hvor gammel er du?")
sang = prompt("Hva er favorittsangen din?")


var message = "Hei " + navn + ", du er " + alder + " år gammel, og favorittsangen din er " + sang + "!";
alert(message);

var tusentakk = "Takk for hjelpen, trykk igjen for å se hva annet jeg kan!"
alert(tusentakk);

//Enkel kalkulator 

var gangeKnapp = document.getElementById("gangeKnapp");
var resultat = document.getElementById("resultat");

gangeKnapp.addEventListener("click", function(){
var tall1 = document.getElementById("tall1").value;
var tall2 = document.getElementById("tall2").value;
gangeResultat = tall1 * tall2;
resultat.textContent = "Resultatet er " + gangeResultat;
})

// bildegalleri

var next = document.getElementById("nextBtn"); 
var back = document.getElementById("backBtn");
var image = document.getElementById("image");
var description = document.getElementById("description");
var currentImage = 0;

//Image array
var images = [
    {
        link: "img/Bilde2.jpg",
        text: "Hurra for 17. mai!"
    },
    {
        link: "img/Bilde3.jpg",
        text: "Omvisning på Stortinget."
    },
    {
        link: "img/Bilde4.jpg",
        text: "Hjelp! Jeg blir spist av en hval!"
    },
    {
        link: "img/Bilde5.jpg",
        text: "Bryllupsgjester"
    },
    {
        link: "img/Bilde6.jpg",
        text: "Oslotur!"
    }
];


next.addEventListener("click", function(){
currentImage = currentImage + 1; 
if(currentImage === images.length){
    currentImage = 0;
}
image.src = images[currentImage].link;
description.textContent = images[currentImage].text;
});

back.addEventListener("click", function(){
currentImage = currentImage - 1;
if(currentImage === - 1){
    currentImage = images.length - 1; 
}
image.src = images[currentImage].link;
description.textContent = images[currentImage].text;
});

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    let currentPlayer = 'Human';
    let moves = 0;
  
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    function checkWin(player) {
      return winningCombinations.some(combination => {
        return combination.every(index => {
          return boxes[index].classList.contains(`box${player}`);
        });
      });
    }
  
    function checkDraw() {
      return moves === 9;
    }
  
    function handleClick(event) {
      const box = event.target;
      if (box.classList.contains('boxHuman') || box.classList.contains('boxComputer')) {
        return;
      }
  
      box.classList.add(`box${currentPlayer}`);
      moves++;
  
      if (checkGameStatus()) {
        return;
      }
  
      currentPlayer = currentPlayer === 'Human' ? 'Computer' : 'Human';
      if (currentPlayer === 'Computer') {
        computerMove();
      }
    }
  
    function computerMove() {
      const availableBoxes = Array.from(boxes).filter(box => 
        !box.classList.contains('boxHuman') && !box.classList.contains('boxComputer')
      );
      const randomBox = availableBoxes[Math.floor(Math.random() * availableBoxes.length)];
      randomBox.classList.add('boxComputer');
      moves++;
  
      if (checkGameStatus()) {
        return;
      }
  
      currentPlayer = 'Human';
    }
  
    function checkGameStatus() {
      if (checkWin(currentPlayer)) {
        setTimeout(() => {
          alert(`${currentPlayer} wins!`);
          resetGame();
        }, 100);
        return true;
      }
  
      if (checkDraw()) {
        setTimeout(() => {
          alert(`It's a draw!`);
          resetGame();
        }, 100);
        return true;
      }
  
      return false;
    }
  
    function resetGame() {
      setTimeout(() => {
        boxes.forEach(box => {
          box.classList.remove('boxHuman', 'boxComputer');
        });
        currentPlayer = 'Human';
        moves = 0;
      }, 500); // Delay to allow the alert to be seen
    }
  
    boxes.forEach(box => box.addEventListener('click', handleClick));
  });