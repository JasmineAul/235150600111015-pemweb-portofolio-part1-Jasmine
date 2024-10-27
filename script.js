let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}

const form = document.getElementById('contact-form');
const output = document.getElementById('output');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body:formData,
        headers: {
            'Accept' : 'application/json'
        }
    }).then(responses => {
        if (responses.ok) {
            output.innerHTML = '<p>Thank you for your suggestions! </p>';
            form.reset();
        } else {
            output.innerHTML = '<p>Ooops....there was a problem sending your message, try again later</p>';
        }

    })
})