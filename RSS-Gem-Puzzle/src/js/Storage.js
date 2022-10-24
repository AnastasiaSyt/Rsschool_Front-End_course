
export class Storage {
    board = [];
    lastGame = [];
    lastTime = 0; // seconds
    lastMoves = 0;
    constructor() {
        this.restoreBoard();
        this.restoreLastGame();
    }

    restoreBoard() {
        if (localStorage.getItem('board')) {
            this.board = localStorage.getItem('board');
        }
    }

    restoreLastGame() {
        if (localStorage.getItem('lastGame')) {
            this.lastGame = JSON.parse(localStorage.getItem('lastGame'));
        }
        if (localStorage.getItem('lastTime')) {
            this.lastTime = Number.parseInt(localStorage.getItem('lastTime'));
        }
        if (localStorage.getItem('lastMoves')) {
            this.lastMoves = Number.parseInt(localStorage.getItem('lastMoves'));
        }
    }

    /**
     * Save game to local storage
     * @param {number[][]} talesValues
     * @param {number} moves
     * @param {number} time
     */
    saveGame(talesValues, moves, time) {
        this.lastGame = JSON.parse(JSON.stringify(talesValues));
        localStorage.setItem('lastGame', JSON.stringify(talesValues));
        localStorage.setItem('lastTime', time);
        localStorage.setItem('lastMoves', moves);
    }

    saveBoard() {}
    addResult() {}
}
