addEventListener('DOMContentLoaded', function () {
  document.querySelector('#menu-switcher').addEventListener('click', function () {
    if (this.classList.contains('open')) {
      document.querySelector('#menu-switcher').classList.remove('open');
      document.querySelector('#main-menu').classList.remove('show');
    } else {
      document.querySelector('#menu-switcher').classList.add('open');
      document.querySelector('#main-menu').classList.add('show');
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
  
})



