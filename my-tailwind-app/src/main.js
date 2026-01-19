import './style.css'
import mobileNavHTML from './components/mobile-nav.html?raw';

document.addEventListener('DOMContentLoaded', () => {

    const openMobileNav = document.getElementById('open-mobile-nav');

    const container = document.createElement('div');
    container.innerHTML = mobileNavHTML;
    const mobileNavDialog = container.firstElementChild;

    if (!(mobileNavDialog instanceof HTMLDialogElement)) {
        console.error('mobile-nav.html did not start with a <dialog> element');
        return;
    }

    document.body.appendChild(mobileNavDialog);

    openMobileNav.addEventListener('click', () => {
        mobileNavDialog.showModal();
    });
});