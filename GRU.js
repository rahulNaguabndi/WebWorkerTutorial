// Gru is the main thread, ready to give tasks to Minions (Web Workers)
const startTaskButton = document.getElementById("start-task");
const changeColorButton = document.getElementById("change-color");
const resultDiv = document.getElementById("result");

// Function to change the background color to a random color
function changeBackgroundColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

// Check if the browser supports Web Workers
if (window.Worker) {
  // Gru hires a Minion (creating a new Web Worker)
  const minionWorker = new Worker("minion-worker.js");

  // When the task is complete, Minion sends the result back to Gru (main thread)
  minionWorker.onmessage = function (event) {
    resultDiv.textContent = `Minions finished their task! Result: ${event.data}`;
    console.log("Minions report: ", event.data);
  };

  // If Gru clicks the button, he sends the task to the Minions (starts Web Worker)
  startTaskButton.addEventListener("click", function () {
    console.log("Gru: Minions, I have a task for you!");
    minionWorker.postMessage("Start the complex task");
  });

  // Change background color when the button is clicked
  changeColorButton.addEventListener("click", changeBackgroundColor);
} else {
  resultDiv.textContent = "Sorry, your browser does not support Web Workers!";
}
