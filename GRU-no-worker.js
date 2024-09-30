const startTaskButton = document.getElementById("start-task");
const changeColorButton = document.getElementById("change-color");
const resultDiv = document.getElementById("result");

// Function to change the background color to a random color
function changeBackgroundColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

// Simulate a heavy task directly on the main thread (blocking)
function performComplexTaskOnMainThread() {
  let sum = 0;

  // Simulate a long-running task that blocks the main thread
  for (let i = 0; i < 100000000000; i++) {
    // Increased the iteration count to ensure blocking
    sum += i;
  }

  // After computation, update the UI
  resultDiv.textContent = `Task complete! Sum: ${sum}`;
  console.log("Task completed on the main thread");
}

// Attach event listeners
startTaskButton.addEventListener("click", function () {
  console.log("Starting a complex task on the main thread...");
  performComplexTaskOnMainThread(); // This will now block the UI
});

changeColorButton.addEventListener("click", changeBackgroundColor);
