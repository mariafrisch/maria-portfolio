import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans py-20 px-6">
      <div className="max-w-5xl mx-auto text-center fade-in-up">
        <h1 className="text-5xl font-bold mb-6 transition-opacity duration-1000 ease-in-out opacity-0 animate-fadeIn">
          Maria Frisch UX Portfolio
        </h1>
        <p className="text-lg text-neutral-600 mb-16 transition-opacity duration-1000 ease-in-out delay-200 opacity-0 animate-fadeIn">
          Behaviorally anchored, visually immersive case studies
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/pulse" className="transform hover:scale-105 transition-transform duration-300 block border border-neutral-200 p-6 rounded-xl hover:shadow-xl hover:border-neutral-300">
            <h2 className="text-xl font-semibold mb-2">📊 Pulse</h2>
            <p className="text-sm text-neutral-500">
              Event engagement optimized with behavioral science and personalized UX
            </p>
          </Link>
          <Link to="/agestrong" className="transform hover:scale-105 transition-transform duration-300 block border border-neutral-200 p-6 rounded-xl hover:shadow-xl hover:border-neutral-300">
            <h2 className="text-xl font-semibold mb-2">🌿 AgeStrong</h2>
            <p className="text-sm text-neutral-500">
              Wellness interface for older adults using supportive, research-based design
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
