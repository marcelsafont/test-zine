addEventListener('DOMContentLoaded', function () {
  document.querySelector('#menu-switcher').addEventListener('click', function () {
    if (this.classList.contains('open')) {
      animateTranslate3d(true);
      document.querySelector('#menu-switcher').classList.remove('open');
      
    } else {
      document.querySelector('#menu-switcher').classList.add('open');
      document.querySelector('#main-menu').classList.add('show');
      animateTranslate3d();
    }
  })
  const boxes = document.querySelectorAll(".animate-element"); // Select all elements with class "box"

    if (boxes.length > 0) {  // Ensure there are elements to observe
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate"); // Add class to each observed element
                }
            });
        }, { threshold: 0.5 });

        // Observe each `.box` element
        boxes.forEach(box => observer.observe(box));
    } else {
        console.error("No elements with class 'box' found!");
    }
  
    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }
  
  
  function animateTranslate3d(isReversing = false) {
      const menu = document.querySelector("#main-menu .menu");
      let duration = 500; // Animation duration in ms
      let startTime = null;
  
      function step(timestamp) {
          if (!startTime) startTime = timestamp;
          let progress = (timestamp - startTime) / duration;
  
          if (progress > 1) progress = 1; // Ensure it stops at 1
  
          let easedProgress = easeOutCubic(progress);
  
          // Reverse animation if rolling back
          let scaleValue = isReversing ? 1 - easedProgress : easedProgress;
          
          // Apply transform
          menu.style.transform = `translate3d(0px, 0px, 0px) scale3d(${scaleValue}, ${scaleValue}, 1)`;
  
          if (progress < 1) {
              requestAnimationFrame(step);
          } else {
            if (isReversing) {
              document.querySelector('#main-menu').classList.remove('show');
            }
          }
      }
  
      requestAnimationFrame(step);
  }
})




