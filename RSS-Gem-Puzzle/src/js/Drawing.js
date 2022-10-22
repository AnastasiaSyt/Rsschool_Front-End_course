import { Timer } from './Timer';

export class Drawing {
    tilesValue = []; //рандомные значения плиточек
    coordinates = []; //кординаты плиточек
    finalTiles = []; //выигрышное положение плиточек
    hoveredTile = null;
    tileCount = 4;
    canvasSize = 400;
    moves = 0;
    time = 0;
    movesContainer;

    constructor(container, moves, timerContainer) {
        this.container = container;
        this.movesContainer = moves;
        this.drawCanvas();
        this.addEventHandlers();
        this.tileSize = this.widthArea / this.tileCount;
        this.timer = new Timer(timerContainer);
    }

    updateSize() {
        if (this.heightArea !== this.canvas.clientHeight) {
            this.heightArea = this.canvas.clientHeight;
            this.widthArea = this.canvas.clientWidth;
            this.tileSize = this.widthArea / this.tileCount;
            this.getCoordinates();
        }
    }

    /**
     * Start new game with setted tiles count
     * @param {number} count
     */
    startNew(count = null) {
        this.drawMovies(0);
        if (count) {
            this.setupValues(count);
        }
        //start game
        this.initTilesValue();
        this.getCoordinates();
        this.getFinalTiles();
        this.drawTiles();
        this.timer.startTimer();
    }

    drawMovies(moves) {
        this.moves = moves;
        this.movesContainer.textContent = `Moves: ${moves}`;
    }

    setupValues(count) {
        this.tileCount = count;
        this.tileSize = this.widthArea / this.tileCount;
    }

    drawCanvas() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = this.canvasSize;
        this.canvas.height = this.canvasSize;
        this.widthArea = this.canvas.width;
        this.heightArea = this.canvas.height;
        this.container.appendChild(this.canvas);
    }

    /**
     * Функция генерирует исходный массив, для игры
     *
     */
    initTilesValue() {
        this.tilesValue = [];
        const tempValues = [];
        // проходим по строкам i
        for (let i = 0; i < this.tileCount; i++) {
            const rowTiles = [];
            //по столбцам
            for (let j = 0; j < this.tileCount; j++) {
                while (rowTiles.length !== this.tileCount) {
                    const randomValue = Math.floor(
                        Math.random() * this.tileCount ** 2
                    );
                    if (!tempValues.includes(randomValue)) {
                        rowTiles.push(randomValue); //добавляем рандомные значения в строки
                        tempValues.push(randomValue); //добавляем уникальные значения к уже существующим
                    }
                }
            }
            this.tilesValue.push(rowTiles);
        }
    }

    drawTiles() {
        this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
        const tileSize = this.canvasSize / this.tileCount;

        for (let i = 0; i < this.tilesValue.length; i++) {
            for (let j = 0; j < this.tilesValue.length; j++) {
                const dx = j * tileSize; //получение горизонтальной координаты
                const dy = i * tileSize; //Получение вертикальной координаты
                if (this.tilesValue[i][j]) {
                    this.ctx.beginPath();

                    if (
                        this.hoveredTile &&
                        this.hoveredTile.x === dx &&
                        this.hoveredTile.y === dy
                    ) {
                        this.ctx.fillStyle = '#0D9095';
                    } else {
                        this.ctx.fillStyle = 'white';
                    }

                    this.ctx.rect(dx, dy, tileSize, tileSize);
                    //this.ctx.drawImage(img, dx, dy);
                    this.ctx.fill();

                    //this.ctx.strokeStyle = '#AAAAAA';
                    this.ctx.strokeStyle = '#e5e5e5';
                    this.ctx.lineWidth = 8;
                    this.ctx.stroke();

                    this.ctx.font = 'bold 32px Arial';
                    this.ctx.fillStyle = '#BBBBBB';
                    this.ctx.textAlign = 'left';
                    this.ctx.textBaseline = 'middle';

                    const text = this.tilesValue[i][j];
                    const measuredText = this.ctx.measureText(text);
                    const centeredText = tileSize - measuredText.width; //центрирование текста в плиточке

                    this.ctx.fillText(
                        this.tilesValue[i][j],
                        dx + centeredText / 2,
                        dy + tileSize / 2
                    );
                }
            }
        }
        requestAnimationFrame(this.drawTiles.bind(this));
    }

    /**
     * Функция возвращает координаты верхнего левого угла каждой будущей ячейки
     */
    getCoordinates() {
        this.coordinates = [];
        for (let i = 0; i < this.tileCount; i++) {
            for (let j = 0; j < this.tileCount; j++) {
                this.coordinates.push({
                    i,
                    j,
                    x: j * this.tileSize,
                    y: i * this.tileSize,
                });
            }
        }
    }

    /**
     * Функция возвращает массив, который нужно получить в итоге
     * та раскладка, которая означает выигрыш
     */
    getFinalTiles() {
        const result = [];
        let counter = 1; // counter 1 для того чтобы финальная матрица начиналась с 1 в верхнем левом углу, а пустая ячейка была в нижнем правом
        for (let i = 0; i < this.tileCount; i++) {
            const finalStateRow = [];
            for (let j = 0; j < this.tileCount; j++) {
                finalStateRow.push(counter);
                counter++;
            }
            result.push(finalStateRow);
        }
        result[result.length - 1][this.tileCount - 1] = 0; //для того чтобы финальная матрица начиналась с 1 в верхнем левом углу, а пустая ячейка была в нижнем правом
        return result;
    }

    addEventHandlers() {
        this.canvas.addEventListener('mousemove', (e) => {
            const clientX = e.offsetX;
            const clientY = e.offsetY;
            // if (currentHover(clientX, clientY)) {
            //     return;
            // } //если мы уже над плиткой?
            this.hoveredTile = this.getHoveredTile(clientX, clientY);
        });

        this.canvas.addEventListener('mouseout', () => {
            this.hoveredTile = null;
        });

        //_______________Click to move tiles_____________________________________________

        this.canvas.addEventListener('click', (e) => {
            const clientX = e.offsetX;
            const clientY = e.offsetY;

            this.getAudio();

            if (this.currentHover(clientX, clientY)) {
                const tileUp = this.tilesValue[this.hoveredTile.i]?.[
                    this.hoveredTile.j + 1
                ] === 0 && {
                    i: this.hoveredTile.i,
                    j: this.hoveredTile.j + 1,
                };
                const tileDown = this.tilesValue[this.hoveredTile.i]?.[
                    this.hoveredTile.j - 1
                ] === 0 && {
                    i: this.hoveredTile.i,
                    j: this.hoveredTile.j - 1,
                };
                const tileLeft = this.tilesValue[this.hoveredTile.i - 1]?.[
                    this.hoveredTile.j
                ] === 0 && {
                    i: this.hoveredTile.i - 1,
                    j: this.hoveredTile.j,
                };
                const tileRight = this.tilesValue[this.hoveredTile.i + 1]?.[
                    this.hoveredTile.j
                ] === 0 && {
                    i: this.hoveredTile.i + 1,
                    j: this.hoveredTile.j,
                };

                const emptyTile = tileUp || tileDown || tileLeft || tileRight;

                if (emptyTile) {
                    const currentTile =
                        this.tilesValue[this.hoveredTile.i][this.hoveredTile.j];
                    this.tilesValue[this.hoveredTile.i][this.hoveredTile.j] = 0;
                    this.tilesValue[emptyTile.i][emptyTile.j] = currentTile;
                    this.hoveredTile = null;

                    this.drawMovies(this.moves + 1);
                }
            }
        });
    }

    getHoveredTile(clientX, clientY) {
        return this.coordinates.find((coord) => {
            return (
                clientX > coord.x &&
                clientX < coord.x + this.tileSize &&
                clientY > coord.y &&
                clientY < coord.y + this.tileSize
            );
        });
    }

    currentHover(clientX, clientY) {
        const currentTileHover =
            this.hoveredTile &&
            clientX > this.hoveredTile.x &&
            clientX < this.hoveredTile.x + this.tileSize &&
            clientY > this.hoveredTile.y &&
            clientY < this.hoveredTile.y + this.tileSize;
        return currentTileHover;
    }

    checkFinal() {
        for (let i = 0; i < this.tilesValue.length; i++) {
            for (let j = 0; j < this.tilesValue.length; j++) {
                if (this.tilesValue[i][j] !== this.finalTiles[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    getAudio() {
        const audioClick = new Audio('././Assets/audio/click.mp3');
        audioClick.play();
    }

    // moves() {
    //     const moveCount = document.getElementsByClassName('moves');
    //     let moves = 0;
    //     moves++;
    //     moveCount.innerHTML = `<h3>Moves: ${moves}<h3>`;
    // }
}
