const sentence = "These pretzles are making me THIRSTY!!!";

let timeElapsed = 0; // a counter to add up the total time it takes the sentance to be printed so that line 15 can exicute at the correct time
let timeInterval = 100; // The interval I was the letters showing up at - James used this in one of his examples today

for (let i = 0; i < sentence.length; i++) { // need to work on using for...each loop instead
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, timeElapsed);
  timeElapsed += timeInterval;

  if (i === sentence.length - 1) { // Originally i had included a \n in the sentence itself, but that would mean each time the sentence was chamged, it would have to be added in
    setTimeout(() => {
      process.stdout.write("\n");
    }, timeElapsed); // total time elapsed from the counter at line 3
  };
};

// _______________________ notes _________________//

// I originaly attempted to solve with a for...each loop like in the compass instructions, but it
// made me realize im not as comfortable using that style loop compared to the c style for loop. 

