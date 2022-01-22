const test = new Promise((resolve, reject) => {
  console.log("1231213123123");
  resolve("123");
});

// const result = test.then((data) => {
//   // console.log(data);
// });

const test1 = async () => {
  const a = await test;
};
