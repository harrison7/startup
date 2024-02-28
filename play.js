class Flask {

}

class Upgrade {
    constructor() {
        this.purchases = 0;
        this.price = 10;
    }

    purchase() {
        purchases++;
        price *= 10;
    }
}


class Game {
    elements;
    constructor() {
        this.elements = [0, 0, 0, 0, 0, 0, 0, 0];
        this.buttons = new Map();
    }

    pressButton(buttonType) {
        const button = this.buttons.get(buttonType);

        if (button) {
            button.addEventListener('click', () => {
                // Call the logic you want to execute when the button is clicked
                alert(`${buttonType} button clicked!`);
            });
        } else {
            console.error(`Button with type ${buttonType} not found.`);
        }
    }

    addButton(buttonType, buttonId) {
        const buttonElement = document.getElementById(buttonId);

        if (buttonElement) {
            this.buttons.set(buttonType, buttonElement);
        } else {
            console.error(`Button element with id ${buttonId} not found.`);
        }
    }
}

const game = new Game();