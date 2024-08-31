document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.querySelector('.event-list');
    const contactForm = document.getElementById('contact-form');
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('nav ul');
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');

const events = [
    {
        title: 'Intro to Machine Learning',
        date: '2024-09-15',
        time: '15:00',
        description: 'Dive into the basics of machine learning algorithms and their applications.',
        image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg'
    },
    {
        title: 'Web Dev Workshop',
        date: '2024-09-22',
        time: '14:30',
        description: 'Learn modern web development techniques using the latest frameworks and tools.',
        image: 'https://www.simplilearn.com/ice9/category_image/Data-Science-&-Business-Analytics.jpg'
    },
    {
        title: 'Hackathon Prep',
        date: '2024-09-29',
        time: '16:00',
        description: 'Get ready for upcoming hackathons with tips, tricks, and team-building exercises.',
        image: 'https://cdn.ttgtmedia.com/rms/onlineImages/hackatine_event_01.jpg'
    }
];

function populateEvents() {
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `
            <div class="event-image" style="background-image: url(${event.image});"></div>
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <p class="event-date"><i class="fas fa-calendar"></i> ${event.date}</p>
                <p class="event-time"><i class="fas fa-clock"></i> ${event.time}</p>
                <p class="event-description">${event.description}</p>
            </div>
        `;
        eventList.appendChild(eventItem);
    });
}

function handleFormSubmit(e) {
    e.preventDefault();
    alert('Application sent successfully! We\'ll be in touch soon.');
    contactForm.reset();
}

function toggleMobileMenu() {
    navList.classList.toggle('show');
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    navList.classList.remove('show');
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

function handleHeaderScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);


function animateCounter(stat) {
    const target = parseInt(stat.getAttribute('data-target'));
    const increment = target / 200;
    let current = 0;

    const updateCount = () => {
        if (current < target) {
            current += increment;
            stat.textContent = Math.ceil(current);
            requestAnimationFrame(updateCount);
        } else {
            stat.textContent = target;
        }
    };

    updateCount();
}

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navList.classList.remove('show');
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
