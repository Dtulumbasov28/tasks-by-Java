const workers = [
  { name: "John", salary: 500 },
  { name: "Mike", salary: 1300 },
  { name: "Linda", salary: 1500 },
];

const getWorthyWorkes = (workersArr) => {
  const worthyWorkes = [];

  workersArr.forEach(currentWorker => {
    if (currentWorker.salary > 1000) {
      worthyWorkes.push(currentWorker.name)
    }
  });

  return worthyWorkes;

  // for (let i = 0; i < workersArr.lenght; i++) {
  //   const currentWorker = workersArr[i];

  //   if (currentWorker.salary > 1000) {
  //     worthyWorkes.push(currentWorker.name);
  //   }
  // }

  return worthyWorkes;

};

console.log(getWorthyWorkes(workers));