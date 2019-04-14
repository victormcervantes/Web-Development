function setClock(){
	let amPM = 'am'
	let par = document.createElement('p');
	let today = new Date();
	let hours = today.getHours();
	if (hours > 12){
		hours = hours - 12;
		amPM = 'PM'
	}
	else
		amPM = 'am'
	let minutes = today.getMinutes();
	if((minutes+"").length === 1){
    	minutes = "0"+ minutes;
	}		
	let seconds = today.getSeconds();
	if((seconds+"").length === 1){
    	seconds = "0"+ seconds;
	}
	document.getElementById('clockContent').innerHTML = hours + ' : ' + minutes + ' : ' + seconds + ' ' + amPM;
	setTimeout(setClock, 1000);
};

function stopWatch(){
	const display = document.getElementById("displayScreen");
	let StartTime = new Date;
	let ElapsedTime = 0;
	let IntvID = null;
	let TimerIsOn = false;
	const fstart = (() => {
    	StartTime = new Date;
    	fdisplay("start");
    })

	const fstop = (() => {
    	ElapsedTime = Date.now () - StartTime.getTime();
    	fdisplay("stop");
    });

	const freset = (() => {
    	ElapsedTime = 0;
    	fdisplay("stop");
    	display.firstChild.nodeValue = "0.000";
	});

	const updateDisplay = (() => {
    	display.firstChild.nodeValue = ( (Date.now () - StartTime.getTime()) / 1000 ).toFixed (3);
	});

	const fdisplay = ((p_startStop) => {
    	if (p_startStop === "start") {
        	if ( TimerIsOn === true ) {}
        	else {
            	TimerIsOn = true;
            	IntvID = setInterval( updateDisplay , 50);
        	}
    	} 
    	else {
        	if (IntvID !== null ) {
            	window.clearInterval(IntvID);
        	}
        	TimerIsOn = false;
        	updateDisplay();
    	}
	});

	document.getElementById("startButton").addEventListener("click", fstart , false);

	document.getElementById("stopButton").addEventListener("click", fstop , false);

	document.getElementById("resetButton").addEventListener("click", freset , false);

}