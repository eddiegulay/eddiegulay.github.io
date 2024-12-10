
/*var slideOpen = document.querySelector('.slideOpen');
var slideClose = document.querySelector('.slideClose');
var slideCloseOverlay = document.querySelector('.overlay-slideNav');

var tl = new TimelineMax({ paused: true });

$('.slideNav').each(function(i) {
  tl.timeScale(1);
  tl.to('.overlay-slideNav', 0.3, { opacity: 1, zIndex:2, visibility:"visible" })
  
  .to(slideOpen, 0.5, {
    x: 300,
    opacity: 0,
    ease: Power2.easeInOut
  },'-=0.5')

  .to('.slideNav', 0.5, {
    x: 0,
    ease: Power2.easeInOut
  },'-=0.5')

  .to(slideClose, 0.5, {
    x: 0,
    opacity: 1,
    rotation: 360,
    ease: Power1.easeInOut
  },'-=0.5')

  .staggerFrom('.slideNav__item', 0.2, {
    opacity: 0,
    x: 70,
    ease: Back.easeOut
  },0.06, '-=0.18');

  openMenu = function openMenu() {return tl.play();};
  closeMenu = function closeMenu() {return tl.reverse();};

  slideOpen.addEventListener('click', openMenu, false);
  slideClose.addEventListener('click', closeMenu, false);
  slideCloseOverlay.addEventListener('click', closeMenu, false);
  
});*/

$('.btnSlideNav').on('click', function() {
	$(this).addClass('hide');
	$('.slideNav').addClass('open');
	$('.overlay-slideNav').addClass('show');
	$('.slideClose').addClass('show');
});
$('.slideClose').on('click', function() {
	$(this).removeClass('show');
	$('.btnSlideNav').removeClass('hide');
	$('.slideNav').removeClass('open');
	$('.overlay-slideNav').removeClass('show');
});
