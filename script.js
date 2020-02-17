$(document).ready(function(){
let turn = 1;
let state = true;
$('.column').click(function(){
 if($(this).text() == "" && state == true){
 	if(turn % 2 == 1){
 		$(this).append("X");
 		$(this).css('color', '#000000');
 	}else{
 		$(this).append("O");
 		$(this).css('color', 'red');
 	}
 	turn++;
 	if(getWinner() != -1 && getWinner() != ""){
 		if(getWinner()=="X"){
 			document.getElementById('result').innerHTML = "X Wins";
 		}else{
 			document.getElementById('result').innerHTML = "O Wins";
 		}
 		state = false;
 	}
 }
$('.reset').click(function(){
  location.reload();
}); 
});

function getWinner(){
	box1 = $('#c1').text();
	box2 = $('#c2').text();
	box3 = $('#c3').text();
	box4 = $('#c4').text();
	box5 = $('#c5').text();
	box6 = $('#c6').text();
	box7 = $('#c7').text();
	box8 = $('#c8').text();
	box9 = $('#c9').text();

if((box1 == box2) && (box2 == box3)){
	return box3;
}else if((box4 == box5)&& (box5 == box6)){
	return box6;
}else if((box7 == box8)&& (box8 == box9)){
    return box9;

}else if((box1 == box4)&& (box4 == box7)){
    return box7;
}else if((box2 == box5)&& (box5 == box8)){
    return box8;
}else if((box3 == box6)&& (box6 == box9)){
    return box9;

}else if((box1 == box5)&& (box5 == box9)){
    return box9;
}else if((box3 == box5)&& (box5 == box8)){
    return box8;
}
return -1;
}

});







