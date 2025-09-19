// --- Data Model: Chats with messages ---
  // Each chat: {id, title, messages: [{sender: 'user'|'bot', text}]}
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

    chat.messages.forEach(({sender, text}) => {
      const msgDiv = document.createElement('div');
      msgDiv.className = 'message ' + sender;
      msgDiv.textContent = text;
      chatWindow.appendChild(msgDiv);
    });

    // Scroll to bottom
    chatWindow.scrollTop = chatWindow.scrollHeight;
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

  // Send message logic with typing animation & bot response
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

  function sendMessage() {
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
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Simulate bot response after 1.5s
    setTimeout(() => {
      chat.messages.push({ sender: 'bot', text: 'Hello! 👋 This is a default response.' });

      // Replace typing message with actual bot message
      typingMsg.innerHTML = '';
      typingMsg.textContent = 'Hello! 👋 This is a default response.';
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 1500);
  }

  // Helper to append message in chat window
  function appendMessage(sender, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message ' + sender;
    msgDiv.textContent = text;
    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
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