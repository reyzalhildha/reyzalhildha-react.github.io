import React, { useState, useRef, useEffect } from "react";
import { LuSend } from "react-icons/lu";
import ollama from "ollama/browser"; // Pastikan import ini benar

export default function Ollama() {
  const [messages, setMessages] = useState([
    { text: "Halo! Ada yang bisa saya bantu?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Tambahkan state loading
  const chatRef = useRef(null);

  useEffect(() => {
    // Auto-scroll ke bawah saat ada pesan baru
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() === "") return;
  
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true); // Tampilkan loading saat menunggu respons bot
  
    try {
      // Kirim pesan ke Ollama
      const response = await ollama.chat({
        model: "deepseek-r1:1.5b",
        messages: [{ role: "user", content: input }],
      });
  
      let botResponse = response.message?.content || "Maaf, saya tidak mengerti.";
  
      // Hapus teks antara <think> dan </think>
      // botResponse = botResponse.replace(/<think>.*?<\/think>/gs, "").trim();
  
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response from Ollama:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Terjadi kesalahan, coba lagi nanti.", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false); // Matikan loading setelah respons diterima
    }
  };
  
  return (
    <div className="container">
      <div className="container-ollama">
        <div className="box">
          <h2>Ollama Chat [AI Assistant]</h2>

          {/* Chat Box */}
          <div className="chat-box">
            {messages.map((msg, index) => (
              <div key={index} className={`container-bubble ${msg.sender === "user" ? "user" : "bot"}`}>
                <div className="bubble-msg">
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="container-bubble">
                <div className="bubble-msg bot">Sedang mengetik...</div>
              </div>
            )}
            <div ref={chatRef}></div>
          </div>

          {/* Input Chat */}
          <div className="container-input">
            <textarea
              type="text"
              placeholder="Ketik pesan..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={isLoading} // Nonaktifkan input saat loading
            />
            <button className="send" onClick={sendMessage} disabled={isLoading}>
              <LuSend />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
