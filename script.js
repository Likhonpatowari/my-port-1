// ---- Tying Animation Start 
let typed = new Typed('.auto-input', {
    strings:['Fornt-End Developer','Freelancer','UI Designer','Youtuber'],
    typeSpeed: 100,
    backspeed: 20000,
    backDelay: 1000,
    loop: true,
 });
 
// ---- Tying Animation End 


// scroll 

const sr = ScrollReveal({
    distance:'60px',
    duration:2000 ,
    reset : true 
})
// home 
sr.reveal('.left-header h3',{delay:1, origin:'top'})
sr.reveal('.left-header h2 ',{delay:1, origin:'left'})
sr.reveal('.left-header h4 ',{delay:1, origin:'left'})
sr.reveal('.left-header p',{delay:1, origin:'right'})
sr.reveal('.imgbx',{delay:1, scale:1})

// nav 
sr.reveal('nav',{delay:1, origin:'left'})


// service 
sr.reveal('.service-content-bx:nth-child(1)',{delay:10, origin:'left'})
sr.reveal('.service-content-bx:nth-child(2)',{delay:10, origin:'top'})
sr.reveal('.service-content-bx:nth-child(3)',{delay:10, origin:'right'})
sr.reveal('.service-content-bx:nth-child(4)',{delay:10, origin:'bottom'})
sr.reveal('.service-content-bx:nth-child(5)',{delay:10, origin:'top'})
sr.reveal('.service-content-bx:nth-child(6)',{delay:10, origin:'right'})
sr.reveal('.service-content-bx:nth-child(7)',{delay:10, origin:'left'})
sr.reveal('.service-content-bx:nth-child(8)',{delay:10, origin:'bottom'})



