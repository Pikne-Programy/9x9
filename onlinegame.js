const ttt_websocket = new WebSocket("ws://85.198.250.135:4780");
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const cellElements = document.querySelectorAll('div.cell')
const board_id = document.querySelectorAll('div.board')
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn
let turn = 0;
let cell;
let clicked_cell

let obj = {
	"status": 0,
    "method": "JON",
    "params": {
	room: "public"
	},
    "time": Math.round((new Date()).getTime()/1000)	
	}

let myJSON = JSON.stringify(obj + "\r\n");
    
ttt_websocket.onopen = function()
{
	ttt_websocket.send(JSON.stringify(obj));
}

document.getElementById("info").innerHTML = "Waiting for opponent"
	
ttt_websocket.onmessage = function (event) {
	let msgrec = event.data;
	let packet = JSON.parse(msgrec)
	if (packet["method"] == "STT")
	{
		document.getElementById("your_mark").innerHTML = " " + packet["params"]["you"]
		document.getElementById("now_playing").innerHTML = " " + packet["params"]["move"]
			
	for (let i = 0; i < packet["params"]["bigBoard"].length; ++i) 
	{
        if (packet["params"]["bigBoard"][i] == "X") 
		{
            board_id[i].style.height = "24vh"
            board_id[i].style.width = "24vh"
            board_id[i].classList.add("big")
            board_id[i].style.backgroundImage = "url(cross1.png)"
			if(i<3){
			document.getElementById((3*i)).style.opacity = "0";
			document.getElementById((3*i)+1).style.opacity = "0";
			document.getElementById((3*i)+2).style.opacity = "0"
			document.getElementById((3*i)+9).style.opacity = "0";
			document.getElementById((3*i)+10).style.opacity = "0";
			document.getElementById((3*i)+11).style.opacity = "0";
			document.getElementById((3*i)+18).style.opacity = "0";
			document.getElementById((3*i)+19).style.opacity = "0";
			document.getElementById((3*i)+20).style.opacity = "0";}
			else if (i==5){
			document.getElementById((6*i)+3).style.opacity = "0";
			document.getElementById((6*i)+4).style.opacity = "0";
			document.getElementById((6*i)+5).style.opacity = "0";
			document.getElementById((6*i)+12).style.opacity = "0";
			document.getElementById((6*i)+13).style.opacity = "0";
			document.getElementById((6*i)+14).style.opacity = "0";
			document.getElementById((6*i)+21).style.opacity = "0";
			document.getElementById((6*i)+22).style.opacity = "0";
			document.getElementById((6*i)+23).style.opacity = "0";}
			else if (i==3 || i==6){
			document.getElementById((9*i)).style.opacity = "0";
			document.getElementById((9*i)+1).style.opacity = "0";
			document.getElementById((9*i)+2).style.opacity = "0"
			document.getElementById((9*i)+9).style.opacity = "0";
			document.getElementById((9*i)+10).style.opacity = "0";
			document.getElementById((9*i)+11).style.opacity = "0";
			document.getElementById((9*i)+18).style.opacity = "0";
			document.getElementById((9*i)+19).style.opacity = "0";
			document.getElementById((9*i)+20).style.opacity = "0";}
			if(i==4){
			document.getElementById((7*i)).style.opacity = "0";
			document.getElementById((7*i)+1).style.opacity = "0";
			document.getElementById((7*i)+2).style.opacity = "0"
			document.getElementById((7*i)+9).style.opacity = "0";
			document.getElementById((7*i)+10).style.opacity = "0";
			document.getElementById((7*i)+11).style.opacity = "0";
			document.getElementById((7*i)+18).style.opacity = "0";
			document.getElementById((7*i)+19).style.opacity = "0";
			document.getElementById((7*i)+20).style.opacity = "0";}
			else if (i==7){
			document.getElementById((8*i)+1).style.opacity = "0";
			document.getElementById((8*i)+2).style.opacity = "0";
			document.getElementById((8*i)+3).style.opacity = "0";
			document.getElementById((8*i)+10).style.opacity = "0";
			document.getElementById((8*i)+11).style.opacity = "0";
			document.getElementById((8*i)+12).style.opacity = "0";
			document.getElementById((8*i)+19).style.opacity = "0";
			document.getElementById((8*i)+20).style.opacity = "0";
			document.getElementById((8*i)+21).style.opacity = "0";}
			if(i==8){
			document.getElementById((7*i)+4).style.opacity = "0";
			document.getElementById((7*i)+5).style.opacity = "0";
			document.getElementById((7*i)+6).style.opacity = "0"
			document.getElementById((7*i)+13).style.opacity = "0";
			document.getElementById((7*i)+14).style.opacity = "0";
			document.getElementById((7*i)+15).style.opacity = "0";
			document.getElementById((7*i)+22).style.opacity = "0";
			document.getElementById((7*i)+23).style.opacity = "0";
			document.getElementById((7*i)+24).style.opacity = "0";}
			
			
        }
        else if (packet["params"]["bigBoard"][i] == "O") 
		{
            board_id[i].style.backgroundImage = board_id[i].style.backgroundImage = "url('circle1.png')";
            board_id[i].style.height = "24vh"
            board_id[i].style.width = "24vh"
			if(i<3){
			document.getElementById((3*i)).style.opacity = "0";
			document.getElementById((3*i)+1).style.opacity = "0";
			document.getElementById((3*i)+2).style.opacity = "0"
			document.getElementById((3*i)+9).style.opacity = "0";
			document.getElementById((3*i)+10).style.opacity = "0";
			document.getElementById((3*i)+11).style.opacity = "0";
			document.getElementById((3*i)+18).style.opacity = "0";
			document.getElementById((3*i)+19).style.opacity = "0";
			document.getElementById((3*i)+20).style.opacity = "0";}
			else if (i==5){
			document.getElementById((6*i)+3).style.opacity = "0";
			document.getElementById((6*i)+4).style.opacity = "0";
			document.getElementById((6*i)+5).style.opacity = "0";
			document.getElementById((6*i)+12).style.opacity = "0";
			document.getElementById((6*i)+13).style.opacity = "0";
			document.getElementById((6*i)+14).style.opacity = "0";
			document.getElementById((6*i)+21).style.opacity = "0";
			document.getElementById((6*i)+22).style.opacity = "0";
			document.getElementById((6*i)+23).style.opacity = "0";}
			else if (i==3 || i==6){
			document.getElementById((9*i)).style.opacity = "0";
			document.getElementById((9*i)+1).style.opacity = "0";
			document.getElementById((9*i)+2).style.opacity = "0"
			document.getElementById((9*i)+9).style.opacity = "0";
			document.getElementById((9*i)+10).style.opacity = "0";
			document.getElementById((9*i)+11).style.opacity = "0";
			document.getElementById((9*i)+18).style.opacity = "0";
			document.getElementById((9*i)+19).style.opacity = "0";
			document.getElementById((9*i)+20).style.opacity = "0";}
			if(i==4){
			document.getElementById((7*i)).style.opacity = "0";
			document.getElementById((7*i)+1).style.opacity = "0";
			document.getElementById((7*i)+2).style.opacity = "0"
			document.getElementById((7*i)+9).style.opacity = "0";
			document.getElementById((7*i)+10).style.opacity = "0";
			document.getElementById((7*i)+11).style.opacity = "0";
			document.getElementById((7*i)+18).style.opacity = "0";
			document.getElementById((7*i)+19).style.opacity = "0";
			document.getElementById((7*i)+20).style.opacity = "0";}
			else if (i==7){
			document.getElementById((8*i)+1).style.opacity = "0";
			document.getElementById((8*i)+2).style.opacity = "0";
			document.getElementById((8*i)+3).style.opacity = "0";
			document.getElementById((8*i)+10).style.opacity = "0";
			document.getElementById((8*i)+11).style.opacity = "0";
			document.getElementById((8*i)+12).style.opacity = "0";
			document.getElementById((8*i)+19).style.opacity = "0";
			document.getElementById((8*i)+20).style.opacity = "0";
			document.getElementById((8*i)+21).style.opacity = "0";}
			if(i==8){
			document.getElementById((7*i)+4).style.opacity = "0";
			document.getElementById((7*i)+5).style.opacity = "0";
			document.getElementById((7*i)+6).style.opacity = "0"
			document.getElementById((7*i)+13).style.opacity = "0";
			document.getElementById((7*i)+14).style.opacity = "0";
			document.getElementById((7*i)+15).style.opacity = "0";
			document.getElementById((7*i)+22).style.opacity = "0";
			document.getElementById((7*i)+23).style.opacity = "0";
			document.getElementById((7*i)+24).style.opacity = "0";}
        }
    }
    for (let i = 0; i < packet["params"]["board"].length; ++i) {
        if (packet["params"]["board"][i] == "X") {
            document.getElementById(i).classList.add(X_CLASS)
        }
        else if (packet["params"]["board"][i] == "O") {
            document.getElementById(i).classList.add(CIRCLE_CLASS)
        }
    }
	
	
		if (packet["params"]["whoWon"] == packet["params"]["you"])
		{
			document.getElementById("info").innerHTML = "Congrats! You won!"
			ttt_websocket.close(); 
		}
		else
	{

	let mar = packet["params"]["marked"]
	if (mar == -1)
	{
		for (let i=0; i<9; i++)
		board_id[i].style.border = "solid white 0.5vh"
	}
	else
	{
	board_id.forEach(board => {board.style.border = "0px"})
	board_id[mar].style.border = "solid white 0.5vh"
	}
	cellElements.forEach(cell => { cell.addEventListener('click', make_move)})
	function make_move(e)
	{
		if (packet["params"]["you"] == packet["params"]["move"])
	{
		document.getElementById("info").innerHTML = "Your move"
	}
	else 
	{
		document.getElementById("info").innerHTML = "Opponent's turn"
		cellElements.forEach(cell => { cell.removeEventListener('click', make_move)})
		
	}
		const cell = e.target
		
let x = cell.id % 9
let a = cell.id

if (a<9)
	y=0

else if (a>8 && a<18)
	y=1

else if (a>17 && a<27)
	y=2

else if (a>26 && a<36)
	y=3

else if (a>35 && a<45)
	y=4

else if (a>44 && a<54)
	y=5

else if (a>53 && a<63)
	y=6

else if (a>62 && a<72)
	y=7

else if (a>71 && a<81)
	y=8

	let move =
	{
	"status": 0,
    "method": "SET",
    "params": {
        "x": x,
        "y": y
    },
    "time": Math.round((new Date()).getTime()/1000)
	}
ttt_websocket.send(JSON.stringify(move))}}

	if (packet["method"] == "BAD")
{
	console.log(packet["params"]["msg"])
}

if (packet["method"] == "ERR")
{
	document.getElementById("info").innerHTML = "Ups. Something went wrong! Try again."
}
}}
