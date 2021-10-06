var startGames = document.getElementById("start"),

	show = document.getElementById("answer"),

	answerRandom = document.getElementsByClassName("change");

var second = 0,

	milesecond = 0,

	minutes = 0;

write = document.getElementById("inte");

startGames.onclick = function counter(){

setInterval(function() {

	milesecond = milesecond + 1;

write.innerHTML = milesecond + " :" + second + " : " + minutes;


if (milesecond == 59) {

	second += 1;

	milesecond *= 0;
}
if (second == 59) {

	minutes += 1;

	second *= 0;

}

}, 20);

startGames.style.display = 'none';

question();

}


function question() {

var num1 = Math.floor(Math.random() * 10 ) ,
	num2 = Math.floor(Math.random() * 10 ),
	allnum = num1 * num2;

show.innerHTML = num1 + "  x  " + num2;


for (var i =0 ; i < answerRandom.length; i++) {
	
	answerRandom[i].innerHTML = rand(100)
	answerRandom[i].onclick = wrong

}
var corect = rand(3)

answerRandom[corect].innerHTML = allnum;

answerRandom[corect].onclick =  winner
}

function rand(max) {

	return Math.floor(Math.random() * max);

}

function wrong() {

	alert("game over *_*");

	location.reload();
	
}

function winner() {
	
	question();

}



 