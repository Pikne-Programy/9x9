const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
let wins;
const WINNING_COMBINATIONS_BOARD0 = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const WINNING_COMBINATIONS_BOARD1 = [
  [ 9, 10, 11],
  [12, 13, 14],
  [15, 16, 17],
  [ 9, 12, 15],
  [10, 13, 16],
  [11, 14, 17],
  [9, 13, 17],
  [11, 13, 15]
]
const WINNING_COMBINATIONS_BOARD2 = [
  [18, 19, 20],
  [21, 22, 23],
  [24, 25, 26],
  [18, 21, 24],
  [19, 22, 25],
  [20, 23, 26],
  [18, 22, 26],
  [20, 22, 24]
]
const WINNING_COMBINATIONS_BOARD3 = [
  [27, 28, 29],
  [30, 31, 32],
  [33, 34, 35],
  [27, 30, 33],
  [28, 31, 34],
  [29, 32, 33],
  [27, 31, 35],
  [29, 31, 33]
]
const WINNING_COMBINATIONS_BOARD4 = [
  [36, 37, 38],
  [39, 40, 41],
  [42, 43, 44],
  [36, 39, 42],
  [37, 40, 43],
  [38, 41, 44],
  [36, 40, 44],
  [38, 40, 42]
]
const WINNING_COMBINATIONS_BOARD5 = [
  [45, 46, 47],
  [48, 49, 50],
  [51, 52, 53],
  [45, 48, 51],
  [46, 49, 52],
  [47, 50, 53],
  [45, 49, 53],
  [47, 49, 51]
]
const WINNING_COMBINATIONS_BOARD6 = [
  [54, 55, 56],
  [57, 58, 59],
  [60, 61, 62],
  [54, 57, 60],
  [55, 58, 61],
  [56, 59, 62],
  [54, 58, 62],
  [56, 58, 60]
]
const WINNING_COMBINATIONS_BOARD7 = [
  [63, 64, 65],
  [66, 67, 68],
  [69, 70, 71],
  [63, 66, 69],
  [64, 67, 70],
  [65, 68, 71],
  [63, 67, 71],
  [65, 67, 69]
]
const WINNING_COMBINATIONS_BOARD8 = [
  [72, 73, 74],
  [75, 76, 77],
  [78, 79, 80],
  [72, 75, 78],
  [73, 76, 79],
  [74, 77, 80],
  [72, 76, 80],
  [74, 76, 78]
]
const WINNING_COMBINATIONS_BOARD9 = [
  [72, 73, 74],
  [75, 76, 77],
  [78, 79, 80],
  [72, 75, 78],
  [73, 76, 79],
  [74, 77, 80],
  [72, 76, 80],
  [74, 76, 78]
]
const cellElements = document.querySelectorAll('div.cell')
const board_id = document.querySelectorAll('div.board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn
let turn = 0;
let x;
let y;
let cell;
let wins0;
let wins1;

startGame()

let marked = -1; 
//restartButton.addEventListener('click', startGame)

function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', getClick)
    cell.addEventListener('click', getClick, { once: true })
  })
  board_id.forEach(board => {board.style.border = "solid white"})
  wins = "012345678"

}

function getClick(e)
{
const cell = e.target
const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
if (currentClass == X_CLASS)
	document.getElementById("info").innerHTML="Now playing: X"
if (currentClass == CIRCLE_CLASS)
	document.getElementById("info").innerHTML="Now playing: O"

if (cell.classList.contains(CIRCLE_CLASS) || cell.classList.contains(X_CLASS)){
	cell.removeEventListener('click', getClick)
}
else
	{	
if (marked == -1)
{
	board_id.forEach(board => {board.style.border = "solid white"})
	cellElements.forEach(cell => {cell.addEventListener('click', getClick)})
}	
else
{
	board_id[marked].style.border = "solid white";
	
	for(var i = (marked * 9); i < (marked * 9) + 9; ++i)
	{
		cellElements[i].addEventListener('click', getClick)
	}
}
	lastId = cell.id
	
	if (lastId == 0 || lastId == 9 || lastId == 18 || lastId == 27 || lastId == 36 || lastId == 45 || lastId == 54 || lastId == 63 || 
	lastId == 72)
	  {
		if(wins[0] == "X" || wins[0] == "O")
		{
			marked = -1;
		}
		else 
		{
			marked = 0;
		}
		cellElements.forEach(cell => {cell.removeEventListener('click', getClick)})
		board_id.forEach(board => {board.style.border = "0px"})
		board_id[0].style.border = "solid white"
		for(let i=0; i<9; i++)
		{
			cellElements[i].addEventListener('click', getClick)
	    }
	  }
	 
	else if (lastId == 1 || lastId == 10 || lastId == 19 || lastId == 28 || lastId == 37 ||	lastId == 46 || lastId == 55 || lastId == 64 || lastId == 73)
	  {
		if(wins[1] == "X" || wins[1] == "O")
		{
			marked = -1;
		}
		else 
		{
			marked = 1;
		}
	  }
	  
	  else if (lastId == 2 || lastId == 11 || lastId == 20 || lastId == 29 || lastId == 38 || lastId == 47 || lastId == 56 || lastId == 65|| lastId == 74)
	  {
		if(wins[2] == "X" || wins[2] == "O")
		{
			marked = -1;
		}
		else 
		{
			marked = 2;
		}		  
	  }
	  
	  else if (lastId == 3 || lastId == 12 || lastId == 21 || lastId == 30 || lastId == 39 || lastId == 48 || lastId == 57 || lastId == 66 || lastId == 75)
	  {
		if(wins[3] == "X" || wins[3] == "O")
		{
			marked = -1;
		}
		else 
		{
			marked = 3;
		}		  
	  }
	  
		else if (lastId == "4" || lastId == "13" || lastId == "22" || lastId == "31" || lastId == "40" || 		lastId == "49" || lastId == "58" || lastId == "67" || lastId == "76")
	  {
		if(wins[4] == "X" || wins[4] == "O")
		{
			marked = -1;
		}
		else 
		{
			marked = 4;
		}	
	  }
		
		else if (lastId == "5" || lastId == "14" || lastId == "23" || lastId == "32" || lastId == "41" || 		lastId == "50" || lastId == "59" || lastId == "68" || lastId == "77")
	  {
		if(wins[5] == "X" || wins[5] == "O")
		{
			marked = -1;
		}
		else 
		{
			marked = 5;
		}	
	  }
		
		else if (lastId == "6" || lastId == "15" || lastId == "24" || lastId == "33" || lastId == "42" || 		lastId == "51" || lastId == "60" || lastId == "69" || lastId == "78")
	  {
		if(wins[6] == "X" || wins[6] == "O")
		{
			marked = -1;
		}
		else 
		{
			marked = 6;
		}	
	  }
		
		else if (lastId == "7" || lastId == "16" || lastId == "25" || lastId == "34" || lastId == "43" || 		lastId == "52" || lastId == "61" || lastId == "70" || lastId == "79")
	  {
		if(wins[7] == "X" || wins[7] == "O")
		{
			marked = -1;
		}
		else 
		{
			marked = 7;
		}	
	  }
		
		else if (lastId == "8" || lastId == "17" || lastId == "26" || lastId == "35" || lastId == "44" || lastId == "53" || lastId == "62" || lastId == "71" || lastId == "80")
	  {
		if(wins[8] == "X" || wins[8] == "O")
		{
			marked = -1;
		}
		else 
		{
			marked = 8;
		}	
	  }

	bigBoard()
	placeMark(cell, currentClass)
	if(checkWins0(currentClass))
	{
		if(currentClass == X_CLASS)
		{
			wins0 = wins.replace(/0/g, "X")
			wins = wins0
		}
		else
		{
			wins0 = wins.replace(/0/g, "O")
			wins = wins0
		}
	bigBoard()
	wins = wins0	
	}
	console.log(checkWins1(currentClass))
	if(checkWins1(currentClass))
	{
		if(currentClass == X_CLASS)
		{
			wins1 = wins.replace(/1/g, "X")
		}
		else
		{
			wins1 = wins.replace(/1/g, "O")
			
		}	
		wins = wins1
	}
	if(checkWins2(currentClass))
	{
		if(currentClass == X_CLASS)
		{
			wins1 = wins.replace(/2/g, "X")
		}
		else
		{
			wins1 = wins.replace(/2/g, "O")
		}	
		wins = wins1
	}
	if(checkWins3(currentClass))
	{
		if(currentClass == X_CLASS)
		{
			wins1 = wins.replace(/3/g, "X")
		}
		else
		{
			wins1 = wins.replace(/3/g, "O")
		}	
		wins = wins1
	}
	if(checkWins4(currentClass))
	{
		if(currentClass == X_CLASS)
		{
			wins1 = wins.replace(/4/g, "X")
		}
		else
		{
			wins1 = wins.replace(/4/g, "O")
		}	
		bigBoard()
		wins = wins1
	}
	if(checkWins5(currentClass))
	{
		if(currentClass == X_CLASS)
		{
			wins1 = wins.replace(/5/g, "X")
		}
		else
		{
			wins1 = wins.replace(/5/g, "O")
		}	
		bigBoard()
		wins = wins1
	}
	if(checkWins6(currentClass))
	{
		if(currentClass == X_CLASS)
		{
			wins1 = wins.replace(/6/g, "X")
		}
		else
		{
			wins1 = wins.replace(/6/g, "O")
		}	
		bigBoard()
		wins = wins1
	}
	if(checkWins7(currentClass))
	{
		if(currentClass == X_CLASS)
		{
			wins1 = wins.replace(/7/g, "X")
		}
		else
		{
			wins1 = wins.replace(/7/g, "O")
		}	
		bigBoard()
		wins = wins1
	}
	if(checkWins8(currentClass))
	{
		if(currentClass == X_CLASS)
		{
			wins1 = wins.replace(/8/g, "X")
		}
		else
		{
			wins1 = wins.replace(/8/g, "O")
		}	
		bigBoard()
		wins = wins1
	}
	bigBoard();
	checkWin()
    swapTurns()

if (marked == -1)
{
	board_id.forEach(board => {board.style.border = "solid white"})
	cellElements.forEach(cell => {cell.addEventListener('click', getClick)})
	for(let i=0; i<9; i++)
	{
		if(wins[i] == "X" || wins[i] == "O")
			board_id[i].style.border = "0px"
	}
}	
else
{
	board_id.forEach(board => {board.style.border = "0px"})
	board_id[marked].style.border = "solid white";
	
	for(let i = (marked * 9); i < (marked * 9) + 9; ++i)
	{
		cellElements[i].addEventListener('click', getClick)
	}
}
}}

function placeMark(cell, currentClass) {
cell.classList.add(currentClass)
}

function swapTurns() {
  circleTurn = !circleTurn
}


function checkWins0(currentClass)
{
  return WINNING_COMBINATIONS_BOARD0.some(combination => 
     combination.every(index => 
      cellElements[index].classList.contains(currentClass)
    )
  )
}
function checkWins1(currentClass)
{
  return WINNING_COMBINATIONS_BOARD1.some(combination => 
  combination.every(index => 
  cellElements[index].classList.contains(currentClass)
    )
  )
}
function checkWins2(currentClass)
{
  return WINNING_COMBINATIONS_BOARD2.some(combination => 
  combination.every(index => 
  cellElements[index].classList.contains(currentClass)
    )
  )
}function checkWins3(currentClass)
{
  return WINNING_COMBINATIONS_BOARD3.some(combination => 
  combination.every(index => 
  cellElements[index].classList.contains(currentClass)
    )
  )
}function checkWins4(currentClass)
{
  return WINNING_COMBINATIONS_BOARD4.some(combination => 
  combination.every(index => 
  cellElements[index].classList.contains(currentClass)
    )
  )
}function checkWins5(currentClass)
{
  return WINNING_COMBINATIONS_BOARD5.some(combination => 
  combination.every(index => 
  cellElements[index].classList.contains(currentClass)
    )
  )
}function checkWins6(currentClass)
{
  return WINNING_COMBINATIONS_BOARD6.some(combination => 
  combination.every(index => 
  cellElements[index].classList.contains(currentClass)
    )
  )
}function checkWins7(currentClass)
{
  return WINNING_COMBINATIONS_BOARD7.some(combination => 
  combination.every(index => 
  cellElements[index].classList.contains(currentClass)
    )
  )
}function checkWins8(currentClass)
{
  return WINNING_COMBINATIONS_BOARD8.some(combination => 
  combination.every(index => 
  cellElements[index].classList.contains(currentClass)
    )
  )
}
function bigBoard(currentClass)
{
	for(let i = 0; i < 9; i++)
	{
		if(wins[i] == "X")
		{
			board_id[i].style.height = "24vh"
            board_id[i].style.width = "24vh"
            board_id[i].classList.add("big")
            board_id[i].style.backgroundImage = "url(cross1.png)"
			for(let j = i*9; j < i*9 + 9; j++)
			{
				cellElements[j].style.opacity = "0";
				//cellElements[j].removeEventListener('click', getClick)
			}
		}
		else if(wins[i] == "O")
		{
			board_id[i].style.height = "24vh"
            board_id[i].style.width = "24vh"
            board_id[i].classList.add("big")
            board_id[i].style.backgroundImage = "url(circle1.png)"
			for(let j = i*9; j < i*9 + 9; j++)
			{
				cellElements[j].style.opacity = "0";
				//cellElements[j].removeEventListener('click', getClick)
			}
		}
	}
}

function checkWin(currentClass) 
{
  if((wins[0] == "X" && wins[1] == "X" && wins[2] =="X") || (wins[3] == "X" && wins[4] == "X" && wins[5] =="X") || (wins[6] == "X" && wins[7] == "X" && wins[8] =="X") || (wins[0] == "X" && wins[3] == "X" && wins[6] =="X") || (wins[1] == "X" && wins[4] == "X" && wins[7] =="X") || (wins[2] == "X" && wins[5] == "X" && wins[8] =="X") || (wins[0] == "X" && wins[4] == "X" && wins[8] =="X") || (wins[2] == "X" && wins[4] == "X" && wins[6] =="X"))
	  document.getElementById("info").innerHTML = "X's win!"
  else if
  ((wins[0] == "O" && wins[1] == "O" && wins[2] =="O") || (wins[3] == "O" && wins[4] == "O" && wins[5] =="O") || (wins[6] == "O" && wins[7] == "O" && wins[8] =="O") || (wins[0] == "O" && wins[3] == "O" && wins[6] =="O") || (wins[1] == "O" && wins[4] == "O" && wins[7] =="O") || (wins[2] == "O" && wins[5] == "O" && wins[8] =="O") || (wins[0] == "O" && wins[4] == "O" && wins[8] =="O") || (wins[2] == "O" && wins[4] == "O" && wins[6] =="O"))
	  document.getElementById("info").innerHTML = "O's win!"
  else
	{}
}
