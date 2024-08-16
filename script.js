document.addEventListener("DOMContentLoaded", function() {
    const photo = document.querySelector('.photo');

    photo.addEventListener('mousemove', function(event) {
        const rect = photo.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const moveX = (x - centerX) / centerX * 10; // Adjust multiplier for intensity
        const moveY = (y - centerY) / centerY * 10; // Adjust multiplier for intensity

        photo.style.transform = `rotateY(${moveX}deg) rotateX(${moveY * -1}deg)`;
    });

    photo.addEventListener('mouseleave', function() {
        photo.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});
