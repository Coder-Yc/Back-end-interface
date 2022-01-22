const test = new Promise((resolve, reject) => {
  resolve("123");
});

// const result = test.then((data) => {
//   // console.log(data);
// });

const test1 = async () => {
  const a = await test;
  console.log(a);
};

test1();
