const typeTextspan = document.querySelector(".type-text");
const cursor = document.querySelector(".cursor");
const word = ["Awesome", "Fun", "Cool", "Life", "Famous", "Weird"];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (word.length) {
    setTimeout(type, newLetterDelay);
  }
});
function type() {
  if (charIndex < word[index].length) {
    typeTextspan.textContent += word[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typeTextspan.textContent = word[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= word.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}
