const chatOutput = document.getElementById('chat-output');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Predefined bot responses
const botResponses = {
  "hello": "Hi there! How can I assist you?",
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "what is your name": "I'm your friendly AI-ChatBot.",
  "bye": "Goodbye! Have a great day!",
  "default": "I'm sorry, I didn't understand that. Could you rephrase?"
};

// Function to add a message
function addMessage(content, sender) {
  const message = document.createElement('div');
  message.classList.add('message', sender);
  message.innerHTML = `<span>${content}</span>`;
  chatOutput.appendChild(message);
  chatOutput.scrollTop = chatOutput.scrollHeight; // Auto-scroll to the bottom
}

// Function to handle user input
function handleUserInput() {
  const userText = userInput.value.trim().toLowerCase();
  if (userText) {
    addMessage(userText, 'user');
    userInput.value = ''; // Clear input

    // Bot response
    const botResponse = botResponses[userText] || botResponses["default"];
    setTimeout(() => addMessage(botResponse, 'bot'), 500);
  }
}

// Event listeners
sendBtn.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleUserInput();
  }
});
