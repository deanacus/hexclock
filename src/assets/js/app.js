const hexClock = ( function() {

	// Private variables
	const clock = document.getElementById( 'clock' );
	const display = document.querySelector( 'h1' );

	// Private methods
	const _addLeadingZero = function( num ) {
		if ( 10 > num ) {
			return '0' + num;
		}
		else {
			return num;
		}
	};

	const _getTheColor = function() {
		const now = new Date();
		let hours = _addLeadingZero( now.getHours() );
		let minutes = _addLeadingZero( now.getMinutes() );
		let seconds = _addLeadingZero( now.getSeconds() );

		return {
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	};

	var _lightenColour = function( color ){
		return ( color.toString( 10 ) / 0.25 ).toString( 16 );
	};

	var _printClock = function() {
		let hours = _getTheColor().hours;
		let minutes = _getTheColor().minutes;
		let seconds = _getTheColor().seconds;

		display.innerHTML = hours + ':' + minutes + ':' + seconds;
		clock.style.backgroundColor = '#' + _lightenColour( hours ) + _lightenColour( minutes ) + _lightenColour( seconds );
	};

	const _updateScreen = function() {
		_printClock();
	};

	// Public methods
	const init = function() {
		setInterval( _updateScreen, 1000 );
	};


	// Assign public methods to api

	const api = {
		init: init,
	};

	return api;

} )();

document.addEventListener(
	'DOMContentLoaded',
	hexClock.init()
);