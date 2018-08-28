(function() {
    
    const el = document.getElementsByClassName('js-lightbox');
    
    const init = function() {
    
        const overlay = document.getElementsByClassName('js-overlay');

        const clickOutside = function(e) {
            let target = e.target.parentNode;  

            if (target.classList.contains('pace-done')) {
                closeLightbox();
            } 
        }
        
        const closeLightbox = function() {
            
            for (let i = 0; i < overlay.length; i ++) {
                overlay[i].classList.remove('is-visible');
            }

            document.removeEventListener('click', clickOutside);
        };
        
        const pressEsc = function(evt) {
            let isEscape = false;
            
            if ("key" in evt) {
                isEscape = (evt.key == "Escape" || evt.key == "Esc");
            } else {
                isEscape = (evt.keyCode == 27);
            }
            if (isEscape) {
                closeLightbox();
            }
            
            document.removeEventListener('keydown', pressEsc);
        }
        
        const openLightbox = function(e) {
            const target = this.getAttribute('data-id'),
                  lightbox = document.getElementById(target);
            
            lightbox.classList.add('is-visible');
            
            document.addEventListener('keydown', pressEsc);   
            document.addEventListener('click', clickOutside);

            e.preventDefault() ? e.preventDefault() : e.preventDefault = false;
        };
      
        for (let i = 0; i < el.length; i ++) {            
            el[i].addEventListener('click', openLightbox);
        }  
        
        
        
        
        // Check is-visible overlays
        
        for (let j = 0; j < overlay.length; j ++) {            
            overlay[j].getElementsByClassName('js-close')[0].addEventListener('click', closeLightbox);
            
            if (overlay[j].classList.contains('is-visible')) {
                document.addEventListener('keydown', pressEsc);   
                document.addEventListener('click', clickOutside);
            }
            
        }
                   
    };
        
    if (el.length>0) {
        init();
    }
    
}).call(this);