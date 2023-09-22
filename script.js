// Complete the js code

const limit = 50; // Heap memory usage limit in MB
let elements = []; // Array to hold generated DOM elements

// Function to generate DOM elements
const generateElements = () => {
  // complete the function
	for(let i = 0; i < 1000; i++) {
		const el = document.createElement("div");
		el.textContent = `Element ${i}`;

		document.body.appendChild(el);
	}
  updateMemoryUsage();
};

// Function to remove DOM elements
const removeElements = () => {
	document.querySelectorAll("div").forEach(e => document.body.removeChild(e))
  // complete the function
  updateMemoryUsage();
};

// Function to update memory usage display
const updateMemoryUsage = () => {
  // Complete this function
	if (window.performance && window.performance.memory) {
	  const memoryInfo = window.performance.memory; 

		document.getElementById("memory").textContent = `Memory usage: ${memoryInfo.usedJSHeapSize / (1024 * 1024) + " MB"} / ${memoryInfo.totalJSHeapSize / (1024 * 1024) + " MB"}`
	}
};

// Add event listeners to buttons
document.getElementById("generate").addEventListener("click", generateElements);
document.getElementById("remove").addEventListener("click", removeElements);

// Set interval to update memory usage every second
setInterval(updateMemoryUsage, 1000);
