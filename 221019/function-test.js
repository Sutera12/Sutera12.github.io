function test(){
  console.log("こんにちは");
}

function test2(low1){
  console.log(`仮引数1: ${low1}`)
}

function test3(high1,high2,high3){
  console.log(`仮引数1: ${high1}`);
  console.log(`仮引数2: ${high2}`);
  console.log(`仮引数3: ${high3}`);
}

function test4(level1 = "でふぉると"){
  console.log(`仮引数1: ${level1}`);
}

function test5(){
  return "関数から返した文字列！"
}

function test6(apple1){
  return 2021 * 1010;
}

function hello(day1){
  console.log("こんにちはこんにちは");
}

function helloSomeone(name){
  console.log(`こんにちは${name}さん`);
}

function helloCircleArea(radius){
  console.log(radius * radius * Math.PI);
}

function helloRectangleArea(width,height){
  console.log(width * height);
}