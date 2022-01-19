async function testAsync() {
  return Promise.resolve("hello async");
}

async function test() {
  const v2 = await testAsync();
  console.log(v2);
}

test();
