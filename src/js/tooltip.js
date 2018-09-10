document.addEventListener('DOMContentLoaded',function() {
    (function (selector = '[data-message]', horizontalOffset = 20, verticalOffset = 20) {
    
        let tt, x, y, message;
    
        Array.from(document.querySelectorAll(selector)).forEach(function (item) {
        
            item.addEventListener('mouseenter', function(e) {
    
                let ele = document.createElement('div');
                ele.setAttribute('id', 'tooltip');
                ele.setAttribute('class', 'c-tooltip');
                
                document.body.appendChild(ele);
                
                tt = document.getElementById('tooltip');
                
                message = this.getAttribute('data-message');
                tt.innerHTML = message;
                tt.style.display = 'block';
                
            });
    
            item.addEventListener('mouseleave', function(e) {
                tt.remove();
            });
    
            item.addEventListener('mousemove', function(e) {
                x = e.pageX;
                y = e.pageY;
                
                tt.style.left = x + horizontalOffset + 'px';
                tt.style.top = y + verticalOffset + 'px';
            });
    
            item.addEventListener('mouseout', function(e) {
                tt.style.display = 'none';
            });
        });
    
    }('[data-message]', 20, 0));
});
