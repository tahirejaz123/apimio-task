const button = document.getElementById("selection_button");
const body = document.body;
const clickButtons = document.querySelectorAll(".click_button");
let clickCount = 0;
const clickHistory = [];
let activeButton = null;


button.addEventListener("click", function() {
    body.classList.toggle("special-bg");
    if (body.classList.contains("special-bg")) {
        button.textContent = "Save";
    } else {
        button.textContent = "Edit";
    }
    if (!body.classList.contains("special-bg")) {
        console.log("Click history:");
        console.log(clickHistory);
    }
});

clickButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (activeButton !== button) {
            // Reset click count when a different button is clicked
            clickCount = 0;
            activeButton = button;
        }

        if (body.classList.contains("special-bg")) {
            const clickTime = new Date().toLocaleTimeString();
            clickCount++;

            const clickInfo = {
                time: clickTime,
                text: button.textContent,
                count: clickCount,
            };

            clickHistory.push(clickInfo);

            console.log(`Clicked at ${clickTime}. Button text: "${button.textContent}". Click count: ${clickCount}`);
        }
    });
});