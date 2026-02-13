const messages = [
    "Are you sure?",
    "ARE YOU Really sure??",
    "Babyyy please...",
    "Usikuwe ivo :(",
    "If you say no, I'm gonna be cooked, ntachizi haha...",
    "Ntakuwa very very sad, deadass...",
    "My heart is breaking... 💔",
    "Ok fine, I will stop asking...",
    "TRICIA, TAP YES! ❤️"
];
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}