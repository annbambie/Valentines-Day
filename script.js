document.getElementById('loveButton').addEventListener('click', function() {
    const messages = [
        "Jimin says he loves you ☀️",
        "Will you eat Jjajanmyeon with me?  🌙",
        "Bimbo for president!!!! ❤️",
        "You make my heart skip a beat! 💓",
        "Will you be my Valentine? 🥰"
    ];
    
    let messageBox = document.getElementById('message');
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageBox.innerHTML = `<p>${randomMessage}</p>`;

    // Create floating hearts
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
});
