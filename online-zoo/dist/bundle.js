(()=>{"use strict";class e{constructor(e,t,a){this.reviews=e.map(((e,a)=>{const s=this.generateReview(e),o=document.createElement("div");return o.classList.add("gradient_border"),o.setAttribute("data-id",e.id),o.innerHTML=s,t.append(o),o})),this.changeStepsCount(a),this.setCurrentActive(1)}getReviewsCount(){return this.stepsCount}setCurrentActive(e){this.currentActive=Number.parseInt(e);const t=this.currentActive+this.screenLimit;this.reviews.forEach(((e,a)=>{e.classList.remove("active"),this.currentActive<=a&&a<t&&e.classList.add("active")}))}changeStepsCount(e){this.screenLimit="small"===e?3:4,this.stepsCount=this.reviews.length-1-this.screenLimit,this.currentActive>this.stepsCount?this.setCurrentActive(this.stepsCount):this.setCurrentActive(this.currentActive)}generateReview(e){return`\n            <div class="testimonials_card">\n                <div class="testimonials_card_head">\n                    <img src="${e.avatar}" alt="user" class="avatar">\n                    <div class="title_content">\n                        <p class="testimonials_title_card">${e.nameUser}</p>\n                        <p class="testimonials_subtitle">Local ${e.local} &bull; Today</p>\n                    </div>\n                </div>\n                    <p class="testimonials_text">${e.content}</p>\n            </div>\n        `}}const t=[{id:1,nameUser:"Michael John",local:"Austria",content:"We decided to visit this famous Zoo (one of the oldest in the world) over the Easter weekend on Good Friday. We decided to purchase the combo tickets which allows access both to the Zoo itself an stage Tropical Aquarium. Tickets were not cheap €40 each for one adult. We began our visit by going into the Tropical Aquarium first and I have to say this was the best part of the overall experience. I've never seen seen such hugh aquariums before it was amazing. The Zoo or tierpark itself was OK but I found that some of the enclosures were rather small for some of the bigger animals ,e.g. Elephants. So a bit disappointed with that in have to say. I guess you have to remember that the City of Hamburg has encroached upon the park over many years which limits development, hence a 4 and not a 5. If I were to visit again I would certainty go to the Tropical Aquarium that was impressive, but the Zoo no.",avatar:"../../assets/images/avatars/Ellipse 1.jpg"},{id:2,nameUser:"Irene Rubenyan",local:"Greece",content:"It was a great experience going to the zoo park Hagenbeck!! We had a little time when we went so we chose to get in the aquarium!! It was so clean, interesting and it had a big sort of animals!! It was like you were in a discovering were its every animal and it was more exciting like that!! You were close to some of them!! ",avatar:"../../assets/images/avatars/Ellipse 2.png"},{id:3,nameUser:"Fredericka Michelin",local:"Belarus",content:"Came to the zoo as we alway try and visit one when on holiday. Lots of animals to see, particularly like the penguins, seals and walrus’ It was a cold day so lots of the animals where trying to keep warm, but still plenty to see.Also visited the aquarium,it was nice but we have been to better, but plenty to look at.",avatar:"../../assets/images/avatars/Ellipse 3.png"},{id:4,nameUser:"Oska Samborska",local:"China",content:"My godson and his little brother really love zoos and their parents and I brought them to this famous zoo in Germany. The parents told me that they had the best array of animals, and they were allowed to feed certain animals such as monkeys, elephants and lamas. They have stalls providing food after passing the entrance and the min-car/trolley area. There are no fees but you are encouraged to make a donations, which most people do. Even one or two euros are appreciated by the staff. The kids have a fun times feeding the elephants and other animals.",avatar:"../../assets/images/avatars/Ellipse 4.png"},{id:5,nameUser:"Michael John",local:"Austria",content:"We decided to visit this famous Zoo (one of the oldest in the world) over the Easter weekend on Good Friday. We decided to purchase the combo tickets which allows access both to the Zoo itself an stage Tropical Aquarium. Tickets were not cheap €40 each for one adult. We began our visit by going into the Tropical Aquarium first and I have to say this was the best part of the overall experience. I've never seen seen such hugh aquariums before it was amazing. The Zoo or tierpark itself was OK but I found that some of the enclosures were rather small for some of the bigger animals ,e.g. Elephants. So a bit disappointed with that in have to say. I guess you have to remember that the City of Hamburg has encroached upon the park over many years which limits development, hence a 4 and not a 5. If I were to visit again I would certainty go to the Tropical Aquarium that was impressive, but the Zoo no.",avatar:"../../assets/images/avatars/Ellipse 5.jpg"},{id:6,nameUser:"Irene Rubenyan",local:"Greece",content:"It was a great experience going to the zoo park Hagenbeck!! We had a little time when we went so we chose to get in the aquarium!! It was so clean, interesting and it had a big sort of animals!! It was like you were in a discovering were its every animal and it was more exciting like that!! You were close to some of them!! ",avatar:"../../assets/images/avatars/Ellipse 6.jpg"},{id:7,nameUser:"Phillip D",local:"Belarus",content:"Came to the zoo as we alway try and visit one when on holiday. Lots of animals to see, particularly like the penguins, seals and walrus’ It was a cold day so lots of the animals where trying to keep warm, but still plenty to see.Also visited the aquarium,it was nice but we have been to better, but plenty to look at.",avatar:"../../assets/images/avatars/Ellipse 7.jpg"},{id:8,nameUser:"Alexey",local:"China",content:"My godson and his little brother really love zoos and their parents and I brought them to this famous zoo in Germany. The parents told me that they had the best array of animals, and they were allowed to feed certain animals such as monkeys, elephants and lamas. They have stalls providing food after passing the entrance and the min-car/trolley area. There are no fees but you are encouraged to make a donations, which most people do. Even one or two euros are appreciated by the staff. The kids have a fun times feeding the elephants and other animals.",avatar:"../../assets/images/avatars/Ellipse 8.jpg"},{id:9,nameUser:"Irene Rubenyan",local:"Greece",content:"It was a great experience going to the zoo park Hagenbeck!! We had a little time when we went so we chose to get in the aquarium!! It was so clean, interesting and it had a big sort of animals!! It was like you were in a discovering were its every animal and it was more exciting like that!! You were close to some of them!! ",avatar:"../../assets/images/avatars/Ellipse 9.jpg"},{id:10,nameUser:"Timosha",local:"Sweden",content:"Came to the zoo as we alway try and visit one when on holiday. Lots of animals to see, particularly like the penguins, seals and walrus’ It was a cold day so lots of the animals where trying to keep warm, but still plenty to see.Also visited the aquarium,it was nice but we have been to better, but plenty to look at.",avatar:"../../assets/images/avatars/Ellipse 10.jpg"},{id:11,nameUser:"Alexey",local:"China",content:"My godson and his little brother really love zoos and their parents and I brought them to this famous zoo in Germany. The parents told me that they had the best array of animals, and they were allowed to feed certain animals such as monkeys, elephants and lamas. They have stalls providing food after passing the entrance and the min-car/trolley area. There are no fees but you are encouraged to make a donations, which most people do. Even one or two euros are appreciated by the staff. The kids have a fun times feeding the elephants and other animals.",avatar:"../../assets/images/avatars/Ellipse 11.jpg"}];class a{constructor(e){this.classes=e,this.modal="",this.modalContent="",this.modalCloseButton="",this.modalBackground=""}generateModal(e){this.modalBackground=this.createDomNode(this.modalBackground,"div","modalBackground"),this.modal=this.createDomNode(this.modal,"div","modal"),this.modalContent=this.createDomNode(this.modalContent,"div","modal_content"),this.modalCloseButton=this.createDomNode(this.modalCloseButton,"span","modal_close-button"),this.setContent(e),this.appendModalTemplate(),this.bindEvents(),this.openModalWindow()}createDomNode(e,t,...a){return(e=document.createElement(t)).classList.add(...a),e}setContent(e){"string"==typeof e?this.modalContent.innerHTML=e:(this.modalContent.innerHTML="",this.modalContent.appendChild(e))}appendModalTemplate(){this.modal.append(this.modalCloseButton),this.modal.append(this.modalContent),this.modalBackground.append(this.modal)}bindEvents(){this.modalCloseButton.addEventListener("click",this.closeModalWindow),this.modalBackground.addEventListener("click",this.closeModalWindow)}openModalWindow(){console.log(this.modalBackground),document.body.append(this.modalBackground)}closeModalWindow(e){let t=e.target.classList;(t.contains("modalBackground")||t.contains("modal_close-button"))&&document.querySelector(".modalBackground").remove()}}class s extends a{constructor(e,t){super(e),this.renderModal(t)}generateReview(e){return`\n        <div class="gradient_border_pop">\n            <div class="testimonials_card_pop">\n                <div class="testimonials_card_head_pop">\n                    <img src="${e.avatar}" alt="user" class="avatar_pop">\n                    <div class="title_content">\n                        <p class="testimonials_title_card_pop">${e.nameUser}</p>\n                        <p class="testimonials_subtitle_pop">Local ${e.local} &bull; Today</p>\n                    </div>\n                </div>\n                    <p class="testimonials_text_pop">${e.content}<</p>\n            </div>\n        </div>    \n        `}renderModal(e){const t=this.generateReview(e);super.generateModal(t)}}window.onload=(function(){const e=document.querySelector(".header__logo-lines"),t=document.querySelector(".burger_menu"),a=document.querySelector(".close_ham"),s=document.querySelector(".darken_bg_ham");function o(){s.classList.remove("active"),t.classList.remove("active")}e.addEventListener("click",(function(){s.classList.add("active"),t.classList.add("active")})),s.addEventListener("click",o),a.addEventListener("click",o)}(),void console.log("Hello!"));const o=()=>window.innerWidth<=1e3&&window.innerWidth>640?"small":"big",n=document.getElementById("test_one");if(n){const a=new e(t,n,o()),i=document.getElementById("reviewSlider");i.setAttribute("max",a.getReviewsCount()),i.addEventListener("change",(e=>{const t=e.target.value;a.setCurrentActive(t)})),window.addEventListener("resize",(()=>{const e=o();a.changeStepsCount(e)})),document.querySelector(".layout_rows").addEventListener("click",(e=>{if(console.log(e.target),e.target.closest(".gradient_border_rows")){const o=e.target.closest(".gradient_border_rows").getAttribute("data-id"),n=(a=o,t.find((e=>e.id==a)));new s("review-modal",n)}var a}))}const i=document.getElementById("progress");if(i){const e=i.getElementsByTagName("input"),t=Array.prototype.reduce.call(e,((e,t)=>(e[t.getAttribute("value")]=t,e)),{}),a=document.getElementById("amount");i.addEventListener("change",(e=>{const t=e.target.value;a.setAttribute("value",t)})),a.addEventListener("change",(e=>{const a=e.target.value,s=t[a];s&&s.setAttribute("checked",!0)})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d]/gm,"")})),a.setAttribute("value",100),t[100].setAttribute("checked",!0)}document.getElementById("pet_slider")})();