document.addEventListener('DOMContentLoaded', function() {
    // Show/hide scroll-to-top button
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTop';
    scrollBtn.innerHTML = '↑';
    document.body.appendChild(scrollBtn);

    document.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
