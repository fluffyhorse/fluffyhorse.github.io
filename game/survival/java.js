function start(){
  exe=1;
  wood=0;
  stone=0;
  document.write('<head><script src="java.js"></script><link rel="stylesheet" href="style.css"><meta http-equiv="Content-Type" content="text/html; charset=utf-8">         <title>Выживание на острове</title><link rel="stylesheet" href="style.css"><center><button onclick="game();">Игра</button><button onclick="invy();">Инветнарь</button><button onclick="create();">Рецепты</button><div id="windows"><table><tr><td><img  onclick="add_wood();" src="img/Куст.png" width="100" height="100"></td><td><img  onclick="add_stone();" src="img/Камень.png" width="100" height="100"></td></tr><tr><td><img  onclick="exit_restoring();" src="img/Корабль сломан.png" width="100" height="100"></td></tr></table></div></center>');
}
function add_wood(){
  if(exe==2){
    wood=wood+2;
  }
  else{
    wood=wood+1;
  }
}
function add_stone(){
  stone=stone+1;
}
function game(){
  windows.innerHTML='<table><tr><td><img  onclick="add_wood();" src="img/Куст.png" width="100" height="100"></td><td><img  onclick="add_stone();" src="img/Камень.png" width="100" height="100"></td></tr><tr><td><img  onclick="exit_restoring();" src="img/Корабль сломан.png" width="100" height="100"></td></tr></table>';
}
function invy(){
  windows.innerHTML="Дерево:"+ wood+"Камень"+stone;
  if(exe==2){
    windows.innerHTML="Дерево:"+ wood+"Камень"+stone+"<p>топор</p>";
  }
    
}
function create(){
  windows.innerHTML="<button onclick='exe_add();'>Топор</button> 5 дерева";
}
function exe_add(){
  if(wood>=5){
    exe=2;
    wood=wood-5;
    windows.innerHTML="Создано";
  }
  else{
    windows.innerHTML="Мало ингридиентов";
  }
}
function exit_restoring(){
  if(wood>=100){
    windows.innerHTML='<table><tr><td><img  onclick="add_wood();" src="img/Куст.png" width="100" height="100"></td><td><img  onclick="add_stone();" src="img/Камень.png" width="100" height="100"></td></tr><tr><td><img  onclick="exit();" src="img/Корабль.png" width="100" height="100"></td></tr></table>';
  }
  else{
    windows.innerHTML="Мало ингридиентов";
  }
}
function exit(){
  windows.innerHTML="<h2>Вы выжили!</h2><p>Достижение: Выживший</p>";
}