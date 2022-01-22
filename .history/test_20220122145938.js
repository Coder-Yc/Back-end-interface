const test = new Promise((resolve, reject) => {
  console.log("123");
  resolve("123");
});

const result = test.then((data) => {
  console.log(data);
});
