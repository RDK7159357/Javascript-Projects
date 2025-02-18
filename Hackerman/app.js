let input = document.getElementById("userInput");
        let text = document.getElementById("text");

        // Array of messages with a placeholder for the user's name
        let arr = [
            "Initializing Hack tool...",
            "Connecting to Facebook...",
            "Connecting to server 1...",
            "Connection failed. Retrying...",
            "Connecting to server 2",
            "Connected Successfully...",
            "Username {username} ...",
            "Trying Brute Force...",
            "200K passwords tried...",
            "Match not found",
            "Another 200K passwords tried...",
            "Match not found...",
            "Another 200K passwords tried...",
            "Match not found...",
            "Another 200K passwords tried...",
            "Match found...",
            "Accessing Account...",
            "Hack Successful..."
        ];

        // Function to simulate delay
        const sleep = async (seconds) => {
            return new Promise((resolve) => {
                setTimeout(() => resolve(true), seconds * 1000);
            });
        };

        // Function to display messages
        const showHack = async (message) => {
            await sleep(2); // Wait for 2 seconds between each message
            text.innerHTML += message + "<br>"; // Append the message to the output
        };

        // Function to start the hacking process
        const startHack = async (username) => {
            // Replace the placeholder with the user's name
            let updatedArr = arr.map((msg) => msg.replace("{username}", username));

            // Display each message in the array
            for (let i = 0; i < updatedArr.length; i++) {
                await showHack(updatedArr[i]);
            }
        };

        // Event listener for the input field
        input.addEventListener("keypress", async (event) => {
            if (event.key === "Enter") { // Check if the Enter key was pressed
                let username = input.value.trim(); // Get the user's input

                if (username === "") {
                    alert("Please enter a valid name."); // Prompt the user to enter a name
                    return;
                }

                // Clear previous output
                text.innerHTML = "";

                // Start the hacking process
                await startHack(username);
            }
        });

 // Matrix Effect
 const canvas = document.getElementById("matrixCanvas");
 const ctx = canvas.getContext("2d");

 // Set canvas size to match the window
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 // Matrix effect parameters
 const columns = Math.floor(canvas.width / 20) + 32; // Number of columns
 const drops = Array(columns).fill(0); // Array to track the position of each column
 const characters = "01"; // Characters to display
 const fontSize = 15;

 // Draw the falling characters
 function draw() {
     ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Fading effect
     ctx.fillRect(0, 0, canvas.width, canvas.height);

     ctx.fillStyle = "#33FF34"; // Bright green color
     ctx.font = `${fontSize}px monospace`;

     for (let i = 0; i < drops.length; i++) {
         const text = characters[Math.floor(Math.random() * characters.length)];
         const x = i * fontSize;
         const y = drops[i] * fontSize;

         ctx.fillText(text, x, y);

         if (y > canvas.height && Math.random() > 0.975) {
             drops[i] = 0; // Reset the drop if it goes off-screen
         } else {
             drops[i]++;
         }
     }
 }

 // Animation loop
 function animate() {
     draw();
     requestAnimationFrame(animate);
 }

 animate();