"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function MessageCenter() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("sending");

    try {
      await emailjs.send(
        "service_0zxupcc",
        "template_od4n3jn",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "oDC06aYjXRBLT1ijC"
      );

      setStatus("success");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-card p-6">

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Send Me a Message
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Have a project or opportunity? Feel free to get in touch.
        </p>
      </div>

      <form onSubmit={sendMessage} className="space-y-4">

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-indigo-500"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-indigo-500"
        />

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-indigo-500"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Write your message..."
          rows={6}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-indigo-500"
        />

        {/* Success */}
        {status === "success" && (
          <div className="flex items-center gap-2 rounded-xl bg-green-500/10 p-3 text-sm text-green-400">
            <CheckCircle size={18} />
            Message sent successfully!
          </div>
        )}

        {/* Error */}
        {status === "error" && (
          <div className="flex items-center gap-2 rounded-xl bg-red-500/10 p-3 text-sm text-red-400">
            <AlertCircle size={18} />
            Failed to send message. Please try again.
          </div>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Send size={18} />

          {status === "sending"
            ? "Sending..."
            : "Send Message"}
        </button>

      </form>
    </div>
  );
}