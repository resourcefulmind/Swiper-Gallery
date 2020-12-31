// new is used in object-oreinted programming..used to create an abstract, like an animal class and a dog class that inherits from the animal class..this is an instance and new helps to establish those relationships...do not use in js

new Swiper(".swiper-container", {
    speed: 400, 
    spaceBetween: 100, 
    effect: "flip", 
    slidesPerView: 3, 
    loop: true, 
    navigation: {
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev"
    }
});

// In the spirit of learning more from the frontendmasters, we used popmotion which you can get by searching popmotion js on google
// navigation physics

const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector('.brand');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
  .start((e) => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
  });

listen(document, 'mouseup touchend')
  .start(() => {
    spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
      // mass: 1,
      // damping: 10
    }).start(ballXY);
  });
