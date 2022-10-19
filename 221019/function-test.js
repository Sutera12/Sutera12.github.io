function test(){
  console.log("こんにちは");
}

function test2(view1){
  console.log(`仮引数1: ${view1}`)
}

test2(2);

function test3(view1,view2,view3){
  console.log(`仮引数1: ${view1}`);
  console.log(`仮引数2: ${view2}`);
  console.log(`仮引数3: ${view3}`);
}

test3(2,8,10);
