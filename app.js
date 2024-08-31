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
            image: 'ml_workshop.jpg'
        },
        {
            title: 'Web Dev Workshop',
            date: '2024-09-22',
            time: '14:30',
            description: 'Learn modern web development techniques using the latest frameworks and tools.',
            image: 'web_dev_workshop.jpg'
        },
        {
            title: 'Hackathon Prep',
            date: '2024-09-29',
            time: '16:00',
            description: 'Get ready for upcoming hackathons with tips, tricks, and team-building exercises.',
            image: 'hackathon_prep.jpg'
        }
    ];


    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Application sent successfully! We\'ll be in touch soon.');
        contactForm.reset();
    });

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
