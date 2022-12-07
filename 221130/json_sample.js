
fetch("https://morimorihoge.github.io/teu2022f/tweets.json").then(
    function (response){
      return response.json();
    }
).then(
    function (json){
      let answerHTML = "";
      json.forEach(function (tweet){
        answerHTML += `<li>${tweet.name}</li>`;
      });
      document.querySelector("#answer").innerHTML = answerHTML;
    }
);