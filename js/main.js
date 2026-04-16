document.addEventListener('DOMContentLoaded', function () {
  // Initialize Icons
  lucide.createIcons();

  // Mobile Menu
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Navbar Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('glass');
    } else {
      navbar.classList.remove('glass');
    }
  });

  // Animation Observer
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.style.opacity = '1';
  //       entry.target.style.transform = 'translateY(0)';
  //     }
  //   });
  // });

  // document.querySelectorAll('.glass-card, .service-card').forEach((el, index) => {
  //   el.style.opacity = '0';
  //   el.style.transform = 'translateY(20px)';
  //   el.style.transition = `all 0.6s ease ${index * 0.1}s`;
  //   observer.observe(el);
  // });

  // Forms
  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      btn.innerHTML = 'Sent!';
      btn.classList.add('bg-green-500');

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.remove('bg-green-500');
        form.reset();
      }, 3000);
    });
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        mobileMenu.classList.add('hidden');
      }
    });
  });

  // Swiper
  const swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
});
