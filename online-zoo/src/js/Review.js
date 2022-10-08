 import dataReview from "./dataReview";
 

 //-----------------Alexey

//  export default class Review {

//     /**
//      * 
//      * @param {object[]} reviews
//      * @param {HTMLElement} parent
//      * 
//      */
//     constructor(reviews, parent) { 
//         reviews.forEach( (review) => {
//             const reviewHTML =  this.generateReview(review);
//             const element = document.createElement('div');
//             element.innerHTML = reviewHTML;
//             parent.append(element);
//         });
//     }
//     generateReview(reviewItem) {
//         return `
//             <div class="gradient_border" data-id="${reviewItem.id}">
//                 <div class="testimonials_card">
//                     <div class="testimonials_card_head">
//                         <img src="${reviewItem.avatar}" alt="user" class="avatar">
//                         <div class="title_content">
//                             <p class="testimonials_title_card">${reviewItem.nameUser}</p>
//                             <p class="testimonials_subtitle">Local ${reviewItem.local} &bull; Today</p>
//                         </div>
//                     </div>
//                         <p class="testimonials_text">${reviewItem.content}<</p>
//                 </div>
//             </div>
//         `;
//     }
//  }



//-----------------------Vika

export class Review {
    constructor({ id, nameUser, local, content, avatar, ...rest }) {
        this.id = id;
        this.nameUser = nameUser;
        this.local = local;
        this.content = content;
        this.avatar = avatar;
    }

    //reviews generator
    generateReview() {
        let template = '';
        let review = document.createElement('review');
        review.className = 'gradient_border';
        review.setAttribute('data-id', this.id);

        template += `<div class="testimonials_card">`
            template += `<div class="testimonials_card_head">`

                this.avatar &&
                (template += `<img src=${this.avatar} alt="user" class="avatar">`)

                template += `<div class="title_content">`

                    this.nameUser &&
                    (template += `<p class="testimonials_title_card">${this.nameUser}</p>`)

                    this.local &&
                    (template += `<p class="testimonials_subtitle">Local ${this.local} &bull; Today</p>`)

                template += `</div>`

            template += `</div>`

            this.content &&
            (template += `<p class="testimonials_text"> ${this.content} </p>`)

        template += `</div>`

        review.innerHTML = template;
        return review;
    }
}