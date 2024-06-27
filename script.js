document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.querySelector('.slideshow');
    const slides = Array.from(slideshow.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    slides.forEach((slide, index) => {
        slide.style.left = `${slideWidth * index}px`;
    });

    function spanDuration() {
        return slides.length * 1;
    }

    slideshow.style.animationDuration = `${spanDuration()}s`;

    setInterval(() => {
        slideshow.appendChild(slideshow.firstElementChild);
        const currentTransformValue = getComputedStyle(slideshow).transform;
        slideshow.style.transition = 'none';
        slideshow.style.transform = 'none';
        void slideshow.offsetWidth;
        slideshow.style.transition = '';
        slideshow.style.transform = currentTransformValue;
    }, spanDuration() * 1000);
});