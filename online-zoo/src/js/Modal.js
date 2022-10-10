export class Modal {
    constructor (classes) {
        this.classes = classes;
        this.modal = '';
        this.modalContent = '';
        this.modalCloseButton = '';
        this.modalBackground = '';

    }

    generateModal(content) {
        //background
        this.modalBackground = this.createDomNode(this.modalBackground, 'div', 'modalBackground');

        //modal
        this.modal = this.createDomNode(this.modal, 'div', 'modal');
        
        //modal content
        this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal_content');

        //close BUtton 
        this.modalCloseButton = this.createDomNode(this.modalCloseButton, 'span', 'modal_close-button');
        this.modalCloseButton.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 14C0.744141 14 0.488281 13.9023 0.292969 13.707C-0.0976562 13.3164 -0.0976562 12.6836 0.292969 12.293L12.293 0.292969C12.6836 -0.0976562 13.3164 -0.0976562 13.707 0.292969C14.0977 0.683594 14.0977 1.31641 13.707 1.70703L1.70703 13.707C1.51172 13.9023 1.25586 14 1 14Z" fill="#F6CEAA"/><path d="M13 14C12.7441 14 12.4883 13.9023 12.293 13.707L0.292969 1.70703C-0.0976562 1.31641 -0.0976562 0.683594 0.292969 0.292969C0.683594 -0.0976562 1.31641 -0.0976562 1.70703 0.292969L13.707 12.293C14.0977 12.6836 14.0977 13.3164 13.707 13.707C13.5117 13.9023 13.2559 14 13 14Z" fill="#F6CEAA"/></svg>';

        this.setContent(content);


        this.appendModalTemplate();

        //console.log(this.modal);

        //bind events

        this.bindEvents();

        //open modal window
        this.openModalWindow();
    }

    createDomNode (node, element, ...classes) {
        node = document.createElement(element);
        node.classList.add(... classes);
        return node;
    }

    setContent(content) {
        if(typeof content === 'string') {
            this.modalContent.innerHTML = content;
        } else {
            this.modalContent.innerHTML = '';
            this.modalContent.appendChild(content);
        }
    }

    appendModalTemplate() {
        this.modal.append(this.modalCloseButton);
        this.modal.append(this.modalContent);
        this.modalBackground.append(this.modal);
    }

    bindEvents() {
        this.modalCloseButton.addEventListener('click', this.closeModalWindow);
        this.modalBackground.addEventListener('click', this.closeModalWindow);
    }

    openModalWindow() {
        console.log(this.modalBackground);
        document.body.append(this.modalBackground);
    }

    closeModalWindow(e) {
        let classes = e.target.classList;
        if(classes.contains('modalBackground') || classes.contains('modal_close-button')) {
            document.querySelector('.modalBackground').remove();
        }
    }
}