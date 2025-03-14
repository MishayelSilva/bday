document.getElementById("startBtn").addEventListener("click", function() {
    // Hide the button after click
    this.style.display = "none";
    
    // Create balloons and animate them
    createBalloons();

    // Show the birthday message after 1 second (delaying to let the balloons appear)
    setTimeout(function() {
        document.getElementById("birthday-message").classList.add("show");
    }, 1000);
});

function createBalloons() {
    let balloonContainer = document.getElementById("balloon-container");
    let balloonCount = 47;

    for (let i = 0; i < balloonCount; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");

        // Randomize the position for the balloons
        balloon.style.left = `${Math.random() * 90}%`;
        balloon.style.animationDelay = `${Math.random() * 8}s`;

        // Randomize balloon colors
        let colors = ['gold','black'];
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        balloonContainer.appendChild(balloon);
    }
}
