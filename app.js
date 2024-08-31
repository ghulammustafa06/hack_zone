document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.querySelector('.event-list');
    const contactForm = document.getElementById('contact-form');

    const events = [
        { title: 'Club Meeting', date: '2024-09-15', time: '15:00' },
        { title: 'Workshop', date: '2024-09-22', time: '14:30' },
        { title: 'Guest Speaker', date: '2024-09-29', time: '16:00' }
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

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        contactForm.reset();
    });
});
