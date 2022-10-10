import { Modal } from './Modal';

export class ReviewModal extends Modal {
    constructor (classes, content) {
        super(classes);
        this.renderModal(content);

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

    renderModal(dataReview) {
        const content  = this.generateReview(dataReview);
        super.generateModal(content);
    }
}