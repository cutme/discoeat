document.addEventListener('DOMContentLoaded',function() {
    (function (selector = '[data-message]', horizontalOffset = 20, verticalOffset = 20) {
    
        let tt, x, y, message;
    
        Array.from(document.querySelectorAll(selector)).forEach(function (item) {
            
            const html = document.documentElement;
        
            const createTooltip = function(e) {
                let ele = document.createElement('div');
                ele.setAttribute('id', 'tooltip');
                ele.setAttribute('class', 'c-tooltip');
                
                document.body.appendChild(ele);
                
                tt = document.getElementById('tooltip');
                
                message = e.currentTarget.getAttribute('data-message');
                tt.innerHTML = message;
                tt.style.display = 'block';
            }
            
            const setPosition = function(e) {
                x = e.pageX;
                y = e.pageY;
                
                if (window.innerWidth <= 768) {
                    
                    tt.style.left = x - tt.clientWidth - horizontalOffset - 20 + 'px';
                    tt.style.top = y - verticalOffset + 'px';

                } else {
                    tt.style.left = x + horizontalOffset + 'px';
                    tt.style.top = y + verticalOffset + 'px';
                }
            }

 
            if (html.classList.contains('desktop')) {
        
                item.addEventListener('mouseenter', function(e) {
                    createTooltip(e);
                });
        
                item.addEventListener('mouseleave', function(e) {
                    tt.remove();
                });
        
                item.addEventListener('mousemove', function(e) {
                    setPosition(e);
                });
        
                item.addEventListener('mouseout', function(e) {
                    tt.style.display = 'none';
                });

            } else {
                
                item.addEventListener('click', function(e) {
                
                    if (document.getElementById('tooltip')) {
                        tt.remove();
                        
                    } else {
                        
                        console.log(document.getElementById('tooltip'));
                        createTooltip(e);
                        setPosition(e);
                        
                    }
                });
                
            }


        });
    
    }('[data-message]', 20, 0));
});
