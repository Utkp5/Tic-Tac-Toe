console.log("Welcome to Tic Tac Toe");
let sound = new Audio("clicksound.wav");
let bari = '0';
let gameover = false;
// bari(turn)
const changebari = () =>
{
  return bari === '0'? 'X' : '0' 
}

const win = () =>  //arrow function  <-
{
  let sppan = document.getElementsByClassName('span');
  let wins = [
    [0,1,2, 1,5,0],
    [3,4,5, 1,15,0],
    [6,7,8, 1,25,0],
    [0,3,6, -9,14.5,90],
    [1,4,7, 1,14.5,90],
    [2,5,8, 11.2,14.5,90],
    [0,4,8, 1.2,15,45],
    [2,4,6, 1,15,135],
  ]
    wins.forEach(e => {
    if ((sppan[e[0]].innerText === sppan[e[1]].innerText) && (sppan[e[2]].innerText === sppan[e[1]].innerText) && 
       (sppan[e[0]].innerText !== ""))
    {
      document.getElementById("span").innerText = sppan[e[0]].innerText + " Won";
      document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      document.querySelector(".line").style.width = "58vh";
      confirm(document.getElementById("span").innerText = sppan[e[0]].innerText + " Won");
      gameover = true;
    }
});
}

let item = document.getElementsByClassName('items');
Array.from(item).forEach(e => {
  let spann = e.querySelector('.span');
  e.addEventListener('click', () => {
    if (spann.innerText === '') {
      spann.innerText = bari;
      bari = changebari();
      sound.play();
      win();
      if(!gameover)
      {
        let a = document.getElementById("span").innerHTML = "Turn for ";
        let b = document.getElementsByClassName("subspan").innerHTML = bari;
        document.getElementById("span").innerHTML = a+b;
      }
    }
  })
});

playagain.addEventListener('click', () => {
  let spaan = document.querySelectorAll('.span');
  Array.from(spaan).forEach(element => {
    element.innerText = "";
  });
  bari = '0';
  gameover = false;
     let a = document.getElementById("span").innerHTML = "Turn for ";
     let b = document.getElementsByClassName("subspan").innerHTML = bari;
      document.getElementById("span").innerHTML = a+b;
      document.querySelector(".line").style.width = "0vh";
  
});