const smoothScroll = document.querySelectorAll("a[href^='#'");

smoothScroll.forEach(el => {
    el.addEventListener('click', function (e) {
        e.preventDefault();

        if (document.getElementById(this.getAttribute('href').replace('#', '')))
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: "smooth",
            });
    });
})

// for (let i = 0; i < smoothScroll.length; i++) {
//     const el = smoothScroll[i];

//     el.addEventListener('click', function (en) {
//         en.preventDefault();

//         if (document.getElementById(this.getAttribute("href").replace("#", "")))
//             document.querySelector(this.getAttribute("href")).scrollIntoView({
//                 behavior: "smooth",
//             });
//     });
// }