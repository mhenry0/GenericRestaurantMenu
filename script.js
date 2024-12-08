let lastScrollTop = 0;
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', function() {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            
            if (currentScroll > lastScrollTop) {
                navbar.classList.add('navbar-scrolled'); // Hide navbar on scroll down
            } else {
                navbar.classList.remove('navbar-scrolled'); // Show navbar on scroll up
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        });