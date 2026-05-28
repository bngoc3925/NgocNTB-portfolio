// Typing Effect

const typingText = document.getElementById('typing-text');

const texts = [
    'Software Engineering Student',
    'Full-Stack Developer',
    '.NET Developer',
    'Frontend Enthusiast'
];

let textIndex = 0;
let charIndex = 0;

function typeEffect(){

    if(charIndex < texts[textIndex].length){

        typingText.textContent += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }else{

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent =
        texts[textIndex].substring(0,charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }else{

        textIndex = (textIndex + 1) % texts.length;

        setTimeout(typeEffect,300);

    }

}

window.onload = typeEffect;


// Dark Mode

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

});

// FILTER PROJECTS

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        document.querySelector('.filter-btn.active')
        .classList.remove('active');

        button.classList.add('active');

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if(
                filter === 'all' ||
                card.dataset.category.includes(filter)
            ){
                card.style.display = 'block';
            }else{
                card.style.display = 'none';
            }

        });

    });

});


// MODAL

const modal = document.getElementById('projectModal');

const modalTitle = document.getElementById('modalTitle');

const modalDescription =
document.getElementById('modalDescription');

const modalGithub =
document.getElementById('modalGithub');

function openModal(title, description, github){

    modal.style.display = 'block';

    modalTitle.textContent = title;

    modalDescription.textContent = description;

    modalGithub.href = github;

}

function closeModal(){

    modal.style.display = 'none';

}

window.onclick = function(event){

    if(event.target == modal){

        closeModal();

    }

}