function after(ms, name) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(name), ms);
  });
}

function timeout(ms, promise) {
  let interval;
  const tp = new Promise((_, reject) => {
    interval = setTimeout(() => reject(Error(`set timeout ${ms}ms`)), ms);
  });
  return Promise.race([tp, promise]).finally(() => clearInterval(interval));
}

const pA = after(4500, "A");

timeout(3500, pA)
  .then(console.log)
  .catch((err) => console.log(err));
