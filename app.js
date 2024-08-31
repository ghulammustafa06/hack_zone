document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.querySelector('.event-list');
    const contactForm = document.getElementById('contact-form');
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('nav ul');

    const events = [
        { title: 'Intro to Machine Learning', date: '2024-09-15', time: '15:00' },
        { title: 'Web Dev Workshop', date: '2024-09-22', time: '14:30' },
        { title: 'Hackathon Prep', date: '2024-09-29', time: '16:00' }
    ];

    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `
            <h3>${event.title}</h3>
            <p><i class="fas fa-calendar"></i> ${event.date}</p>
            <p><i class="fas fa-clock"></i> ${event.time}</p>
        `;
        eventList.appendChild(eventItem);
    });

    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `
            <h3>${event.title}</h3>
            <p><i class="fas fa-calendar"></i> ${event.date}</p>
            <p><i class="fas fa-clock"></i> ${event.time}</p>
        `;
        eventList.appendChild(eventItem);
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Application sent successfully! We\'ll be in touch soon.');
        contactForm.reset();
    });

    menuToggle.addEventListener('click', () => {
        navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        contactForm.reset();
    });
});
