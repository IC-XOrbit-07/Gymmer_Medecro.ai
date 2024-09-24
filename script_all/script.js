// document.addEventListener('DOMContentLoaded', () => {
//     fetch('http://localhost:5500/api/past-chats')
//     .then(response => response.json())
//     .then(chats => {
//         const chatList = document.getElementById('chat_list');
//         chatList.innerHTML = ''; // Clear existing content
//         console.log();
//         chats.forEach(chat => {
//             const chatDiv = document.createElement('div');
//             chatDiv.className = 'chat_id';
//             chatDiv.innerHTML = `<a href="" id="chat_name"> ${chat.title}</a>`;
//             chatList.appendChild(chatDiv);
//             });
//         })
//         .catch(error => console.error('Error fetching chats:', error));
// });

// setInterval(fetchAndUpdateChat, 5000);
function fetchAndUpdateChat() {
    fetch('http://localhost:5500/api/past-chats')
        .then(response => response.json())
        .then(chats => {
            const chatList = document.getElementById('chat_list');
            chatList.innerHTML = ''; // Clear existing content
            chats.forEach(chat => {
                const chatDiv = document.createElement('div');
                chatDiv.className = 'chat_id';
                chatDiv.innerHTML = `<a href="#" id="chat_name">${chat.title}</a>`;
                chatList.appendChild(chatDiv);
            });
        })
        .catch(error => console.error('Error fetching chats:', error));
}

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display chat data initially
    fetchAndUpdateChat();

    // Set up interval to fetch and update chat data every 5 seconds
    setInterval(fetchAndUpdateChat, 5000);
});