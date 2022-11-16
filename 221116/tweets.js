let answer = document.querySelector("#answer")
let html = "<ul>";

/*let i = 0;
while (i < tweets.length){
  html += `<li><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></li>`;
  i++;
}*/

let renderTweet = function(tweet){
  html = `<li><b>${tweet.name}</b>: ${tweet.message} <i>${tweet.tweetedAt}</i></li>`;
};
tweets.forEach(renderTweet);

html += "</ul>";
answer.innerHTML = html;
