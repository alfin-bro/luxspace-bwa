import { addClass, removeClass } from "./utils-class";

// const sliders = document?.getElementsByClassName('slider');

// for (let i = 0; i < sliders.length; i++) {
//     const slide = sliders[i];

//     const items = slide?.querySelectorAll('.slider .items');
//     const preview = slide?.querySelector('div > .preview');

//     for (let x = 0; x < items.length; x++) {
//         const itemTrigger = items[x];

//         itemTrigger.addEventListener('click', function () {
//             const dataImg = this.attributes?.['data-img']?.value;

//             for (let trigger = 0; trigger < items.length; trigger++) {
//                 const triggerNeedToRemoved = items[trigger];
//                 removeClass(triggerNeedToRemoved, 'selected');
//             }
//             addClass(itemTrigger, 'selected');
//             preview.querySelector('img').setAttribute('src', dataImg);
//         })
//     }
// }

const sliders = document?.getElementsByClassName('slider');
for (let i = 0; i < sliders.length; i++) {
    const slide = sliders[i];
    const items = slide?.querySelectorAll('.slider .items');
    const preview = slide?.querySelector('div > .preview');

    for (let index = 0; index < items.length; index++) {
        const itemTrigger = items[index];
        
        itemTrigger.addEventListener('click', function () {

            for (let i = 0; i < items.length; i++) {
                const triggerRemoved = items[i];
                removeClass(triggerRemoved, 'selected');
            }
            const imgBox = itemTrigger?.querySelector('img');
            addClass(itemTrigger, 'selected');

            const imgPreview = preview?.querySelector('img');
            imgPreview.setAttribute('src', imgBox.src);
        }) 
    }
}