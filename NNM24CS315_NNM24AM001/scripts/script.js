
//AIzaSyBxICaW41Tk44BtVcQajdiQzBg1n3SWFy8

// // --- Data Model: Chats with messages ---
// // Each chat: {id, title, messages: [{sender: 'user'|'bot', text}]}
// const chats = [
//   {
//     id: 'chat1',
//     title: 'Chat 1',
//     messages: [
//       { sender: 'bot', text: 'Hello! This is your first chat.' }
//     ],
//   }
// ];

// let currentChatId = 'chat1';

// // DOM Elements
// const sidebar = document.getElementById('sidebar');
// const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
// const chatListEl = document.getElementById('chatList');
// const chatWindow = document.getElementById('chatWindow');
// const userInput = document.getElementById('userInput');
// const sendBtn = document.getElementById('sendBtn');
// const addChatBtn = document.getElementById('addChatBtn');

// // Toggle sidebar expand/contract
// toggleSidebarBtn.onclick = () => {
//   sidebar.classList.toggle('expanded');
//   addChatBtn.classList.toggle('expanded');
//   chatListEl.classList.toggle('expanded');  // Fixed variable name here
// };

// // Render chat buttons in sidebar
// function renderChatList() {
//   chatListEl.innerHTML = '';
//   chats.forEach(chat => {
//     const btn = document.createElement('button');
//     btn.textContent = chat.title;
//     btn.className = 'chat-btn';
//     if (chat.id === currentChatId) btn.classList.add('active');
//     btn.onclick = () => {
//       if (chat.id !== currentChatId) {
//         currentChatId = chat.id;
//         renderChatList();
//         renderChatWindow();
//       }
//     };
//     chatListEl.appendChild(btn);
//   });
// }

// // Render chat messages of current chat
// function renderChatWindow() {
//   chatWindow.innerHTML = '';
//   const chat = chats.find(c => c.id === currentChatId);
//   if (!chat) return;

//   chat.messages.forEach(({ sender, text }) => {
//     const msgDiv = document.createElement('div');
//     msgDiv.className = 'message ' + sender;
//     msgDiv.textContent = text;
//     chatWindow.appendChild(msgDiv);
//   });

//   // Scroll to bottom smoothly
//   chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: 'smooth' });
// }

// // Add new chat
// addChatBtn.onclick = () => {
//   const newId = 'chat' + (chats.length + 1);
//   chats.push({
//     id: newId,
//     title: `Chat ${chats.length + 1}`,
//     messages: [{ sender: 'bot', text: 'New chat started. Say hi!' }],
//   });
//   currentChatId = newId;
//   renderChatList();
//   renderChatWindow();
// };

// // Send message logic with typing animation & bot response
// sendBtn.onclick = () => {
//   sendMessage();
// };

// userInput.addEventListener('keydown', e => {
//   if (e.key === 'Enter' && !sendBtn.disabled) {
//     sendMessage();
//   }
// });

// userInput.addEventListener('input', () => {
//   sendBtn.disabled = userInput.value.trim() === '';
// });

// function sendMessage() {
//   const text = userInput.value.trim();
//   if (!text) return;

//   // Add user message
//   const chat = chats.find(c => c.id === currentChatId);
//   chat.messages.push({ sender: 'user', text });
//   appendMessage('user', text);
//   userInput.value = '';
//   sendBtn.disabled = true;

//   // Add bot typing message
//   const typingMsg = document.createElement('div');
//   typingMsg.className = 'message bot';
//   const typingSpan = document.createElement('span');
//   typingSpan.className = 'typing';
//   typingSpan.textContent = 'Typing...';
//   typingMsg.appendChild(typingSpan);
//   chatWindow.appendChild(typingMsg);
//   chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: 'smooth' });

//   // Simulate bot response after 1.5s
//   setTimeout(() => {
//     chat.messages.push({ sender: 'bot', text: 'Hello! 👋 This is a default response.' });

//     // Replace typing message with actual bot message
//     typingMsg.innerHTML = '';  // clear typing animation
//     typingMsg.textContent = 'Hello! 👋 This is a default response.';
//     chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: 'smooth' });
//   }, 1500);
// }

// // Helper to append message in chat window
// function appendMessage(sender, text) {
//   const msgDiv = document.createElement('div');
//   msgDiv.className = 'message ' + sender;
//   msgDiv.textContent = text;
//   chatWindow.appendChild(msgDiv);
//   chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: 'smooth' });
// }

// // Initialize UI
// function init() {
//   renderChatList();
//   renderChatWindow();
//   sendBtn.disabled = true;

//   // Auth buttons (just dummy alerts)
//   document.getElementById('signInBtn').onclick = () => alert('Sign In clicked (no auth yet)');
//   document.getElementById('signUpBtn').onclick = () => alert('Sign Up clicked (no auth yet)');
// }

// init();






//______________________________________________________________

// // --- Data Model: Chats with messages ---
// // Each chat: {id, title, messages: [{sender: 'user'|'bot', text}]}
// const chats = [
//   {
//     id: 'chat1',
//     title: 'Chat 1',
//     messages: [
//       { sender: 'bot', text: 'Hello! This is your first chat.' }
//     ],
//   }
// ];

// let currentChatId = 'chat1';

// // DOM Elements
// const sidebar = document.getElementById('sidebar');
// const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
// const chatListEl = document.getElementById('chatList');
// const chatWindow = document.getElementById('chatWindow');
// const userInput = document.getElementById('userInput');
// const sendBtn = document.getElementById('sendBtn');
// const addChatBtn = document.getElementById('addChatBtn');

// // Toggle sidebar expand/contract
// toggleSidebarBtn.onclick = () => {
//   sidebar.classList.toggle('expanded');
//   addChatBtn.classList.toggle('expanded');
//   chatListEl.classList.toggle('expanded');
// };

// // Render chat buttons in sidebar
// function renderChatList() {
//   chatListEl.innerHTML = '';
//   chats.forEach(chat => {
//     const btn = document.createElement('button');
//     btn.textContent = chat.title;
//     btn.className = 'chat-btn';
//     if (chat.id === currentChatId) btn.classList.add('active');
//     btn.onclick = () => {
//       if (chat.id !== currentChatId) {
//         currentChatId = chat.id;
//         renderChatList();
//         renderChatWindow();
//       }
//     };
//     chatListEl.appendChild(btn);
//   });
// }

// // Render chat messages of current chat
// function renderChatWindow() {
//   chatWindow.innerHTML = '';
//   const chat = chats.find(c => c.id === currentChatId);
//   if (!chat) return;

//   chat.messages.forEach(({ sender, text }) => {
//     const msgDiv = document.createElement('div');
//     msgDiv.className = 'message ' + sender;
//     msgDiv.textContent = text;
//     chatWindow.appendChild(msgDiv);
//   });

//   // Scroll to bottom smoothly
//   chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: 'smooth' });
// }

// // Add new chat
// addChatBtn.onclick = () => {
//   const newId = 'chat' + (chats.length + 1);
//   chats.push({
//     id: newId,
//     title: `Chat ${chats.length + 1}`,
//     messages: [{ sender: 'bot', text: 'New chat started. Say hi!' }],
//   });
//   currentChatId = newId;
//   renderChatList();
//   renderChatWindow();
// };

// // --- Import Google Generative AI client ---
// import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// const API_KEY = "YOUR_API_KEY_HERE";  // Replace with your actual API key
// const genAI = new GoogleGenerativeAI(API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// // Send message logic with real Gemini API response
// async function sendMessage() {
//   const text = userInput.value.trim();
//   if (!text) return;

//   // Add user message
//   const chat = chats.find(c => c.id === currentChatId);
//   chat.messages.push({ sender: 'user', text });
//   appendMessage('user', text);

//   userInput.value = '';
//   sendBtn.disabled = true;

//   // Add typing animation
//   const typingMsg = document.createElement('div');
//   typingMsg.className = 'message bot';
//   const typingSpan = document.createElement('span');
//   typingSpan.className = 'typing';
//   typingSpan.textContent = 'Typing...';
//   typingMsg.appendChild(typingSpan);
//   chatWindow.appendChild(typingMsg);
//   chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: 'smooth' });

//   try {
//     // Call Gemini API for real response
//     const result = await model.generateContent(text);
//     const response = await result.response;
//     const botText = response.text();

//     chat.messages.push({ sender: 'bot', text: botText });

//     // Replace typing animation with bot response
//     typingMsg.innerHTML = '';
//     typingMsg.textContent = botText;
//     chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: 'smooth' });

//   } catch (error) {
//     console.error('Error fetching from Gemini API:', error);
//     typingMsg.innerHTML = '';
//     typingMsg.textContent = 'Oops, something went wrong. Please try again.';
//   }
// }

// // Helper to append message in chat window
// function appendMessage(sender, text) {
//   const msgDiv = document.createElement('div');
//   msgDiv.className = 'message ' + sender;
//   msgDiv.textContent = text;
//   chatWindow.appendChild(msgDiv);
//   chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: 'smooth' });
// }

// // Event Listeners
// sendBtn.onclick = () => sendMessage();

// userInput.addEventListener('keydown', e => {
//   if (e.key === 'Enter' && !sendBtn.disabled) {
//     sendMessage();
//   }
// });

// userInput.addEventListener('input', () => {
//   sendBtn.disabled = userInput.value.trim() === '';
// });

// // Initialize UI
// function init() {
//   renderChatList();
//   renderChatWindow();
//   sendBtn.disabled = true;

//   // Auth buttons (dummy alerts)
//   document.getElementById('signInBtn').onclick = () => alert('Sign In clicked (no auth yet)');
//   document.getElementById('signUpBtn').onclick = () => alert('Sign Up clicked (no auth yet)');
// }

// init();


// --- Data Model: Chats with messages ---
const chats = [
  {
    id: 'chat1',
    title: 'Chat 1',
    messages: [
      { sender: 'bot', text: 'Hello! This is your first chat.' }
    ],
  }
];

let currentChatId = 'chat1';

// DOM Elements
const sidebar = document.getElementById('sidebar');
const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
const chatListEl = document.getElementById('chatList');
const chatWindow = document.getElementById('chatWindow');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const addChatBtn = document.getElementById('addChatBtn');

// Toggle sidebar expand/contract
toggleSidebarBtn.onclick = () => {
  sidebar.classList.toggle('expanded');
  addChatBtn.classList.toggle('expanded');
  chatListEl.classList.toggle('expanded');  // Fixed variable name here
};

// Render chat buttons in sidebar
function renderChatList() {
  chatListEl.innerHTML = '';
  chats.forEach(chat => {
    const btn = document.createElement('button');
    btn.textContent = chat.title;
    btn.className = 'chat-btn';
    if (chat.id === currentChatId) btn.classList.add('active');
    btn.onclick = () => {
      if (chat.id !== currentChatId) {
        currentChatId = chat.id;
        renderChatList();
        renderChatWindow();
      }
    };
    chatListEl.appendChild(btn);
  });
}

// Render chat messages of current chat
function renderChatWindow() {
  chatWindow.innerHTML = '';
  const chat = chats.find(c => c.id === currentChatId);
  if (!chat) return;

  chat.messages.forEach(({ sender, text }) => {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message ' + sender;
    msgDiv.textContent = text;
    chatWindow.appendChild(msgDiv);
  });

  // Scroll to bottom smoothly
  chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: 'smooth' });
}

// Add new chat
addChatBtn.onclick = () => {
  const newId = 'chat' + (chats.length + 1);
  chats.push({
    id: newId,
    title: `Chat ${chats.length + 1}`,
    messages: [{ sender: 'bot', text: 'New chat started. Say hi!' }],
  });
  currentChatId = newId;
  renderChatList();
  renderChatWindow();
};

// Import Google Generative AI client
import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const API_KEY = "AIzaSyBxICaW41Tk44BtVcQajdiQzBg1n3SWFy8";  // Replace with your actual API key
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// Send message logic with typing animation & real bot response
sendBtn.onclick = () => {
  sendMessage();
};

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !sendBtn.disabled) {
    sendMessage();
  }
});

userInput.addEventListener('input', () => {
  sendBtn.disabled = userInput.value.trim() === '';
});

async function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  // Add user message
  const chat = chats.find(c => c.id === currentChatId);
  chat.messages.push({ sender: 'user', text });
  appendMessage('user', text);
  userInput.value = '';
  sendBtn.disabled = true;

  // Add bot typing message
  const typingMsg = document.createElement('div');
  typingMsg.className = 'message bot';
  const typingSpan = document.createElement('span');
  typingSpan.className = 'typing';
  typingSpan.textContent = 'Typing...';
  typingMsg.appendChild(typingSpan);
  chatWindow.appendChild(typingMsg);
  chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: 'smooth' });

  try {
    // Call Gemini API for real response
    const result = await model.generateContent(text);
    const response = await result.response;
    const botText = response.text();

    // Save and show bot message
    chat.messages.push({ sender: 'bot', text: botText });

    // Replace typing animation with actual bot message
    typingMsg.innerHTML = '';
    typingMsg.textContent = botText;
    chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: 'smooth' });

  } catch (error) {
    console.error('Error fetching from Gemini API:', error);
    typingMsg.innerHTML = '';
    typingMsg.textContent = 'Hello! I am currently unable to access servers, Please try again later...';
  }
}

// Helper to append message in chat window
function appendMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message ' + sender;
  msgDiv.textContent = text;
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTo({ top: chatWindow.scrollHeight, behavior: 'smooth' });
}

// Initialize UI
function init() {
  renderChatList();
  renderChatWindow();
  sendBtn.disabled = true;

  // Auth buttons (just dummy alerts)
  document.getElementById('signInBtn').onclick = () => alert('Sign In clicked (no auth yet)');
  document.getElementById('signUpBtn').onclick = () => alert('Sign Up clicked (no auth yet)');
}

init();
