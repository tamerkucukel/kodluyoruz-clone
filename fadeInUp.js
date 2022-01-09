(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hiddenInUp');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= -150) {
          element.classList.add('fadeInUp');
          element.classList.remove('hiddenInUp');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();