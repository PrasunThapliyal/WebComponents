
class GameBoard extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'closed'});

        shadowRoot.innerHTML = 
        `                
            <style>
            .base-grid {
                border: 1px solid;
                width:300px;
                height: 300px;
                display: grid;
                grid-template-areas: 
                "red red step-top green green"
                "red red step-top green green"
                "step-left step-left finish step-right step-right"
                "yellow yellow step-bottom blue blue"
                "yellow yellow step-bottom blue blue";
                gap: 1px;
            }

            .base-grid > .red {
                grid-area: red;
                background-color: red;
                display: flex;
            }
            .four-dot-container {
                width: 60%;
                height: 60%;
                margin: auto;
                background-color: white;
            }
            .base-grid > .green {
                grid-area: green;
                background-color: green;
                display: flex;
            }
            .base-grid > .yellow {
                grid-area: yellow;
                background-color: yellow;
                display: flex;
            }
            .base-grid > .blue {
                grid-area: blue;
                background-color: blue;
                display: flex;
            }
            .base-grid > .step-top {
                grid-area: step-top;
                background-color: salmon;
            }
            .base-grid > .step-left {
                grid-area: step-left;
                background-color: salmon;
            }
            .base-grid > .step-right {
                grid-area: step-right;
                background-color: salmon;
            }
            .base-grid > .step-bottom {
                grid-area: step-bottom;
                background-color: salmon;
            }
            </style>
                    
            <div class="base-grid">
                <div class="red">
                    <div class="four-dot-container"></div>
                </div>
                <div class="green">
                    <div class="four-dot-container"></div>
                </div>
                <div class="yellow">
                    <div class="four-dot-container"></div>
                </div>
                <div class="blue">
                    <div class="four-dot-container"></div>
                </div>
                <div class="step-top"></div>
                <div class="step-left"></div>
                <div class="step-right"></div>
                <div class="step-bottom"></div>
                <div class="finish"></div>
            </div>
        `;
    }

    
    connectedCallback() {
        // console.log('GameBoard: connectedCallback');
    }
    
    disconnectedCallback() {
        
    }

    static get observedAttributes() {
        return ['attribute1', 'attribute2'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // console.log(`GameBoard: attributeChangedCallback: ${name}, ${oldValue}, ${newValue}`);

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
        // console.log(value);
    }

};

window.customElements.define('game-board', GameBoard);

{
    // Use properties to pass complex data
    // define a setter for this property in the component

    const gameBoard = document.querySelector('game-board');
    // console.log(gameBoard);
    gameBoard.data = {
        player1: 'P1',
        skillLevel: 10
    };
}