document.getElementById('loveButton').addEventListener('click', function() {
    const messages = [
        "Jimin says he loves you ☀️",
        "Will you eat Jjajanmyeon with me? 🌙",
        "bimbo for president ❤️",
        "You make my heart skip a beat! 💓",
        "Will you be my Valentine? 🥰"
    ];
    
    let messageBox = document.getElementById('message');
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageBox.innerHTML = `<p>${randomMessage}</p>`;
});
