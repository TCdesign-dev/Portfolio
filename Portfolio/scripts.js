document.getElementById("chat-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const chatInput = document.getElementById("chat-input");
    const chatOutput = document.getElementById("chat-output");
    const userMessage = chatInput.value.trim();

    if (userMessage === "") return;

    appendMessage(chatOutput, userMessage, "user-message");

    let botResponse = "";

    switch (userMessage.toLowerCase()) {
        case "chi sei?":
            botResponse = "Hey! Sono Tommaso Costanza, ho 17 anni, sono uno UI Designer. Non ho studiato nulla riguardante il design per ora, anzi... studio tutt'altro, elettronica ed elettrotecnica ale superiori ma il mio obbiettivo è che di questa mia passione per il design e il minimalisto farne una professione. se vuoi conoscere di più sui miei lavori scrivi 'Lavori'";
            break;
        case "lavori":
            botResponse = "Ecco alcuni dei miei lavori: https://wider-bot.webflow.io/ https://codepen.io/TC-Design/pen/xxpyrZL https://quicksorteggio.w3spaces.com/" ;
            break;
        case "social":
            botResponse = "Mi puoi trovare su: https://www.instagram.com/tommy.costanza/ https://codepen.io/TC-Design https://twitter.com/TommasoCostanza";
            break;
        default:
            botResponse = "Non ho capito, prova a scrivere 'Chi sei?', 'Lavori' o 'Social'.";
    }

    setTimeout(() => {
        appendMessage(chatOutput, botResponse, "bot-message");
    }, 1000);

    chatInput.value = "";
});

function appendMessage(chatOutput, message, messageType) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", messageType);

    // Linkify the message text
    const linkifiedMessage = linkify(message);
    
    messageElement.innerHTML = linkifiedMessage;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function linkify(text) {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlPattern, (url) => {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
}

