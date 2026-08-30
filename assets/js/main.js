/* ==========================================================================
   FOLIOFRAME — Main Script
   ========================================================================== */

(function () {
  'use strict';

  /* -------------------------------------------------------------------------
     Burger Toggle
     ------------------------------------------------------------------------- */

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.header__nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav a, .header__links a');

  function toggleNav() {
    if (!burger || !nav) return;
    const isOpen = burger.classList.toggle('open');
    nav.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (burger) {
    burger.setAttribute('aria-expanded', 'false');
    burger.addEventListener('click', toggleNav);
  }

  // Close nav when a link is clicked
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (burger && burger.classList.contains('open')) {
        toggleNav();
      }
    });
  });

  /* -------------------------------------------------------------------------
     Active Nav Highlighting
     ------------------------------------------------------------------------- */

  function setActiveNav() {
    var path = window.location.pathname;
    var filename = path.split('/').pop() || 'index.html';

    document.querySelectorAll('.header__links a, .mobile-nav a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href) return;
      var linkFile = href.split('/').pop();
      if (linkFile === filename || (filename === '' && linkFile === 'index.html')) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  }

  setActiveNav();

  /* -------------------------------------------------------------------------
     Footer Year
     ------------------------------------------------------------------------- */

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* -------------------------------------------------------------------------
     IntersectionObserver — Reveal Animations
     ------------------------------------------------------------------------- */

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    var revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  /* -------------------------------------------------------------------------
     Contact Form Handling
     ------------------------------------------------------------------------- */

  document.querySelectorAll('[data-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var okEl = form.querySelector('.form-ok');
      var errEl = form.querySelector('.form-err');

      // Simple validation
      var valid = true;
      var required = form.querySelectorAll('[required]');
      required.forEach(function (field) {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#ef4444';
        } else {
          field.style.borderColor = '';
        }
      });

      // Email validation
      var emailField = form.querySelector('input[type="email"]');
      if (emailField && emailField.value) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
          valid = false;
          emailField.style.borderColor = '#ef4444';
        }
      }

      if (!valid) {
        if (errEl) {
          errEl.style.display = 'block';
          errEl.textContent = 'Please fill in all required fields correctly.';
        }
        if (okEl) okEl.style.display = 'none';
        return;
      }

      // Simulate form submission
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'SENDING...';
      }

      setTimeout(function () {
        if (okEl) {
          okEl.style.display = 'block';
          okEl.textContent = 'Message sent successfully! We\'ll be in touch.';
        }
        if (errEl) errEl.style.display = 'none';
        form.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'SEND MESSAGE';
        }

        // Auto-hide success message
        setTimeout(function () {
          if (okEl) okEl.style.display = 'none';
        }, 5000);
      }, 1200);
    });

    // Clear error on input
    form.querySelectorAll('input, textarea').forEach(function (field) {
      field.addEventListener('input', function () {
        field.style.borderColor = '';
        var errEl = form.querySelector('.form-err');
        if (errEl) errEl.style.display = 'none';
      });
    });
  });

  /* -------------------------------------------------------------------------
     Portfolio Filter (projects page)
     ------------------------------------------------------------------------- */

  var filterTabs = document.querySelectorAll('.filter-tab');
  var portfolioItems = document.querySelectorAll('.portfolio-item[data-category]');

  if (filterTabs.length && portfolioItems.length) {
    filterTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var filter = this.getAttribute('data-filter');

        // Update active tab
        filterTabs.forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');

        // Filter items
        portfolioItems.forEach(function (item) {
          var cat = item.getAttribute('data-category');
          if (filter === 'all' || cat === filter) {
            item.style.display = '';
            // Re-trigger animation
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            requestAnimationFrame(function () {
              item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            });
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  /* -------------------------------------------------------------------------
     Smooth Scroll for Anchor Links
     ------------------------------------------------------------------------- */

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* -------------------------------------------------------------------------
     Header Background on Scroll
     ------------------------------------------------------------------------- */

  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        header.style.background = 'rgba(10, 14, 23, 0.98)';
      } else {
        header.style.background = 'rgba(10, 14, 23, 0.92)';
      }
    }, { passive: true });
  }
})();
