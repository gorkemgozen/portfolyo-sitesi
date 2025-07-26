        function setupMobileNavigation() {
            const nav = document.querySelector('nav');
            let lastScrollTop = 0;
            
            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (window.innerWidth <= 768) {
                    if (scrollTop > lastScrollTop && scrollTop > 100) {
                        nav.style.transform = 'translateY(-100%)';
                    } else {
                        nav.style.transform = 'translateY(0)';
                    }
                }
                lastScrollTop = scrollTop;
            });
        }

        function createParticles() {
            const particles = document.querySelector('.particles');
            const particleCount = window.innerWidth <= 768 ? 20 : 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particles.appendChild(particle);
            }
        }

        function setupParallax() {
            if (window.innerWidth > 768) {
                window.addEventListener('scroll', () => {
                    const scrolled = window.pageYOffset;
                    const hero = document.querySelector('.hero');
                    const rate = scrolled * -0.5;
                    hero.style.transform = `translateY(${rate}px)`;
                });
            }
        }

        function setupServiceCards() {
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    if (window.innerWidth > 768) {
                        card.style.transform = 'translateY(-10px) scale(1.02)';
                    }
                });
                
                card.addEventListener('mouseleave', () => {
                    if (window.innerWidth > 768) {
                        card.style.transform = 'translateY(0) scale(1)';
                    }
                });

                card.addEventListener('touchstart', () => {
                    if (window.innerWidth <= 768) {
                        card.style.transform = 'scale(0.98)';
                    }
                });

                card.addEventListener('touchend', () => {
                    if (window.innerWidth <= 768) {
                        card.style.transform = 'scale(1)';
                    }
                });
            });
        }

        function setVH() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        function optimizeForMobile() {
            if (window.innerWidth <= 768) {
                const particles = document.querySelector('.particles');
                if (particles) {
                    particles.style.opacity = '0.5';
                }
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            setVH();
            createParticles();
            animateCodeLines();
            setupSmoothScrolling();
            updateActiveNavLink();
            setupParallax();
            setupServiceCards();
            setupMobileNavigation();
            optimizeForMobile();
        });

        window.addEventListener('resize', () => {
            setVH();
            optimizeForMobile();
        });

        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                setVH();
                optimizeForMobile();
            }, 100);
        });

        function animateCodeLines() {
            const codeLines = document.querySelectorAll('.code-line');
            codeLines.forEach((line, index) => {
                line.style.animationDelay = (index * 0.1 + 1.5) + 's';
            });
        }

        function setupSmoothScrolling() {
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }
        document.querySelectorAll('.proje-karti').forEach(kart => {
            kart.addEventListener('mouseenter', () => {
                kart.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            kart.addEventListener('mouseleave', () => {
                kart.style.transform = 'translateY(0) scale(1)';
            });
        });

        const gozlemciSecenekleri = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const gozlemci = new IntersectionObserver((girdiLIstesi) => {
            girdiLIstesi.forEach(girdi => {
                if (girdi.isIntersecting) {
                    girdi.target.style.opacity = '1';
                    girdi.target.style.transform = 'translateY(0)';
                }
            });
        }, gozlemciSecenekleri);

        document.querySelectorAll('.proje-karti').forEach((kart, indeks) => {
            kart.style.opacity = '0';
            kart.style.transform = 'translateY(50px)';
            kart.style.transition = `opacity 0.5s ease ${indeks * 0.1}s, transform 0.5s ease ${indeks * 0}s`;
            gozlemci.observe(kart);
        });

        function updateActiveNavLink() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (scrollY >= sectionTop - 200) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + current) {
                        link.classList.add('active');
                    }
                });
            });
        }

        window.addEventListener('load', () => {
            document.body.style.opacity = '1';
        });
