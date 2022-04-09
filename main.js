// imena igraca
// kockice za igrace 
// ispisivanje u konzoli
// 10 rundi
// pobednik

let player1Name = prompt("Ime prvog igraca");
let player2Name = prompt("Ime drugog igraca");

let player1Score = 0;
let player2score = 0;

let round = 0;

bacanjeKockica();

function bacanjeKockica(){
 round++;
 let k1 = Math.floor(Math.random() * 6 + 1);  //5, 3
 let k2 = Math.floor(Math.random() * 6 + 1); //3, 6

 player1Score = player1Score + k1; //5
 player2score += k2; //3

 console.log(`%c*** Round ${round} ***`, "color:red");
 console.log(`${player1Name} ${k1} : ${player2Name} ${k2} (${player1Score} - ${player2score})`);

 if(round < 10){
     setTimeout(bacanjeKockice,2000);
 }else{
     displayWinner();
 }
 
}