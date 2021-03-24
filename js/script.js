const showmenu = (toggleID, navID) =>{
    const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        })
    }
}
showmenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav-link')

function linkaction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkaction))



const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollactive)

function scrollactive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionheight = current.offsetHeight
        
        const sectiontop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if(scrollY > sectiontop && scrollY <= sectiontop + sectionheight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}



const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home-title', {})
sr.reveal('.home-scroll', {delay: 200})
sr.reveal('.home-img', {origin: 'right', delay: 400})

sr.reveal('.about-img', {delay: 500})
sr.reveal('.about-subtitle', {delay: 300})
sr.reveal('.about-profession', {delay: 400})
sr.reveal('.about-text', {delay: 500})
sr.reveal('.about-social-icons', {delay: 600, interval: 200})

sr.reveal('.skill-subtitle', {})
sr.reveal('.skill-name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skill-img', {delay: 400})

sr.reveal('.portfolio-img', {interval: 200})

sr.reveal('.contact-subtitle', {})
sr.reveal('.contact-text', {interval: 200})
sr.reveal('.contact-input', {delay: 400})
sr.reveal('.contact-button', {delay: 600})