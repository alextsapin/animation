window.addEventListener('DOMContentLoaded', function() {
    let btn  = document.getElementsByTagName('button');
    let elem = document.querySelector('.square');

    function myAnimation() {
        let pos = 0;

        let timer = setInterval(frame, 10);

        function frame() {
            if(pos == 300) {
                clearInterval(timer);
            } else {
                pos++;
                elem.style.top  = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }

    btn[0].addEventListener('click', myAnimation);
});