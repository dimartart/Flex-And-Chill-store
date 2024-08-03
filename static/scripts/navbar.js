document.addEventListener('DOMContentLoaded', function() {
    var lastScrollTop = 0;
    var navPanel = document.getElementById('nav-panel');
  
    function checkScroll() {
      var currentScrollTop = window.pageY || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        navPanel.classList.remove('visible');
      } else {
        navPanel.classList.add('visible');
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Получение точной позиции скролла
    }
    window.addEventListener('scroll', checkScroll);
  });
