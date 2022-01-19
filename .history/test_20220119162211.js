async function testAsyns() {
  return "hello async";
}

function foo() {
  console.log("foo函数被执行");
}

const result = testAsyns();
// console.log(result);
testAsyns().then((a) => {
  console.log(a);
});
