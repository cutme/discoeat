import Pace from '../js/pace.js';

// Pace preloader

Pace.start();

Pace.on('done', function() {   

	const element = document.getElementById("cover");

    if (element) {
        
		const container = document.getElementsByClassName('o-container')[0];
		
		const event = function(e) {
            element.removeEventListener("transitionend", event);
            document.body.removeAttribute('style');
            document.getElementById('cover').remove();    
        }

        element.addEventListener("transitionend", event, false);
        document.getElementsByClassName('pace')[0].remove();
    }      
});
