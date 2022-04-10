// imena igraca 
// kockice za igrace (k1,k2)
// ispisivanje u konzoli
// 10 rundi
// pobednik
let player1Name = prompt("Name first player");
let player2Name = prompt("Name second player");
let player1Score = 0; 
let player2Score = 0;
let round = 0;
rollTheDice();
function rollTheDice(){
    round++;
    let k1 = Math.floor(Math.random() * 6 + 1);  // 5, 3
    let k2 = Math.floor(Math.random() * 6 + 1); // 3, 6
    player1Score = player1Score + k1; // 5
    player2Score += k2; // 3
    console.log(`%c*** Round ${round} ***`,"color:red");
    console.log(`${player1Name} ${k1} : ${player2Name} ${k2}     (${player1Score} - ${player2Score})`);
    if(round < 10){
        setTimeout(rollTheDice,2000);
    }else{
        displayWinner();
    }
}
function displayWinner(){
    if(player1Score > player2Score){
        console.log("*** WINNER IS "+ player1Name +" ****");
    }
    if(player1Score < player2Score){
        console.log("*** WINNER IS "+ player2Name +" ****");
    }
    if(player1Score === player2Score){
        console.log("*** NO WINNERS ****");
    }
}