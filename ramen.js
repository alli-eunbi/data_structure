//async await 활용
const makeRamen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("라면 끓이기"));
    }, 2000);
  });
};
const eatRamen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("라면 다 먹기"));
    }, 2000);
  });
};

async function Mukbang() {
  await makeRamen();
  await eatRamen();
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("설거지"));
    }, 2000);
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("양치"));
    }, 2000);
  });
}

Mukbang();

// //.then 활용
// const makeRamen = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("라면 끓이기"));
//     }, 2000);
//   });
// };
// const eatRamen = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("라면 다 먹기"));
//     }, 2000);
//   });
// };

// makeRamen()
//   .then(eatRamen)
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(console.log("설거지"));
//       }, 2000);
//     });
//   })
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(console.log("양치"));
//       }, 2000);
//     });
//   });
