function showModal(){
  console.log("showModal()の実行テスト");
  let modal = document.querySelector( "#modal");
  modal.innerHTML = "ボタンが押されました";
}

function changeRed(){
  document.body.style.backgroundColor = "red";
}
function changeYellow(){
  document.body.style.backgroundColor = "Yellow";
}
function changeGreen(){
  document.body.style.backgroundColor = "Green";
}

function appendCircle(){
  console.log("〇")
}
function appendCross(){
  console.log("✕")
}

function CircleCross(){
  var result = appendCircle + appendCross;
  console.log(result);
}
