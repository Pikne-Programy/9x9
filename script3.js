const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'

const cellElements = document.querySelectorAll('div.cell')
const board_id = document.querySelectorAll('div.board')
let cell;

var board = "XO-XO-----O-X------O-X------O-X---------------------------X----------------------"
var bigboard = "-X----O--"

for (let i=0; i < board.length; ++i)
{
	if (board[i] == "X")
	{
		cellElements[i].classList.add(X_CLASS)
	}
	else if (board[i] == "O")
	{
		cellElements[i].classList.add(CIRCLE_CLASS)
	}
}

for (let i=0; i < bigboard.length; ++i)
{
	if (bigboard[i] == "X")
	{	
		board_id[i].style.height = "24vh"
		board_id[i].style.width = "24vh"		
		board_id[i].innerHTML = ""
		board_id[i].style.backgroundImage = "url('cross1.png')";
	}
	else if (bigboard[i] == "O")
	{		
		board_id[i].innerHTML = ""
		board_id[i].style.backgroundImage = board_id[i].style.backgroundImage = "url('circle1.png')";
		board_id[i].style.height = "24vh"
		board_id[i].style.width = "24vh"
	}
}
	board_id[1].style.border = "0px"
	board_id[6].style.border = "0px"
