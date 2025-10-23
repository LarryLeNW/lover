window.sr = ScrollReveal();
sr.reveal(".dark-overlay", {
    duration: 2500,
    delay: 1000,
});

sr.reveal(
    "#chat1, #chat2, #chat3, #chat4, #chat5, #chat6, #chat7",
    {
        viewFactor: 0,
        duration: 2000,
        origin: "top",
        distance: "20px",
    },
    4000
);

sr.reveal(
    "#chat1, #chat3 ,#chat5, #chat7",
    {
        origin: "top",
    },
    4000
);

sr.reveal(
    "#chat2, #chat4, #chat6",
    {
        origin: "bottom",
    },
    4000
);

sr.reveal(
    "#chat1",
    {
        delay: 4000,
    },
    4000
);

sr.reveal("h2", {
    viewFactor: 0.2,
    duration: 1500,
    origin: "left",
    distance: "200px",
    reset: true,
});

sr.reveal(".container p", {
    viewFactor: 0.2,
    duration: 1500,
    origin: "right",
    distance: "200px",
    reset: true,
});

sr.reveal("i", {
    duration: 8000,
    viewFactor: 0.2,
    rotate: { x: 0, y: 900, z: 0 },
});

const audio = document.getElementById("bgMusic");

audio.play().catch(() => {
    const btn = document.createElement("button");
    btn.textContent = "🎵 Bật nhạc";
    btn.style = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 20px;
        font-size: 16px;
        background: #08D9D6;
        color: #fff;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      `;
    btn.onclick = () => {
        audio.play();
        btn.remove();
    };
    document.body.appendChild(btn);
});
