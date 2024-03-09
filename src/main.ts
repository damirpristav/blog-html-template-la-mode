import './style.css';
import '@glidejs/glide/dist/css/glide.core.min.css';
import Glide from '@glidejs/glide';

document.addEventListener('DOMContentLoaded', function() {
  const pageLoader = document.getElementById('page-loader');
  if (pageLoader) {
    pageLoader.style.opacity = '0';
    this.body.classList.remove('body-start');
    // remove page loader from DOM when animation/transition is completed
    setTimeout(() => pageLoader.remove(), 300);
  }

  const searchTrigger = document.getElementById('search-trigger');
  const searchModal = document.getElementById('search-modal');
  const searchModalClose = document.getElementById('search-modal-close');
  if (searchTrigger && searchModal) {
    searchTrigger.addEventListener('click', () => {
      searchModal.classList.remove('hidden');
      searchModal.querySelector('input')?.focus();
      document.body.style.overflow = 'hidden';
    });
  }
  if (searchModalClose && searchModal) {
    searchModalClose.addEventListener('click', () => {
      searchModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  const mobileMenuTrigger = document.getElementById('mobile-menu-trigger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  if (mobileMenuTrigger && mobileMenu) {
    mobileMenuTrigger.addEventListener('click', () => {
      mobileMenu.classList.remove('-left-[230px]');
      mobileMenu.classList.add('left-0');
      mobileMenuOverlay?.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }
  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('left-0');
      mobileMenu.classList.add('-left-[230px]');
      mobileMenuOverlay?.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }
  if (mobileMenuOverlay && mobileMenu) {
    mobileMenuOverlay.addEventListener('click', () => {
      mobileMenu.classList.remove('left-0');
      mobileMenu.classList.add('-left-[230px]');
      mobileMenuOverlay.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  if (document.querySelector('.glide')) {
    new Glide('.glide').mount();
  }
});
