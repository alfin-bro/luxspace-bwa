import { addClass, removeClass } from './utils-class';

const btnVideo = document.getElementsByClassName('modal-trigger');
const modalOverlayClassName = "fixed inset-0 bg-black opacity-40";

for (let i = 0; i < btnVideo.length; i++) {
    const e = btnVideo[i];
    e.addEventListener('click', function () {
        const modalWrapper = document.createElement('div');
        const modalOverlay = document.createElement('div');

        modalOverlay.addEventListener('click', function () {
            modalWrapper.remove();
        })
        addClass(modalWrapper, 'fixed inset-0 z-50 w-100 flex justify-center items-center min-h-screen');
        addClass(modalOverlay, modalOverlayClassName);

        const modalContent = document.createElement('div');
        modalContent.innerHTML = e.attributes?.["data-content"].value;
        addClass(modalContent, 'md:w-3/4 md:h-3/4 shadow-lg p-0 z-50 opacity-100');


        modalWrapper.append(modalOverlay);
        modalWrapper.append(modalContent);
        document.body.append(modalWrapper);
    })
}