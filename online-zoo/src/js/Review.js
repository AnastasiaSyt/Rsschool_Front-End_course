export class Review {

    /**
     * 
     * @param {object[]} reviews
     * @param {HTMLElement} parent
     * 
     */
    constructor(reviews, parent, currentSize) {
        this.reviews = reviews.map((review, index) => {
            const reviewHTML =  this.generateReview(review);
            const element = document.createElement('div');
            element.classList.add('gradient_border');
            element.setAttribute('data-id', review.id);
            element.innerHTML = reviewHTML;
            parent.append(element);

            return element;
        });

        this.changeStepsCount(currentSize);
        this.setCurrentActive(1)
    }

    getReviewsCount() {
        return this.stepsCount;
    }

    setCurrentActive(value) {
        this.currentActive = Number.parseInt(value);
        const highLimit = this.currentActive + this.screenLimit;
        this.reviews.forEach((review, index) => {
            review.classList.remove('active');
            if (this.currentActive <= index && index < highLimit) {
                review.classList.add('active');
            }
        });
    }

    /**
     * 
     * @param {string} screenType 
     */
    changeStepsCount(screenType) {
        this.screenLimit = screenType === 'small' ? 3 : 4;
        this.stepsCount = this.reviews.length - 1 - this.screenLimit;
        if (this.currentActive > this.stepsCount) {
           this.setCurrentActive(this.stepsCount);
        } else {
            this.setCurrentActive(this.currentActive);
        }
    }

    generateReview(reviewItem) {
        return `
            <div class="testimonials_card">
                <div class="testimonials_card_head">
                    <img src="${reviewItem.avatar}" alt="user" class="avatar">
                    <div class="title_content">
                        <p class="testimonials_title_card">${reviewItem.nameUser}</p>
                        <p class="testimonials_subtitle">Local ${reviewItem.local} &bull; Today</p>
                    </div>
                </div>
                    <p class="testimonials_text">${reviewItem.content}<</p>
            </div>
        `;
    }
}
