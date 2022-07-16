function start(){
  exe=1;
  wood=0;
  document.write('<link rel="stylesheet" href="style.css"><center><button onclick="game();">Игра</button><button onclick="invy();">Инветнарь</button><button onclick="create();">Рецепты</button><div id="windows"><img  onclick="add_wood();" src="img/Куст.png" width="100" height="100"></div></center>');
}
function add_wood(){
  if(exe==2){
    wood=wood+2;
  }
  else{
    wood=wood+1;
  }
}
function game(){
  windows.innerHTML='<img  onclick="add_wood();" src="img/Куст.png" width="100" height="100">';
}
function invy(){
  windows.innerHTML="Дерево:"+ wood;

    
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