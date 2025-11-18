const messagesContainer = document.getElementById('messages');
const promptInput = document.getElementById('promptInput');
const sendBtn = document.getElementById('sendBtn');

// Add message to the chat
function addMessage(content, role) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}`;
    messageDiv.textContent = content;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return messageDiv;
}

// Show loading indicator
function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message loading';
    loadingDiv.textContent = 'Claude is thinking...';
    loadingDiv.id = 'loading-indicator';
    messagesContainer.appendChild(loadingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return loadingDiv;
}

// Remove loading indicator
function removeLoading() {
    const loadingDiv = document.getElementById('loading-indicator');
    if (loadingDiv) {
        loadingDiv.remove();
    }
}

// Send message to the API
async function sendMessage() {
    const message = promptInput.value.trim();
    
    if (!message) return;
    
    // Disable input while processing
    promptInput.disabled = true;
    sendBtn.disabled = true;
    
    // Add user message to chat
    addMessage(message, 'user');
    
    // Clear input
    promptInput.value = '';
    
    // Show loading
    showLoading();
    
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });
        
        if (!response.ok) {
            throw new Error('Failed to get response');
        }
        
        const data = await response.json();
        
        // Remove loading and add assistant response
        removeLoading();
        addMessage(data.response, 'assistant');
        
    } catch (error) {
        removeLoading();
        addMessage('Sorry, there was an error processing your request.', 'assistant');
        console.error('Error:', error);
    } finally {
        // Re-enable input
        promptInput.disabled = false;
        sendBtn.disabled = false;
        promptInput.focus();
    }
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);

promptInput.addEventListener('keydown', (e) => {
    // Send on Enter (without Shift)
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Focus input on load
promptInput.focus();