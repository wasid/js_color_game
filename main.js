var numbofsqr = 6;
var colors = [];
var pickedcolor;
var squares = document.querySelectorAll(".square");
var colordp = document.getElementById("colordp");
var reset = document.getElementById("reset");
var msg = document.getElementById("msg");
var h1 = document.querySelector("h1");
var modebtn = document.querySelectorAll(".mode");

init();

function init(){
  setupbtn();
  setupsqr();
  resetall();
}

function setupsqr(){
   for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];

    squares[i].addEventListener('click', function(){

      var clickedcolor = this.style.background;
      if(clickedcolor === pickedcolor){
        msg.textContent = "Correctly Picked!";
        reset.textContent = "Play Again!";
        changecolor(clickedcolor);
        h1.style.background = clickedcolor;
      }

      else{
        this.style.background = "#232323";
        msg.textContent = "Try Again!";
      } 

    });

  }
}

function setupbtn(){

  for(var i = 0; i < modebtn.length; i++){

    modebtn[i].addEventListener('click', function(){
      modebtn[0].classList.remove('selected');
      modebtn[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === "Easy" ? numbofsqr = 3: numbofsqr = 6;
      resetall();

    });  

  }
}

function resetall(){
  
  colors = generaterandcolor(numbofsqr);
  
  pickedcolor = pickcolor();
  
  colordp.textContent = pickedcolor;
  
  msg.textContent = "";
  
  reset.textContent = "New Color";
  
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } 
    else{
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

reset.addEventListener('click', function(){

  resetall();
    
});



function changecolor(color){
  for(j=0; j<squares.length; j++){
    squares[j].style.background = color;
  }
}

function pickcolor(){
  var rand = Math.floor(Math.random()*colors.length);
  return colors[rand];
}

function generaterandcolor(num){
  
  var colorarr = [];
  
  for(k=0; k<num; k++){
   colorarr.push(createRGB());  
  }
  
  return colorarr;
  
}

function createRGB(){
  var r = Math.floor(Math.random()*256);
  
  var g = Math.floor(Math.random()*256);
  
  var b = Math.floor(Math.random()*256);
  
  var randcolor = "rgb(" + r +", " + g + ", " + b + ")";
  
  return randcolor;
}