// class Flask {

// }

// class Upgrade {
//     constructor() {
//         this.purchases = 0;
//         this.price = 10;
//     }

//     purchase() {
//         this.purchases++;
//         this.price *= 10;
//     }
// }


// class Game {
//     elements;
//     constructor() {
//         this.elements = [0, 0, 0, 0, 0, 0, 0, 0];
//     }

//     pressButton(buttonType) {
//         const button = this.buttons.get(buttonType);

//         if (button) {
//             alert(`${buttonType} button clicked!`);
//         } else {
//             console.error(`Button with type ${buttonType} not found.`);
//         }
//     }

//     addButton(buttonType, buttonId) {
//         const buttonElement = document.getElementById(buttonId);

//         if (buttonElement) {
//             this.buttons.set(buttonType, buttonElement);

//             buttonElement.addEventListener('click', () => {
//                 this.pressButton("flask");
//             });
//         } else {
//             console.error(`Button element with id ${buttonId} not found.`);
//         }
//     }
// }

// const game = new Game();

let clicks = 0;
let elements = [0, 0, 0, 0, 0, 0, 0, 0];
let upgrades = [0, 0, 0, 0, 0, 0, 0];

function create() {
    clicks += 1;
    updateElements()
}

function updateElements() {
    elements[0] += (2 ** upgrades[0]);
    if (clicks % 8 == 0) {
        elements[1] += (2 ** upgrades[1]);
    }

    document.getElementById('hydrogen').textContent = elements[0];
    document.getElementById('helium').textContent = elements[1];
}