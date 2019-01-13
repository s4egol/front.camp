import popup from './index.html';
import './index.css';

class ErrorHandler {
    
    constructor() { }

    createInstance() {
        const appContainer = document.getElementById('source-container');

        this.popupContainer = document.createElement('div');
        this.popupContainer.classList.add('error-popup-container', 'hidden');
        this.popupContainer.innerHTML = popup;

        appContainer.appendChild(this.popupContainer);

        this.popupText = document.getElementById('error-popup-text');

        document.getElementById('close-popup-btn')
            .addEventListener('click', () => this.closePopup());
    }

    getInstance() {
        if (typeof ErrorHandler.instance === 'object') {
            return ErrorHandler.instance;
        }

        ErrorHandler.instance = this;
        this.createInstance()

        return ErrorHandler.instance;
    }

    closePopup() {
        this.popupContainer.classList.add('hidden');
        window.removeEventListener('scroll', this.disableScroll);
    }

    show(message) {       
        message = !message ? 'Something went wrong' : message;

        this.popupText.textContent = message;
        this.popupContainer.classList.remove('hidden');
        this.disableScroll = () => window.scrollTo(0, 0);

        window.addEventListener('scroll', this.disableScroll);
    }
}

export default ErrorHandler;