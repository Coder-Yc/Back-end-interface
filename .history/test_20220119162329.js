async function bar() {
  return "hello async";
}

function foo() {
  console.log("foo函数被执行");
}

async function testBar() {
  const v1 = await foo();
}
