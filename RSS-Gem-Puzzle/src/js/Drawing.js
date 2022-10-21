export class Drawing {
    tilesValue = []; //рандомные значения плиточек
    coordinates = []; //кординаты плиточек
    finalTiles = []; //выигрышное положение плиточек
    hoveredTile = null;
    widthArea = 400;
    heightArea = 400;
    tileCount = 4;
    moves = 0;
    time = 0;

    constructor(container, moves) {
        this.container = container;
        this.movesContainer = moves;
        this.tileSize = this.widthArea / this.tileCount;
        this.drawCanvas();
        this.addEventHandlers();
    }

    drawCanvas() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = this.widthArea;
        this.canvas.height = this.heightArea;
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
        this.ctx.clearRect(0, 0, this.widthArea, this.heightArea); //чтобы очищалось место сдвинутой ячейки

        for (let i = 0; i < this.tilesValue.length; i++) {
            for (let j = 0; j < this.tilesValue.length; j++) {
                const dx = j * this.tileSize; //получение горизонтальной координаты
                const dy = i * this.tileSize; //Получение вертикальной координаты
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

                    this.ctx.rect(dx, dy, this.tileSize, this.tileSize);
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
                    const centeredText = this.tileSize - measuredText.width; //центрирование текста в плиточке

                    this.ctx.fillText(
                        this.tilesValue[i][j],
                        dx + centeredText / 2,
                        dy + this.tileSize / 2
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
            console.log('handle');
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

                console.log(tileUp, tileDown, tileLeft, tileRight);
                const emptyTile = tileUp || tileDown || tileLeft || tileRight;

                if (emptyTile) {
                    const currentTile =
                        this.tilesValue[this.hoveredTile.i][this.hoveredTile.j];
                    this.tilesValue[this.hoveredTile.i][this.hoveredTile.j] = 0;
                    this.tilesValue[emptyTile.i][emptyTile.j] = currentTile;
                    this.hoveredTile = null;

                    this.moves++;
                    console.log(this.moves);
                    this.movesContainer.innerHTML = `<h3>Moves: ${this.moves}<h3>`;
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
