
class GameBoard extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'closed'});

        shadowRoot.innerHTML = 
        `
            <style>
                #game-board-box {
                    width: 300px;
                    height: 300px;
                    border: 5px solid;
                    background-color: blue;
                    transform: rotate(45deg);
                }
            </style>

            <div id="game-board-box">

            </div>
        `;
    }

    
    connectedCallback() {
        console.log('connectedCallback');
    }
    
    disconnectedCallback() {
        
    }

    static get observedAttributes() {
        return ['attribute1', 'attribute2'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`attributeChangedCallback: ${name}, ${oldValue}, ${newValue}`);

        switch (name) {
            case 'attribute1':
                this.attribute1 = newValue || '';
                break;
            case 'attribute2':
                this.attribute2 = newValue || '';
                break;
            }

        // And then render again
    }

    set data(value) {
        console.log(value);
    }

};

window.customElements.define('game-board', GameBoard);

{
    // Use properties to pass complex data
    // define a setter for this property in the component

    const gameBoard = document.querySelector('game-board');
    console.log(gameBoard);
    gameBoard.data = {
        player1: 'P1',
        skillLevel: 10
    };
}