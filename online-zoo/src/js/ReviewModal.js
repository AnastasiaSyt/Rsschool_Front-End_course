import { Modal } from './Modal';

export class ReviewModal extends Modal {
    constructor (classes, { reviews, parent, currentSize }) {
        super(classes);
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
        this.setCurrentActive(1);
    }

    generateReview(reviewItem) {
        return `
        <div class="gradient_border_pop">
            <div class="testimonials_card_pop">
                <div class="testimonials_card_head_pop">
                    <img src="${reviewItem.avatar}" alt="user" class="avatar_pop">
                    <div class="title_content">
                        <p class="testimonials_title_card_pop">${reviewItem.nameUser}</p>
                        <p class="testimonials_subtitle_pop">Local ${reviewItem.local} &bull; Today</p>
                    </div>
                </div>
                    <p class="testimonials_text_pop">${reviewItem.content}<</p>
            </div>
        </div>    
        `;
    }

    renderModal() {
        const content  = this.generateReview();
        super.generateModal(content);
    }
}