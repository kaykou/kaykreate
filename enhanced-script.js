// Enhanced Modal Script with Beautiful Content
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    const updateFavicon = (theme) => {
        const favicon = document.querySelector('link[rel="icon"]');
        const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
        
        if (theme === 'dark') {
            favicon.href = 'k-logo-dark.svg';
            appleTouchIcon.href = 'k-logo-dark.svg';
        } else {
            favicon.href = 'k-logo-light.svg';
            appleTouchIcon.href = 'k-logo-light.svg';
        }
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateFavicon(savedTheme);
    
    if (savedTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme-transitioning', 'true');
        
        setTimeout(() => {
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateFavicon(newTheme);
            
            if (newTheme === 'dark') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
            
            setTimeout(() => {
                document.documentElement.removeAttribute('data-theme-transitioning');
            }, 600);
        }, 100);
    });

    // Smooth Scrolling for Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enhanced Modal Functionality
    const serviceCards = document.querySelectorAll('.service-card');
    const modal = document.getElementById('serviceModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close');

    // Beautiful Modal Content Templates
    const modalContent = {
        'web-dev': {
            title: 'Web Development',
            icon: 'fas fa-laptop-code',
            overview: 'Transform your digital presence with cutting-edge web solutions. I craft responsive, high-performance websites that captivate users and drive business growth.',
            features: [
                {
                    icon: 'fas fa-mobile-alt',
                    title: 'Responsive Design',
                    description: 'Pixel-perfect layouts that adapt seamlessly across all devices and screen sizes.'
                },
                {
                    icon: 'fas fa-rocket',
                    title: 'Performance Optimized',
                    description: 'Lightning-fast loading times with advanced optimization techniques and best practices.'
                },
                {
                    icon: 'fas fa-shield-alt',
                    title: 'Secure & Reliable',
                    description: 'Enterprise-grade security measures and robust architecture for peace of mind.'
                },
                {
                    icon: 'fas fa-search',
                    title: 'SEO Optimized',
                    description: 'Built-in SEO optimization to boost your search engine rankings and visibility.'
                },
                {
                    icon: 'fas fa-palette',
                    title: 'Modern UI/UX',
                    description: 'Stunning user interfaces with intuitive user experience design principles.'
                },
                {
                    icon: 'fas fa-code',
                    title: 'Clean Code',
                    description: 'Maintainable, scalable code following industry standards and best practices.'
                }
            ],
            technologies: [
                'React.js', 'Vue.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js',
                'HTML5', 'CSS3', 'SASS', 'JavaScript ES6+', 'Webpack', 'Vite'
            ],
            pricing: 'Starting from $1,500 for complete web solutions'
        },
        'logo-design': {
            title: 'Logo Design',
            icon: 'fas fa-palette',
            overview: 'Create a powerful brand identity with memorable logos that tell your story. From concept to completion, I design logos that resonate with your audience and stand the test of time.',
            features: [
                {
                    icon: 'fas fa-lightbulb',
                    title: 'Creative Concepts',
                    description: 'Multiple unique design concepts tailored to your brand personality and values.'
                },
                {
                    icon: 'fas fa-vector-square',
                    title: 'Vector Graphics',
                    description: 'Scalable vector formats ensuring crisp quality at any size, from business cards to billboards.'
                },
                {
                    icon: 'fas fa-eye',
                    title: 'Brand Psychology',
                    description: 'Strategic use of colors, shapes, and typography to evoke the right emotions.'
                },
                {
                    icon: 'fas fa-sync-alt',
                    title: 'Unlimited Revisions',
                    description: 'Collaborative process with unlimited revisions until you\'re completely satisfied.'
                },
                {
                    icon: 'fas fa-file-alt',
                    title: 'Brand Guidelines',
                    description: 'Comprehensive brand guidelines including color codes, typography, and usage rules.'
                },
                {
                    icon: 'fas fa-download',
                    title: 'Multiple Formats',
                    description: 'Complete file package including PNG, JPG, SVG, PDF, and source files.'
                }
            ],
            technologies: [
                'Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Sketch', 'InDesign',
                'Brand Strategy', 'Color Theory', 'Typography', 'Vector Design'
            ],
            pricing: 'Starting from $500 for professional logo packages'
        },
        'database': {
            title: 'Database Architecture',
            icon: 'fas fa-database',
            overview: 'Build robust, scalable database solutions that power your applications efficiently. From design to optimization, I create data architectures that grow with your business needs.',
            features: [
                {
                    icon: 'fas fa-sitemap',
                    title: 'Schema Design',
                    description: 'Optimized database schemas with proper normalization and relationship modeling.'
                },
                {
                    icon: 'fas fa-tachometer-alt',
                    title: 'Performance Tuning',
                    description: 'Query optimization, indexing strategies, and performance monitoring for maximum efficiency.'
                },
                {
                    icon: 'fas fa-expand-arrows-alt',
                    title: 'Scalability Planning',
                    description: 'Future-proof architectures designed to handle growth and increased data loads.'
                },
                {
                    icon: 'fas fa-lock',
                    title: 'Data Security',
                    description: 'Comprehensive security measures including encryption, access controls, and audit trails.'
                },
                {
                    icon: 'fas fa-cloud',
                    title: 'Cloud Integration',
                    description: 'Seamless integration with cloud platforms for reliability and global accessibility.'
                },
                {
                    icon: 'fas fa-chart-line',
                    title: 'Analytics Ready',
                    description: 'Data structures optimized for business intelligence and analytical reporting.'
                }
            ],
            technologies: [
                'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch',
                'AWS RDS', 'Google Cloud SQL', 'Firebase', 'GraphQL', 'Prisma'
            ],
            pricing: 'Starting from $800 for database design and implementation'
        }
    };

    function createModalHTML(service) {
        const data = modalContent[service];
        if (!data) return '';

        return `
            <div class="modal-header">
                <h2><i class="${data.icon}"></i> ${data.title}</h2>
            </div>
            <div class="modal-body">
                <div class="service-overview">
                    <p>${data.overview}</p>
                </div>
                
                <h3 style="color: var(--text-color); margin-bottom: 1.5rem; font-weight: 700;">
                    <i class="fas fa-star" style="background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"></i>
                    Key Features
                </h3>
                <div class="features-grid">
                    ${data.features.map(feature => `
                        <div class="feature-card">
                            <i class="${feature.icon}"></i>
                            <h4>${feature.title}</h4>
                            <p>${feature.description}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="tech-showcase">
                    <h3><i class="fas fa-tools"></i> Technologies & Tools</h3>
                    <div class="tech-tags">
                        ${data.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                </div>

                <div class="pricing-section">
                    <h3>Investment</h3>
                    <p>${data.pricing}</p>
                </div>
            </div>
        `;
    }

    // Add click event listeners to service cards
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceType = this.getAttribute('data-service');
            const content = createModalHTML(serviceType);
            
            if (content) {
                modalBody.innerHTML = content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                // Add entrance animation
                setTimeout(() => {
                    modal.querySelector('.modal-content').style.transform = 'scale(1)';
                    modal.querySelector('.modal-content').style.opacity = '1';
                }, 10);
            }
        });
    });

    // Close modal functionality
    function closeModal() {
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.transform = 'scale(0.9)';
        modalContent.style.opacity = '0';
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Contact Form Enhancement
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const formFields = document.getElementById('formFields');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const formData = new FormData(this);
            
            // Hide form fields and show success message
            formFields.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Reset form after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
                formFields.style.display = 'block';
                contactForm.reset();
            }, 5000);
        });
    }

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .contact-item, .hero-text, .code-window').forEach(el => {
        observer.observe(el);
    });
});
