import Swiper from '../../node_modules/swiper/dist/js/swiper.js';
import swiper from '../sass/idangerous.swiper2.scss';


// Show on scroll
/*
const showonscroll = function() {

    const initCarousel = function(el) {
    
        const pages = el.parentNode.getElementsByClassName('swiper-pagination')[0];
        let swiper, status = false, scrollStatus = true, ww = window.innerWidth;
        
        const horizontal = function() {
            swiper = new Swiper (el, {
                autoplay: {
                    delay: 5000,
                },
                loop: true,
                pagination: {
                    el: pages,
                    type: 'bullets',
                    clickable: true
                }
            });
        }
        
        const vertical = function() {
            swiper = new Swiper (el, {
                mousewheel: {
                    releaseOnEdges: true,
                },
                direction: 'vertical',
                pagination: {
                    el: pages,
                    type: 'bullets',
                    clickable: true,
                }
            });
        }
    

        
        const enableDisableCaroScroll = function() {
        
            if (ww <= 1024) {
                if (scrollStatus === true) {

                    swiper.mousewheel.disable();
                    swiper.autoplay.start();
                    scrollStatus = false;
                    console.log('disableCaroScroll');
                    
                }
            
            } else {
                if (scrollStatus === false) {
               
                    swiper.mousewheel.enable();
                    swiper.autoplay.stop();
                    scrollStatus = true;
                    console.log('enableCaroScroll');
                
                }
            }
            
        }
        
        
        
        if (ww <= 1024) {
            horizontal();
            
        } else {
            vertical();
            enableDisableCaroScroll();
        }
        
        



        window.addEventListener('resize', function() {
            
           ww = window.innerWidth;

           if (ww <= 1024) {
               if (status === false) {
                   swiper.destroy();
                   status = true;
                   
                   setTimeout(function() {
                       horizontal();
                   }, 10);
               }
           }
           
           if (ww > 1024) {
               if (status === true) {
               
                   swiper.destroy();
                   status = false;
                   
                   setTimeout(function() {
                       vertical();
                       enableDisableCaroScroll();
                   }, 10);
               
               }
           }
           
           setTimeout(function() {
               enableDisableCaroScroll();
           }, 100);
            
        });
          
    }
    
    const el = document.getElementsByClassName('anim'),
          carousel = document.getElementsByClassName('js-carousel');
    
    const isInView = function(el) {
		let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
		
		if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow) {
			return true;
		}
	};

	for (let i = 0; i < el.length; i++) {
	    
		if (isInView(el[i])) {
			el[i].className += ' anim--loaded';
		}
	}

	for (let j = 0; j < carousel.length; j++) {
	    
		if (isInView(carousel[j])) {
            initCarousel(carousel[j]);
            carousel[j].classList.add('anim--loaded');
		}
	}

	function init() {

        // Show in viewport
        for (let i = 0; i < el.length; i++) {
            let bottomOfObject = el[i].getBoundingClientRect().top + 50,
                bottomOfWindow = window.innerHeight;

            if ( bottomOfWindow > bottomOfObject + 50) {
                el[i].classList.add('anim--loaded');
			}
		}


        for (let k = 0; k < carousel.length; k++) {
            let bottomOfObjectC = carousel[k].getBoundingClientRect().top + 50,
                bottomOfWindowC = window.innerHeight;

            if ( bottomOfWindowC > bottomOfObjectC + 50) {
                if ( !carousel[k].classList.contains('anim--loaded') ) {
                    initCarousel(carousel[k]);
                    carousel[k].classList.add('anim--loaded');
                }
			}
		}
	}

	window.addEventListener('scroll', init);
	
};
 */
    
Pace.on('done', function() {  
    
    const initCarousel = function(el) {
    
        const pages = el.parentNode.getElementsByClassName('swiper-pagination')[0];
        let swiper, status = false, scrollStatus = true, ww = window.innerWidth;
        
        const horizontal = function() {
            swiper = new Swiper (el, {
                autoplay: {
                    delay: 5000,
                },
                loop: true,
                pagination: {
                    el: pages,
                    type: 'bullets',
                    clickable: true
                }
            });
        }
        
        const vertical = function() {
            swiper = new Swiper (el, {
                mousewheel: {
                    releaseOnEdges: true,
                },
                direction: 'vertical',
                pagination: {
                    el: pages,
                    type: 'bullets',
                    clickable: true,
                }
            });
        }
    

        
        const enableDisableCaroScroll = function() {
        
            if (ww <= 1024) {
                if (scrollStatus === true) {

                    swiper.mousewheel.disable();
                    swiper.autoplay.start();
                    scrollStatus = false;
                    console.log('disableCaroScroll');
                    
                }
            
            } else {
                if (scrollStatus === false) {
               
                    swiper.mousewheel.enable();
                    swiper.autoplay.stop();
                    scrollStatus = true;
                    console.log('enableCaroScroll');
                
                }
            }
            
        }
        
        
        
        if (ww <= 1024) {
            horizontal();
            
        } else {
            vertical();
            enableDisableCaroScroll();
        }
        
        



        window.addEventListener('resize', function() {
            
           ww = window.innerWidth;

           if (ww <= 1024) {
               if (status === false) {
                   swiper.destroy();
                   status = true;
                   
                   setTimeout(function() {
                       horizontal();
                   }, 10);
               }
           }
           
           if (ww > 1024) {
               if (status === true) {
               
                   swiper.destroy();
                   status = false;
                   
                   setTimeout(function() {
                       vertical();
                       enableDisableCaroScroll();
                   }, 10);
               
               }
           }
           
           setTimeout(function() {
               enableDisableCaroScroll();
           }, 100);
            
        });
          
    }
    
    const el = document.getElementsByClassName('anim'),
          carousel = document.getElementsByClassName('js-carousel');
    
    const isInView = function(el) {
		let bottomOfWindow = (window.pageYOffset || window.scrollY) + window.innerHeight;
		
		if ( el.getBoundingClientRect().top + (window.pageYOffset || window.scrollY) < bottomOfWindow) {
			return true;
		}
	};

	for (let i = 0; i < el.length; i++) {
	    
		if (isInView(el[i])) {
			el[i].className += ' anim--loaded';
		}
	}

	for (let j = 0; j < carousel.length; j++) {
	    
		if (isInView(carousel[j])) {
            initCarousel(carousel[j]);
            carousel[j].classList.add('anim--loaded');
		}
	}

	function init() {

        // Show in viewport
        for (let i = 0; i < el.length; i++) {
            let bottomOfObject = el[i].getBoundingClientRect().top + 50,
                bottomOfWindow = window.innerHeight;

            if ( bottomOfWindow > bottomOfObject + 50) {
                el[i].classList.add('anim--loaded');
			}
		}


        for (let k = 0; k < carousel.length; k++) {
            let bottomOfObjectC = carousel[k].getBoundingClientRect().top + 50,
                bottomOfWindowC = window.innerHeight;

            if ( bottomOfWindowC > bottomOfObjectC + 50) {
                if ( !carousel[k].classList.contains('anim--loaded') ) {
                    initCarousel(carousel[k]);
                    carousel[k].classList.add('anim--loaded');
                }
			}
		}
	}

	window.addEventListener('scroll', init);
    
    
});
