import { useState } from "react";
import { FaArrowRight, FaBrain, FaCode, FaPaperPlane, FaRobot } from "react-icons/fa";
import API_URL from "../../config/api";

const STARTERS = ["Tell me about Ajit's projects", "What skills does Ajit have?", "How does Ajit build AI apps?", "How can I hire Ajit?"];

export default function AIAssistant() {
  const [messages, setMessages] = useState([{ role: "assistant", text: "Hi! I'm Ajit's portfolio assistant. I can answer questions about projects, MERN development, Python, AI integration, skills and collaboration." }]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  const send = async (event, preset) => {
    event?.preventDefault();
    const text = (preset || input).trim();
    if (!text || busy) return;
    setInput("");
    setMessages((items) => [...items, { role: "user", text }]);
    setBusy(true);
    try {
      const response = await fetch(`${API_URL}/ai/chat`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: text }) });
      const type = response.headers.get("content-type") || "";
      if (!response.ok || !type.includes("application/json")) throw new Error("AI service unavailable");
      const data = await response.json();
      setMessages((items) => [...items, { role: "assistant", text: data.reply || "I couldn't generate a response. Please try again." }]);
    } catch {
      setMessages((items) => [...items, { role: "assistant", text: "The backend AI endpoint is not available right now. Start the Express server on port 5000 and try again." }]);
    } finally { setBusy(false); }
  };

  return (
    <section className="relative py-20 md:py-28 px-5 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-stretch">
        <div className="glass-card p-7 md:p-10 flex flex-col justify-center">
          <span className="section-eyebrow">AI + Portfolio Context</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 leading-tight">Ask my <span className="text-gradient">portfolio agent</span></h2>
          <p className="text-[var(--text-secondary)] mt-5 leading-relaxed">This assistant uses portfolio context and routes questions to project and skill knowledge. It is designed as a practical starting point for AI-powered web applications.</p>
          <div className="grid grid-cols-3 gap-3 mt-8">
            {[{icon:FaRobot,label:"Portfolio"},{icon:FaCode,label:"MERN"},{icon:FaBrain,label:"AI + Python"}].map(({icon:Icon,label}) => <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center"><Icon className="mx-auto text-emerald-400"/><p className="text-xs mt-2 text-[var(--text-secondary)]">{label}</p></div>)}
          </div>
        </div>
        <div className="glass-card p-3 md:p-5 min-h-[560px] flex flex-col">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4 px-2"><span className="w-10 h-10 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center"><FaRobot /></span><div><p className="font-semibold">Portfolio AI Agent</p><p className="text-xs text-emerald-400">Online knowledge assistant</p></div></div>
          <div className="flex-1 min-h-[320px] max-h-[460px] overflow-y-auto space-y-4 p-3 md:p-5">
            {messages.map((message, index) => <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}><div className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${message.role === "user" ? "bg-emerald-500/20 border border-emerald-400/20 text-white" : "bg-white/[0.05] border border-white/10 text-[var(--text-secondary)]"}`}>{message.text}</div></div>)}
            {busy && <div className="text-sm text-emerald-400 animate-pulse">Agent is thinking...</div>}
          </div>
          <div className="flex flex-wrap gap-2 px-2 pb-3">{STARTERS.map((starter) => <button key={starter} onClick={() => send(null, starter)} disabled={busy} className="text-xs pill hover:text-emerald-300">{starter}</button>)}</div>
          <form onSubmit={send} className="flex gap-2 border-t border-white/10 pt-4">
            <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 rounded-xl bg-white/[0.04] border border-white/10 outline-none px-4 py-3 text-sm focus:border-emerald-400/60" placeholder="Ask about my work, skills or AI..." />
            <button className="btn-gradient !px-4 !py-3" disabled={busy} aria-label="Send"><FaPaperPlane /><span className="hidden sm:inline">Send</span></button>
          </form>
        </div>
      </div>
    </section>
  );
}
