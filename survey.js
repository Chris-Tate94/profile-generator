const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (answer) => {
  console.log(`Nice to meet you ${answer}!`);
  rl.question("Whats an activity that you like to do?", (answer) => {
    console.log(`Thats cool, I like to ${answer} too!`);
    rl.question("What music do you listen to while doing that?", (answer) => {
      console.log(
        `Nice, ${answer} is my favorite genre, after metal of course`
      );
      rl.question("Which meal is your favourite?", (answer) => {
        console.log(`Mmmmm.... ${answer} is delicious.`);
        rl.question("What sport is your absolute favourite?", (answer) => {
          console.log(`${answer} is my favorite sport!`);
          rl.close();
        });
      });
    });
  });
});
