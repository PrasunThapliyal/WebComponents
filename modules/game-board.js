
class GameBoard extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = 
        `
            <div style="width:300px; height:300px; border:1px solid">

            </div>
        `;
    }
};

window.customElements.define('game-board', GameBoard);