async function bar() {
  return Promise.resolve("hello async");
}

function foo() {
  return "something";
}

async function testBar() {
  const v1 = await foo();
  const v2 = await bar();
  console.log(v1);
  console.log(v2);
}

testBar();
