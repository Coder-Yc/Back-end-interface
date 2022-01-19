async function testAsyns() {
  return "hello async";
}

const result = testAsyns();
// console.log(result);
testAsyns().then((a) => {
  console.log(a);
});
