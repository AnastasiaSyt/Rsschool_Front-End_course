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