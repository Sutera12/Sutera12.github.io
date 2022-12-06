let tweet = document.querySelector("#tweets");
/**for(let i = 0; i < tweets.length; i++){
  tweet.innerHTML += "<p>" + tweets[i].name + "</p>";
  tweet.innerHTML += "<p>" + tweets[i].message + "</p>";
  tweet.innerHTML += "<p>" + tweets[i].tweetedAt + "</p>";
  tweet.innerHTML +=`<img id='icon' style='width:60px; height: 75px' src="${tweets[i].avatar}">`;}
**/
function tweetAll(){
  tweet.innerHTML="";
  for(let i = 0; i < tweets.length; i++){
    tweet.innerHTML += "<p>" + tweets[i].name + "</p>";
    tweet.innerHTML += "<p>" + tweets[i].message + "</p>";
    tweet.innerHTML += "<p>" + tweets[i].tweetedAt + "</p>";
    tweet.innerHTML +=`<img id='icon' style='width:60px; height: 75px' src="${tweets[i].avatar}">`;}
};

function tweetTaro(){
  tweet.innerHTML="";
  for(let i = 0; i < tweets.length; i++){
    if (tweets[i].name === "太郎"){
      tweet.innerHTML += "<p>" + tweets[i].name + "</p>";
      tweet.innerHTML += "<p>" + tweets[i].message + "</p>";
      tweet.innerHTML += "<p>" + tweets[i].tweetedAt + "</p>";
      tweet.innerHTML +=`<img id='icon' style='width:60px; height: 75px' src="${tweets[i].avatar}">`;}
    }
};

function tweetJiro(){
  tweet.innerHTML="";
  for(let i = 0; i < tweets.length; i++){
    if (tweets[i].name === "次郎"){
      tweet.innerHTML += "<p>" + tweets[i].name + "</p>";
      tweet.innerHTML += "<p>" + tweets[i].message + "</p>";
      tweet.innerHTML += "<p>" + tweets[i].tweetedAt + "</p>";
      tweet.innerHTML +=`<img id='icon' style='width:60px; height: 75px' src="${tweets[i].avatar}">`;}
  }
};

function tweetSabro(){
  tweet.innerHTML="";
  for(let i = 0; i < tweets.length; i++){
    if (tweets[i].name === "三郎BOT"){
      tweet.innerHTML += "<p>" + tweets[i].name + "</p>";
      tweet.innerHTML += "<p>" + tweets[i].message + "</p>";
      tweet.innerHTML += "<p>" + tweets[i].tweetedAt + "</p>";
      tweet.innerHTML +=`<img id='icon' style='width:60px; height: 75px' src="${tweets[i].avatar}">`;}
  }
};
