import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

//segédfüggvény késleltetéshez:
/*function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}*/
let userInput;
let coordinate;
let boardItems;
let currentPlayer;
let counter = 2;
let inGame = true;
let win;

function getEmptyBoard(){
    boardItems = [
            [".", ".", "."],
            ["." ,".", "."],
            [".", ".", "."]
    ]
    return boardItems
}

function displayBoard(boardItems){
    console.log(" ", "1", " ", "2", " ", "3")
    console.log("A", boardItems[0][0], "|", boardItems[0][1], "|", boardItems[0][2])
    console.log("----+---+----")
    console.log("B", boardItems[1][0], "|", boardItems[1][1], "|", boardItems[1][2])
    console.log("----+---+----")
    console.log("C", boardItems[2][0], "|", boardItems[2][1], "|", boardItems[2][2])
    
}



function getHumanCoordinates(){
    let array = [];
    userInput = prompt("Your coordinate: ")
    while(userInput != "a1" && userInput != "a2" && userInput != "a3" && 
        userInput != "b1" && userInput != "b2" && userInput != "b3" && 
        userInput != "c1" && userInput != "c2" && userInput != "c3"){
            userInput = prompt("Your coordinate: ")
    } for (let i of userInput){
        if (i == "a"){
            array.push(0)
        } else if ( i == "b"){
            array.push(1)
        } else if ( i == "c"){
            array.push(2)
        } else if ( i == "1"){
            array.push(0)
        } else if ( i == "2"){
            array.push(1)
        } else if ( i == "3"){
            array.push(2)
        }
    }
    return array
}

function makeMove(boardItems, coordinate, currentPlayer){
    if (boardItems[coordinate[0]][coordinate[1]] == "."){
        boardItems[coordinate[0]][coordinate[1]] = currentPlayer;
    }else{
        counter--;
        console.log("Ez már volt")
    }
}

function isBoardFull(){
    let boardItems2 = [];
    for (let i of boardItems){
        for (let j of i){
            boardItems2.push(j)
        }
    }
    if((boardItems2.includes("."))){
        return true
    }else{
        return false
    }
}


function getWinningPlayer(){
    console.log("boardItems:", boardItems)
    if(boardItems[0][0] == "X" && boardItems[0][1] == "X" && boardItems[0][2] == "X"){
        console.log("Vízszintesen nyert az X")
    } else if (boardItems[1][0] == "X" && boardItems[1][1] == "X" && boardItems[1][2] == "X"){
        console.log("Vízszintesen nyert az X")
    } else if (boardItems[2][0] == "X" && boardItems[2][1] == "X" && boardItems[2][2] == "X"){
        console.log("Vízszintesen nyert az X")
    } else if (boardItems[0][0] == "O" && boardItems[0][1] == "O" && boardItems[0][2] == "O"){
        console.log("Vízszintesen nyert az O")
    } else if (boardItems[1][0] == "O" && boardItems[1][1] == "O" && boardItems[1][2] == "O"){
        console.log("Vízszintesen nyert az O")
    } else if (boardItems[2][0] == "O" && boardItems[2][1] == "O" && boardItems[2][2] == "O"){
        console.log("Vízszintesen nyert az O")
    } else if (boardItems[0][0] == "X" && boardItems[1][0] == "X" && boardItems[2][0] == "X"){
        console.log("Függőlegesen nyert az X")
    } else if (boardItems[0][1] == "X" && boardItems[1][1] == "X" && boardItems[2][1] == "X"){
        console.log("Függőlegesen nyert az X")
    } else if (boardItems[0][2] == "X" && boardItems[1][2] == "X" && boardItems[2][2] == "X"){
        console.log("Függőlegesen nyert az X")
    } else if (boardItems[0][0] == "O" && boardItems[1][0] == "O" && boardItems[2][0] == "O"){
        console.log("Függőlegesen nyert az O")
    } else if (boardItems[0][1] == "O" && boardItems[1][1] == "O" && boardItems[2][1] == "O"){
        console.log("Függőlegesen nyert az O")
    } else if (boardItems[0][2] == "O" && boardItems[1][2] == "O" && boardItems[2][2] == "O"){
        console.log("Függőlegesen nyert az O")
    }
}


function game(){
    displayBoard(getEmptyBoard())
    while(inGame){
        counter++
        if(counter%2==0){
            currentPlayer="O";
        }else{
            currentPlayer="X";
        }
        coordinate = getHumanCoordinates()
        makeMove(boardItems, coordinate, currentPlayer)
        displayBoard(boardItems)
        win = isBoardFull()
        getWinningPlayer()
    }
}

game()