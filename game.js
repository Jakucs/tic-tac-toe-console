import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

//segédfüggvény késleltetéshez:
/*function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}*/
let coordinate;
let boardItems;
let currentPlayer;
let counter = 2;
let inGame = true;

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
    let userInput = prompt("Your coordinate: ")
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
    boardItems[coordinate[0]][coordinate[1]] = currentPlayer;
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
        isBoardFull()
    }
}

game()