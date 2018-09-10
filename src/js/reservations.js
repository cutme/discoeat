(function() {

    let el, status = false;

    const init = function() {
        const expand = el.getElementsByClassName('js-expand');

        const toggleRow = function(el) {
            this.parentNode.classList.toggle('is-visible');
        };

        for (let i = 0; i < expand.length; i ++) {
            expand[i].addEventListener('click', toggleRow);
        }
        
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                if (status = true) {
                    
                    for (let i = 0; i < expand.length; i ++) {
                        expand[i].parentNode.classList.remove('is-visible');
                    }
                    
                    status = false;
                }
            }
        });
    }
    
    document.addEventListener('DOMContentLoaded',function() {
        
        el = document.getElementById('reservations');
        el ? init() : false;
        
    }, false);
    
    
})();