// Minion listens for Gru's task (message from main thread)
self.onmessage = function (event) {
  console.log("Minions received instructions from Gru: ", event.data);

  // Start the complex task (with an internal delay)
  performComplexTask();
};

// Simulate a heavy task with internal delay
function performComplexTask() {
  let sum = 0;

  // Simulate a delay using setTimeout
  setTimeout(() => {
    // Simulate a complex calculation
    for (let i = 0; i < 100000000000; i++) {
      sum += i;
    }

    // Once the task is finished, Minions send the result back to Gru (main thread)
    self.postMessage(`Task complete! Sum: ${sum}`);
    console.log("Minions completed their task");
  }, 5000); // Simulate a 5-second delay before starting the computation
}
