const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
/* ściąga
const board0 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const board1 = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const board2 = [18, 19, 20, 21, 22, 23, 24, 25, 26];
const board3 = [27, 28, 29, 30, 31, 32, 33, 34, 35];
const board4 = [36, 37, 38, 39, 40, 41, 42, 43, 44];
const board5 = [45, 46, 47, 48, 49, 50, 51, 52, 53];
const board6 = [54, 55, 56, 57, 58, 59, 60, 61, 62];
const board7 = [63, 64, 65, 66, 67, 68, 69, 70, 71];
const board8 = [72, 73, 74, 75, 76, 77, 78, 79, 80];
*/
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
const cellElements = document.querySelectorAll('[data-cell]')
const board_id = document.querySelectorAll('div.board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn
let turn = 0;
var cell;

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', getClick)
    cell.addEventListener('click', getClick, { once: true })
  })
  winningMessageElement.classList.remove('show')
  board_id.forEach(board => {board.style.border = "solid gray"})

}
function getClick(e)
{	
const cell = e.target	
	const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
if (cell.classList.contains(CIRCLE_CLASS) || cell.classList.contains(X_CLASS)){
	cell.removeEventListener('click', getClick)
}

else

	{
		
	console.log("clicked")
	console.log(turn)
	lastId = cell.id
	
	if (lastId == "cell_0" || lastId == "cell_9" || lastId == "cell_18" || lastId == "cell_27" || lastId == "cell_36" || lastId == "cell_45" || lastId == "cell_54" || lastId == "cell_63" || lastId == "cell_72")
	  {
		cellElements.forEach(cell => {cell.removeEventListener('click', getClick)})
		board_id.forEach(board => {board.style.border = "0px"})
		board_id[0].style.border = "solid gray"
		for(let i=0; i<9; i++)
		{
			cellElements[i].addEventListener('click', getClick)
	    }
	  }
	 
	else if (lastId == "cell_1" || lastId == "cell_10" || lastId == "cell_19" || lastId == "cell_28" || lastId == "cell_37" || 			lastId == "cell_46" || lastId == "cell_55" || lastId == "cell_64" || lastId == "cell_73")
	  {
		cellElements.forEach(cell => {cell.removeEventListener('click', getClick)})
		board_id.forEach(board => {board.style.border = "0px"})
		board_id[1].style.border = "solid gray"
		for(let i=9; i<18; i++)
		{
			cellElements[i].addEventListener('click', getClick)
			
	    }
	  }
	  
	  else if (lastId == "cell_2" || lastId == "cell_11" || lastId == "cell_20" || lastId == "cell_29" || lastId == "cell_38" || 		lastId == "cell_47" || lastId == "cell_56" || lastId == "cell_65" || lastId == "cell_74")
	  {
		cellElements.forEach(cell => {cell.removeEventListener('click', getClick)})
		board_id.forEach(board => {board.style.border = "0px"})
		board_id[2].style.border = "solid gray"
		for(let i=18; i<27; i++)
		{
			cellElements[i].addEventListener('click', getClick)
	    }
	  }
	  
	  else if (lastId == "cell_3" || lastId == "cell_12" || lastId == "cell_21" || lastId == "cell_30" || lastId == "cell_39" || 		lastId == "cell_48" || lastId == "cell_57" || lastId == "cell_66" || lastId == "cell_75")
	  {
		cellElements.forEach(cell => {cell.removeEventListener('click', getClick)})
		board_id.forEach(board => {board.style.border = "0px"})
		board_id[3].style.border = "solid gray"
		for(let i=27; i<36; i++)
		{
			cellElements[i].addEventListener('click', getClick)
			
	    }
	  }
	  
		else if (lastId == "cell_4" || lastId == "cell_13" || lastId == "cell_22" || lastId == "cell_31" || lastId == "cell_40" || 		lastId == "cell_49" || lastId == "cell_58" || lastId == "cell_67" || lastId == "cell_76")
	  {
		cellElements.forEach(cell => {cell.removeEventListener('click', getClick)})
		board_id.forEach(board => {board.style.border = "0px"})
		board_id[4].style.border = "solid gray"
		for(let i=36; i<45; i++)
		{
			cellElements[i].addEventListener('click', getClick)
	    }
	  }
		
		else if (lastId == "cell_5" || lastId == "cell_14" || lastId == "cell_23" || lastId == "cell_32" || lastId == "cell_41" || 		lastId == "cell_50" || lastId == "cell_59" || lastId == "cell_68" || lastId == "cell_77")
	  {
		cellElements.forEach(cell => {cell.removeEventListener('click', getClick)})
		board_id.forEach(board => {board.style.border = "0px"})
	    board_id[5].style.border = "solid gray"
		for(let i=45; i<54; i++)
		{
			cellElements[i].addEventListener('click', getClick)
	    }
	  }
		
		else if (lastId == "cell_6" || lastId == "cell_15" || lastId == "cell_24" || lastId == "cell_33" || lastId == "cell_42" || 		lastId == "cell_51" || lastId == "cell_60" || lastId == "cell_69" || lastId == "cell_78")
	  {
		cellElements.forEach(cell => {cell.removeEventListener('click', getClick)})
		board_id.forEach(board => {board.style.border = "0px"})
		board_id[6].style.border = "solid gray"
		
		for(let i=54; i<63; i++)
		{
			cellElements[i].addEventListener('click', getClick)
	    }
	  }
		
		else if (lastId == "cell_7" || lastId == "cell_16" || lastId == "cell_25" || lastId == "cell_34" || lastId == "cell_43" || 		lastId == "cell_52" || lastId == "cell_61" || lastId == "cell_70" || lastId == "cell_79")
	  {
		cellElements.forEach(cell => {cell.removeEventListener('click', getClick)})
		board_id.forEach(board => {board.style.border = "0px"})
		board_id[7].style.border = "solid gray"
		for(let i=63; i<72; i++)
		{
			cellElements[i].addEventListener('click', getClick)
	    }
	  }
		
		else if (lastId == "cell_8" || lastId == "cell_17" || lastId == "cell_26" || lastId == "cell_35" || lastId == "cell_44" || lastId == "cell_53" || lastId == "cell_62" || lastId == "cell_71" || lastId == "cell_80")
	  {
		cellElements.forEach(cell => {cell.removeEventListener('click', getClick)})
		board_id.forEach(board => {board.style.border = "0px"})
		board_id[8].style.border = "solid gray"
		for(let i=72; i<81; i++)
		{
			cellElements[i].addEventListener('click', getClick)
	    }
	  }

  placeMark(cell, currentClass)
  
    swapTurns()
	console.log(lastId)
	turn++}
}
function placeMark(cell, currentClass) {
cell.classList.add(currentClass)
}

function swapTurns() {
  circleTurn = !circleTurn
}
