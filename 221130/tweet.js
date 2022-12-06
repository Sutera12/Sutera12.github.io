let tweet = document.querySelector("#tweets");
for(let i = 0; i < tweets.length; i++){
  tweet.innerHTML += "<p>" + tweets[i].name + "</p>";
  tweet.innerHTML += "<p>" + tweets[i].message + "</p>";
  tweet.innerHTML += "<p>" + tweets[i].tweetedAt + "</p>";
  tweet.innerHTML +=`<img id='icon' style='width:60px; height: 80px' src="${tweets[i].avatar}">`;}

function tweetAll(){

};

function tweetTaro(){

};

function tweetJiro(){

};

function tweetSabro(){

};
