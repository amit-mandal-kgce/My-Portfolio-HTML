//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => { 
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //Active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        //If want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    });
    //sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //Animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}


//gmail feedback
const fname =document.getElementById('fname');
const email =document.getElementById('email');
const phone =document.getElementById('phone');
const subject =document.getElementById('subject');
const message =document.getElementById('message');

const submit =document.getElementsByClassName('contact')[0];

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked");

    let ebody = `
    <b>Name: </b>${fname.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Phone no: </b>${phone.value}
    <br>
    <b>Email Subject: </b>${subject.value}
    <br>
    <b>Message: </b>${message.value}
    <br>
    
    `

    Email.send({
        SecureToken : "30f1bbff-b2be-4fd8-b9e2-4a4ece2afa31",
        To : 'lalbazaramit@gmail.com',
        From : "lalbazaramit@gmail.com",
        Subject : "This is the subject" + email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
});