"use client";

import Link from "next/link";
import { useState } from "react";

const jingles = [
  {
    title: "Jingle 01",
    description:
      "AI-generated merchant anthem designed for tourism engagement and local branding.",
    audio: "/audio/jingle-1.m4a",
  },
  {
    title: "Jingle 02",
    description:
      "Street commerce audio identity powered by AI-generated musical storytelling.",
    audio: "/audio/jingle-2.m4a",
  },
];

export default function JinglesPage() {
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);

  const toggleAudio = (audioSrc: string) => {
    if (currentAudio === audioSrc) {
      setCurrentAudio(null);
    } else {
      setCurrentAudio(audioSrc);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/merchant/1"
          className="text-yellow-400 text-sm hover:text-yellow-300 transition"
        >
          ← Back to Merchant
        </Link>

        <div className="mt-10 mb-12">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-xs mb-4">
            AI AUDIO INFRASTRUCTURE
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            AI Jingles
          </h1>

          <p className="text-zinc-300 text-lg max-w-3xl leading-relaxed">
            StreetFi Angels uses artificial intelligence to generate localized
            merchant jingles and sonic branding assets designed to amplify
            informal merchants through digital storytelling, tourism engagement
            and SocialFi identity creation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {jingles.map((jingle, index) => (
            <div
              key={index}
              className="border border-zinc-800 rounded-3xl p-8 bg-zinc-950"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center text-black text-2xl font-bold">
                  ♪
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4">{jingle.title}</h2>

              <p className="text-zinc-400 leading-relaxed mb-8">
                {jingle.description}
              </p>

              <button
                onClick={() => toggleAudio(jingle.audio)}
                className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
              >
                {currentAudio === jingle.audio ? "Stop Audio" : "Play Audio"}
              </button>

              {currentAudio === jingle.audio && (
                <audio
                  className="mt-6 w-full"
                  controls
                  autoPlay
                  src={jingle.audio}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}