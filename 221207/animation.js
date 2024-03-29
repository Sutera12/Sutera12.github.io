function startAnimation() {
  anime({
    targets: "#animation-box",
    translateX: {
      value:250,
      duration:800
    },
    rotate:{
      value:360,
      duration: 1800,
      easing:'easeInOutSine'
    },
    scale:{
      value:2.3,
      duration:1600,
      delay:800,
      easing: 'easeInOutQuart'
    },
    delay:250,
    translateY:100
  });
}