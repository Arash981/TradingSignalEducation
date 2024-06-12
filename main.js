
function updateTime() {
    // Get the current date and time
    const now = new Date();

    // Get the current time in New York
    const nyTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    // Update the text content of the New York clock element
    document.getElementById('ny-time').innerText = nyTime.toLocaleTimeString();

    // Get the current time in London
    const londonTime = new Date(now.toLocaleString("en-GB", { timeZone: "Europe/London" }));
    // Update the text content of the London clock element
    document.getElementById('london-time').innerText = londonTime.toLocaleTimeString();

    // Get the current time in Tokyo
    const tokyoTime = new Date(now.toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" }));
    // Update the text content of the Tokyo clock element
    document.getElementById('tokyo-time').innerText = tokyoTime.toLocaleTimeString();
}

// Update the clocks every second (1000 milliseconds)
setInterval(updateTime, 1000);

// Initialize the clocks by calling updateTime immediately
updateTime();