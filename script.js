// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Function to update favicon based on theme
    function updateFavicon(theme) {
        const favicon = document.querySelector('link[rel="icon"]');
        const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
        
        if (theme === 'dark') {
            favicon.href = 'k-logo-dark.svg';
            appleTouchIcon.href = 'k-logo-dark.svg';
        } else {
            favicon.href = 'k-logo-light.svg';
            appleTouchIcon.href = 'k-logo-light.svg';
        }
    }
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateFavicon(currentTheme);
    
    // Update icon based on current theme
    if (currentTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Add transition effect
        document.documentElement.setAttribute('data-theme-transitioning', 'true');
        
        setTimeout(() => {
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateFavicon(newTheme);
            
            // Update icon
            if (newTheme === 'dark') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
            
            // Remove transition effect
            setTimeout(() => {
                document.documentElement.removeAttribute('data-theme-transitioning');
            }, 600);
        }, 100);
    });

    // Navigation smooth scrolling
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

    // Service card click handlers
    const serviceCards = document.querySelectorAll('.service-card');
    const modal = document.getElementById('serviceModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.close');

    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            showServiceDetails(service);
        });
    });

    // Modal close handlers
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    function showServiceDetails(service) {
        let content = '';
        
        switch(service) {
            case 'web-dev':
                content = `
                    <h2><i class="fas fa-laptop-code"></i> Web Development</h2>
                    <div class="service-details">
                        <p>I create modern, responsive websites that work perfectly on all devices. My expertise includes:</p>
                        
                        <div class="tech-grid">
                            <div class="tech-item">
                                <i class="fab fa-html5"></i>
                                <h4>HTML5</h4>
                                <p>Semantic markup and modern web standards</p>
                            </div>
                            <div class="tech-item">
                                <i class="fab fa-css3-alt"></i>
                                <h4>CSS3</h4>
                                <p>Advanced styling, animations, and responsive design</p>
                            </div>
                            <div class="tech-item">
                                <i class="fab fa-js-square"></i>
                                <h4>JavaScript</h4>
                                <p>Interactive functionality and dynamic content</p>
                            </div>
                            <div class="tech-item">
                                <i class="fab fa-php"></i>
                                <h4>PHP</h4>
                                <p>Server-side programming and database integration</p>
                            </div>
                        </div>
                        
                        <div class="project-examples">
                            <h3>Recent Projects:</h3>
                            <ul>
                                <li>E-commerce platform with payment integration</li>
                                <li>Corporate website with CMS</li>
                                <li>Portfolio websites for creative professionals</li>
                                <li>Web applications with user authentication</li>
                            </ul>
                        </div>
                        
                    </div>
                `;
                break;
                
            case 'logo-design':
                content = `
                    <h2><i class="fas fa-palette"></i> Logo Design</h2>
                    <div class="service-details">
                        <p>I create memorable and impactful logos that represent your brand's identity perfectly:</p>
                        
                        <div class="design-process">
                            <div class="process-step">
                                <i class="fas fa-lightbulb"></i>
                                <h4>Concept Development</h4>
                                <p>Understanding your brand values and target audience</p>
                            </div>
                            <div class="process-step">
                                <i class="fas fa-pencil-ruler"></i>
                                <h4>Design Creation</h4>
                                <p>Multiple concepts and iterations using professional tools</p>
                            </div>
                            <div class="process-step">
                                <i class="fas fa-check-circle"></i>
                                <h4>Finalization</h4>
                                <p>Refined logo with complete brand guidelines</p>
                            </div>
                        </div>
                        
                        <div class="tools-used">
                            <h3>Tools & Software:</h3>
                            <div class="tool-list">
                                <span><i class="fab fa-adobe"></i> Adobe Illustrator</span>
                                <span><i class="fas fa-vector-square"></i> Figma</span>
                                <span><i class="fas fa-paint-brush"></i> Photoshop</span>
                                <span><i class="fas fa-drafting-compass"></i> CorelDRAW</span>
                            </div>
                        </div>
                        
                        <div class="deliverables">
                            <h3>What You Get:</h3>
                            <ul>
                                <li>High-resolution logo files (PNG, JPG, SVG)</li>
                                <li>Vector files for scalability</li>
                                <li>Brand color palette</li>
                                <li>Typography guidelines</li>
                                <li>Usage guidelines document</li>
                            </ul>
                        </div>
                        
                    </div>
                `;
                break;
                
            case 'database':
                content = `
                    <h2><i class="fas fa-database"></i> Database Architecture</h2>
                    <div class="service-details">
                        <p>I design and implement efficient, scalable database solutions for your applications:</p>
                        
                        <div class="db-services">
                            <div class="db-service">
                                <i class="fas fa-sitemap"></i>
                                <h4>Database Design</h4>
                                <p>Optimal schema design and normalization</p>
                            </div>
                            <div class="db-service">
                                <i class="fas fa-tachometer-alt"></i>
                                <h4>Performance Optimization</h4>
                                <p>Query optimization and indexing strategies</p>
                            </div>
                            <div class="db-service">
                                <i class="fas fa-shield-alt"></i>
                                <h4>Security Implementation</h4>
                                <p>Data protection and access control</p>
                            </div>
                        </div>
                        
                        <div class="database-types">
                            <h3>Database Technologies:</h3>
                            <div class="db-grid">
                                <div class="db-item">
                                    <i class="fas fa-database"></i>
                                    <h4>MySQL</h4>
                                    <p>Relational database for web applications</p>
                                </div>
                                <div class="db-item">
                                    <i class="fas fa-elephant"></i>
                                    <h4>PostgreSQL</h4>
                                    <p>Advanced open-source database system</p>
                                </div>
                                <div class="db-item">
                                    <i class="fas fa-leaf"></i>
                                    <h4>MongoDB</h4>
                                    <p>NoSQL database for flexible data structures</p>
                                </div>
                                <div class="db-item">
                                    <i class="fas fa-server"></i>
                                    <h4>SQL Server</h4>
                                    <p>Enterprise-level database solutions</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="specialties">
                            <h3>Specialties:</h3>
                            <ul>
                                <li>E-commerce database design</li>
                                <li>User management systems</li>
                                <li>Inventory and CRM databases</li>
                                <li>Data migration and backup strategies</li>
                                <li>API integration and data synchronization</li>
                            </ul>
                        </div>
                        
                    </div>
                `;
                break;
        }
        
        modalBody.innerHTML = content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Contact form handling - AJAX submission to prevent redirect
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault(); // Prevent default form submission
            
            const submitBtn = this.querySelector('.btn-primary');
            const originalText = submitBtn.textContent;
            const formFields = document.getElementById('formFields');
            const successMessage = document.getElementById('successMessage');
            
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(this);
            
            try {
                // Submit to Formspree using fetch
                const response = await fetch(this.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // Hide form fields and show success message
                    formFields.style.display = 'none';
                    successMessage.style.display = 'block';
                    
                    // Reset form after showing success
                    this.reset();
                    
                    // Optional: Show form again after 5 seconds
                    setTimeout(() => {
                        formFields.style.display = 'block';
                        successMessage.style.display = 'none';
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 5000);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Handle error - show an error message
                alert('Sorry, there was an error sending your message. Please try again.');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe service cards for animation
    document.querySelectorAll('.service-card, .contact-item').forEach(el => {
        observer.observe(el);
    });

    // CTA button scroll to services
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.querySelector('#services').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Add typing animation to code content
    const codeLines = document.querySelectorAll('.code-line');
    codeLines.forEach((line, index) => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.animation = 'fadeInUp 0.5s ease forwards';
        }, index * 200);
    });
});