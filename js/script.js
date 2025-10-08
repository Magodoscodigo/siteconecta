    const track = document.querySelector('.carousel-track');
    const cases = Array.from(track.children);
    const prevBtn = document.querySelector('.carousel-btn.left');
    const nextBtn = document.querySelector('.carousel-btn.right');
    let index = 0;

    function updateCarousel() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % cases.length;
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + cases.length) % cases.length;
      updateCarousel();
    });

