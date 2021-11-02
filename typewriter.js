const sentence = "hello there from lighthouse labs";
let delay = 0;
//variable called delay starts at 0
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
  //create a for loop that iterates through every character in the sentence
  //creates a new timeout that writes the current character to the console every 50 ms.
}
setTimeout(() => {
  process.stdout.write("\n");
}, delay);
    