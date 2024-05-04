gsap.registerPlugin(ScrollTrigger);


function initScrollAnimations() {

    const splitTypes = document.querySelectorAll('.reveal-type');


    splitTypes.forEach((char) => {

        const bg = char.dataset.bgColor;
        const fg = char.dataset.fgColor;


        const text = new SplitType(char, { types: 'chars' });

        gsap.fromTo(text.chars, {
            color: bg,
        }, {
            color: fg,
            duration: 0.3,
            stagger: 0.01,
            scrollTrigger: {
                trigger: char,
                start: 'top 95%',
                end: 'top 45%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
        });
    });
}


document.addEventListener('DOMContentLoaded', () => {

    initScrollAnimations();
});
