document.addEventListener('DOMContentLoaded', () => {
    

  const animatedElements = document.querySelectorAll('.step-card, .tip-card');

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });

  const observerOptions = {
    root: null,
    threshold: 0.15 
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => revealOnScroll.observe(el));

  const cards = document.querySelectorAll('.step-card, .tip-card, .footer-help');

  cards.forEach(card => {

    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease';

    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
      card.style.boxShadow = '0 12px 24px rgba(242, 101, 34, 0.12)';
      card.style.borderColor = '#f26522';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.02)';
      card.style.borderColor = '#eaeaea';
    });
  });

  const winButtons = document.querySelectorAll('.btn-win-primary, .btn-win-secondary');

  winButtons.forEach(btn => {
    btn.style.transition = 'transform 0.1s ease, filter 0.2s ease';

    btn.addEventListener('mousedown', () => {
      btn.style.transform = 'scale(0.96)';
    });

    btn.addEventListener('mouseup', () => {
      btn.style.transform = 'scale(1)';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
    });
  });

  

});