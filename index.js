function printNumbers(from, to) {
  let cur = from;
  const id = setInterval(() => {
    console.log(cur);
    if (cur === to) {
      clearInterval(id);
    }
    cur++;
  }, 1000);
}
printNumbers(1, 5);
