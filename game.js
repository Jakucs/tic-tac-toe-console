import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

//segédfüggvény késleltetéshez:
/*function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}*/

function getEmptyBoard(){
    let board = [
            [".", ".", "."],
            ["." ,".", "."],
            [".", ".", "."]
    ]
    return board
}


function displayBoard(board){
    console.log(" ", "1", " ", "2", " ", "3")
    console.log("A", board[0][0], "|", board[0][1], "|",  board[0][2])
    console.log("----+---+----")
    console.log("B", board[1][0], "|", board[1][1], "|", board[1][2])
    console.log("----+---+----")
    console.log("C", board[2][0], "|", board[2][1], "|", board[2][2])
    
}

displayBoard(getEmptyBoard())