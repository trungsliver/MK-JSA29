const API_KEY = "API_KEY";

function addMessage(text, className) {
    const chatBox = document.getElementById("chat-box");
    const div = document.createElement("div");
    div.className = className;
    div.innerText = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
    const input = document.getElementById("user-input");
    const userText = input.value.trim();
    if (!userText) return;

    addMessage("Bạn: " + userText, "user");
    input.value = "";

    fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-goog-api-key": API_KEY
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: userText }]
                    }
                ]
            })
        }
    )
    .then(res => res.json())
    .then(data => {
        console.log(data); // DEBUG

        const reply =
            data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!reply) {
            addMessage("AI: Không có phản hồi", "bot");
            return;
        }

        addMessage("AI: " + reply, "bot");
    })
    .catch(err => {
        console.error(err);
        addMessage("AI: Lỗi kết nối", "bot");
    });
}
