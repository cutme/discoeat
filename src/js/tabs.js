(function() {

    const el = document.getElementById('tabs');

    const init = function() {
        const content = el.getElementsByClassName('js-content')[0],
              contentItem = content.getElementsByClassName('js-tab'),
              nav = el.getElementsByClassName('js-nav')[0],
              navItem = nav.getElementsByClassName('js-tab'),
              breadcrumbs = document.getElementById('breadcrumbs'),
              breadcrumbsItem = breadcrumbs.getElementsByClassName('js-current')[0];

        const changePath = function(name) {
            breadcrumbsItem.innerHTML = name;
        };

        const showTab = function(el, idx) {
    
            for (let i = 0; i < contentItem.length; i ++) {
            
                contentItem[i].classList.remove('is-active');
            
                if (i === idx) {
                    contentItem[i].classList.add('is-active');
                }
            }
            
            for (let j = 0; j < navItem.length; j ++) {
                navItem[j].classList.remove('is-active');
            }
            
            content.classList.remove('is-active');
            
            setTimeout(function() {
                content.classList.add('is-active');
            }, 10);
            
            el.classList.add('is-active');
        };

        for (let i = 0; i < navItem.length; i ++) {
            navItem[i].addEventListener('click', function() {
                
                showTab(this, thisindex(this));
                
                if (breadcrumbs) {
                    changePath( this.innerHTML );
                }
            });
        }
    }

    if (el) {
        init();
    }
    

}).call(this);