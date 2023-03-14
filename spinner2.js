const spinner = ["|", "/", "-", "\\", "|"];
let timer = 100;

for (const element of spinner) {
  setTimeout(() => {
    process.stdout.write("\r" + element);
  }, timer);
  timer += 200;
}

setTimeout(() => {
  process.stdout.write("\n");
}, timer);