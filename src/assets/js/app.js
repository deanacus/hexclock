var main = function(){
    const clock = document.getElementById('clock');
    const display = document.querySelector('h1');

    function addLeadingZero(num) {
        if ( num < 10 ) {
            return "0" + num;
        } else {
            return num;
        }
    }

    function lightenColour(color){
        return (color.toString(10) / 0.25).toString(16);
    }

    function updateScreen() {
        const now = new Date();
        let minutes = addLeadingZero(now.getMinutes());
        let seconds = addLeadingZero(now.getSeconds());
        let hours = addLeadingZero(now.getHours());

        display.innerHTML = hours + ":" + minutes + ":" + seconds;
        clock.style.backgroundColor= "#" + lightenColour(hours) + lightenColour(minutes) + lightenColour(seconds);
    }

    setInterval(updateScreen,1000);
};

document.addEventListener('DOMContentLoaded', main);