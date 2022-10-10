export class Pages {

    constructor(photos, container) {
        this.currentPage = 1;
        this.photos = photos;
        this.container = container;
        this.pages = {};
        this.addPageToContainer();
    }

    addPageToContainer() {
        if (!this.pages[this.currentPage]) {
            this.pages[this.currentPage] = this.generatePageIds();
        }
        this.pages[this.currentPage].forEach((id) => {
            const photoData = this.photos[id];
            const photoElement = this.generateHtmlItem(photoData);
            const element = document.createElement('div');
            element.classList.add('pet_animal_card');
            element.innerHTML = photoElement;
            this.container.append(element);
        });
    }

    generatePageIds() {
        const count = this.photos.length - 1;
        const idsSet = new Set;

        while (idsSet < 7) {
            idsSet.add(this.getRandomId(0, count));
        }

        return Array.from(idsSet);
    }

    getRandomId(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateHtmlItem(photo) {
        return `
            <img src='${photo.img}'>
            <div class="container">
                <p class="cont_title">${photo.animal}</p>
                <p class="cont_text">${photo.text}</p>
            </div>
            <div class="pets__content">
                <div class="content__card">
                    <p class="card_title">${photo.animal}</p>
                    <p class="card_text">${photo.text}</p>
                </div>
                <img src='${photo.icon}' class="icon_food">
            </div>
        `;
    }

}