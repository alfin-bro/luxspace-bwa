import { addClass, removeClass } from "./utils-class";

const accordion = document.getElementsByClassName('accordion');
for (let i = 0; i < accordion.length; i++) {
    const e = accordion[i];
    const classNameUlList = 'transition-transform duration-300';
    const ulList = e.getElementsByTagName('ul')[0];
    addClass(ulList, classNameUlList);

    const listTrigger = e.getElementsByTagName('button')[0];

    listTrigger.addEventListener('click', function () {
        if (ulList.className.indexOf('h-0') > -1) {
            removeClass(ulList, 'h-0')
            addClass(ulList, 'h-auto relative')
            addClass(listTrigger, '-rotate-180');
        } else {
            addClass(ulList, 'h-0')
            removeClass(ulList, 'h-auto')
            removeClass(listTrigger, '-rotate-180');
        }
    })
}
// const ulList = document.querySelectorAll('footer ul');
// const listTrigger = document.getElementsByClassName('list-trigger');
// for (let i = 0; i < listTrigger.length; i++) {
//     const e = listTrigger[i];
//     e.addEventListener('click', function () {
//         if (ulList.className.indexOf('h-0') > -1) {
//             removeClass(ulList, 'h-0 invisible opacity-0')
//             addClass(ulList, 'opacity-100')
//             addClass(listTrigger, '-rotate-180');
//
//         } else {
//             addClass(ulList, 'h-0 invisible opacity-0')
//             removeClass(ulList, 'opacity-100')
//             removeClass(listTrigger, '-rotate-180');
//
//         }

//     });
// }



