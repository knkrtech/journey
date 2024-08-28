document.addEventListener('DOMContentLoaded', (event) => {
  const journeyText = new Letterize({
      targets: ".journey-text div"
  });

  anime.timeline({loop: false})
      .add({
          targets: '.journey-text',
          opacity: [0, 1],
          duration: 1000,
          easing: 'easeInOutQuad'
      })
      .add({
          targets: journeyText.listAll,
          opacity: [0, 1],
          translateY: [20, 0],
          delay: anime.stagger(100),
          duration: 800,
          easing: 'easeOutExpo'
      });
});