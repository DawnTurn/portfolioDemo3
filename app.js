const mouse = document.querySelector('.moving')
const videos = document.querySelectorAll('video')
const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const body = document.querySelector('body')

videos.forEach(video => {
    video.addEventListener("mouseover", () => {
        video.play()
    });

    video.addEventListener('mouseleave', () => {
        video.pause()
    })
})

burger.addEventListener('click', () => {
    burger.classList.toggle('toggle')
    nav.classList.toggle('active')

    if(burger.classList.contains('toggle')){
        gsap.set(".logos a", {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          delay: 0.8,
        });
        gsap.set("ul li", { opacity: 1, y: 0, stagger: 0.2, delay: 0.4});
        body.style.overflow = 'hidden'
    }

    else{
        gsap.set(".logos a", {opacity: 0, x: -100})
        gsap.set("ul li", {opacity: 0, y: 100})
        body.style.overflow = 'unset'
    }
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if(ScrollTrigger.isTouch !== 1){
    let smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      marker: true,
    });

    gsap.fromTo('.s1', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.s1',
            start: 'center',
            end: '800',
            scrub: true,
        }
    })

    gsap.fromTo('.c2', {opacity: 0, x: -150}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.c2',
            start: '-950',
            end: '-70',
            scrub: true,
        }
    })

    gsap.fromTo('.c3', {opacity: 0, x: 150}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.c3',
            start: '-950',
            end: '-230',
            scrub: true,
        }
    })

    gsap.fromTo('.c4', {opacity: 0, x: -150}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.c4',
            start: '-950',
            end: '200',
            scrub: true,
        }
    })
}

window.addEventListener('scroll', () => {
    console.log(ScrollTrigger.isTouch)
})