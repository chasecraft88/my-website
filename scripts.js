document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded');

    // Hover descriptions for menu items
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            let description;
            switch (item.textContent.trim()) {
                case 'Home':
                    description = "Welcome to the beginning of it all!";
                    break;
                case 'About':
                    description = "Discover the whispers behind the author.";
                    break;
                case 'Blog':
                    description = "Explore thoughts from within!";
                    break;
                case 'Contact':
                    description = "Drop a note, we're listening!";
                    break;
                default:
                    description = "Take a step into the unknown.";
            }
            item.setAttribute('title', description);
        });
    });
});
