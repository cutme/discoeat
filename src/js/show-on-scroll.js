//import Swiper from 'swiper';
import Swiper from '../../node_modules/swiper/dist/js/swiper.js';
import swiper from '../sass/idangerous.swiper2.scss';

// Show on scroll

const showonscroll = function() {

    const initCarousel = function(el) {
    
        const pages = el.parentNode.getElementsByClassName('swiper-pagination')[0];
        let swiper, status = false, ww = window.innerWidth;
        
        const horizontal = function() {
            swiper = new Swiper (el, {
                autoplay: {
                    delay: 5000,
                },
                loop: true,
                pagination: {
                    el: pages,
                    type: 'bullets',
                    clickable: true,
                }
            });
        }
        
        const vertical = function() {
            swiper = new Swiper (el, {
                autoplay: {
                    delay: 5000,
                },
                direction: 'vertical',
                loop: true,
                pagination: {
                    el: pages,
                    type: 'bullets',
                    clickable: true,
                }
            });
        }
    
        if (ww <= 1024) {
            horizontal();
        } else {
            vertical();
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
                   }, 10);
               
               }
           }
            
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


Pace.on('done', function() {   
	showonscroll();
});
