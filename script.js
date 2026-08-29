// Fade in ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in-active');
});

// Fade in ao scroll (para elementos específicos)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe todos os elementos com classe 'fade-in-scroll'
document.querySelectorAll('.fade-in-scroll').forEach(element => {
    observer.observe(element);
});

// Adicione este código no script.js
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.href && !link.target && !link.href.startsWith('#')) {
        e.preventDefault();
        document.body.classList.remove('fade-in-active');
        setTimeout(() => {
            window.location.href = link.href;
        }, 500);
    }
});
