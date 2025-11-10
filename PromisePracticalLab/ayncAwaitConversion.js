function getNumber() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 1000);
  });
}

async function processNumber() {
  console.log("Processing...");
  const num = await getNumber();
  const doubled = num * 2;
  console.log("Result:", doubled);
  console.log("Done!");
}

processNumber();
