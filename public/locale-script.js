const spriteSheet = "/assets/img/games/dbz_char_map.png";
const spriteWidth = 72;
const spriteHeight = 88;

// Characters
const characters = [
    { name: "Goku ssj2", min: 5000, max: 5999, row: 0, col: 0 },
    { name: "Majin Vegeta", min: 6000, max: 6999, row: 0, col: 1 },
    { name: "Ultimate Gohan", min: 7000, max: 7999, row: 0, col: 2 },
    { name: "Gotenks", min: 8000, max: 8999, row: 0, col: 3 },
    { name: "SuperVegito", min: 9000, max: 10000, row: 0, col: 4 },
    { name: "Piccolo", min: 4000, max: 4999, row: 1, col: 0 },
    { name: "Frieza Final Form", min: 6000, max: 6999, row: 1, col: 1 },
    { name: "Perfect Cell", min: 7000, max: 7999, row: 1, col: 2 },
    { name: "Fat Buu", min: 3000, max: 3999, row: 1, col: 3 },
    { name: "Kid Buu", min: 8000, max: 8999, row: 1, col: 4 },
];

// DOM
const powerLevelSpan = document.querySelector('.power-level');
const characterMessage = document.getElementById('character-message');
const scouterSound = document.getElementById('scouter-sound');
const startButton = document.getElementById('start-button');
const charCanvas = document.getElementById('character-canvas');
const ctx = charCanvas.getContext('2d');

// Load sprite sheet
const sheetImg = new Image();
sheetImg.src = spriteSheet;

let spriteLoaded = false;
sheetImg.onload = () => {
    spriteLoaded = true;
    console.log("Sprite sheet loaded!");
};

// Draw character on canvas
function drawCharacter(char) {
    if (!spriteLoaded) return;
    ctx.clearRect(0, 0, spriteWidth, spriteHeight);
    ctx.drawImage(
        sheetImg,
        char.col * spriteWidth,
        char.row * spriteHeight,
        spriteWidth,
        spriteHeight,
        0, 0,
        spriteWidth,
        spriteHeight
    );
}

// Helpers
function getCharacterByPower(power) {
    return characters.find(c => power >= c.min && power <= c.max);
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10000) + 1;
}

// Main scanning function
function startPowerLevel() {
    if (!spriteLoaded) {
        alert("Sprite sheet is still loading, please wait...");
        return;
    }

    characterMessage.classList.add('hidden');
    scouterSound.currentTime = 0;
    scouterSound.play();

    const interval = setInterval(() => {
        const randomPower = getRandomNumber();
        powerLevelSpan.textContent = randomPower;

        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        drawCharacter(randomChar);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        scouterSound.pause();

        const finalPower = getRandomNumber();
        powerLevelSpan.textContent = finalPower;

        const resultChar = getCharacterByPower(finalPower);

        if (!resultChar) {
            characterMessage.textContent = "You're Yamcha";
            characterMessage.classList.remove('hidden');
            ctx.clearRect(0, 0, spriteWidth, spriteHeight);
            return;
        }

        characterMessage.textContent = `You're ${resultChar.name}!`;
        characterMessage.classList.remove('hidden');
        drawCharacter(resultChar);

    }, 4000);
}

// Event listener
startButton.addEventListener('click', startPowerLevel);
