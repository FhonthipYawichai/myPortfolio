const textContainer = document.getElementById('text-container');

const phrases = [
  'Coder',
  'Designer'
];

let phraseIndex = 0;
let charIndex = 0;
let typing = true;

function typeText() {
  if (charIndex < phrases[phraseIndex].length) {
    textContainer.innerHTML += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
  } else {
    typing = false;
  }
}

function deleteText() {
  if (charIndex > 0) {
    textContainer.innerHTML = textContainer.innerHTML.slice(0, 0);
    charIndex--;
  } else {
    typing = true;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }
}

function typingAnimation() {
  if (typing) {
    typeText();
  } else {
    deleteText();
  }
  setTimeout(typingAnimation, typing ? 400 : 50); // Adjust the typing and deleting speed (in milliseconds) as needed
}

typingAnimation();
