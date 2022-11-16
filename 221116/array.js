function doArray(){
  let answer = document.querySelector("#answer")
  let html = "<ul>";
  let i = 0;
  while(i < fruitNames.length){
    html += `<li>${fruitNames[i]}</li>`
    i++;
  }

html += "</ul>";
  answer.innerHTML = html;
}