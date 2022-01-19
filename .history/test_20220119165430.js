async function testAsync() {
  return Promise.resolve("hello async");
}

async function test() {
  const v2 = await testAsync();
  console.log(v1, v2);
}

test();
