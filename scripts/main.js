// Animations
AOS.init({
  anchorPlacement: "top-left",
  duration: 1000,
});

window.onload = () => {
  if (window.location.hash === "#de") {
    updateContentToDE();
  } else {
    updateContentToEN();
  }
};
// Add your javascript here
