import React from "react";

export default function PulseCaseStudy() {
  return (
    <main className="bg-neutral-50 text-neutral-900 font-sans">
      <section className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-white py-24 px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Pulse</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Behaviorally-Optimized UX for Event Engagement
        </p>
      </section>

      <section className="py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Overview</h2>
        <p className="mb-6 text-lg">
          Pulse is an adaptive, mobile-first platform designed to enhance attendee engagement across complex, multi-day events. Grounded in behavioral science, it integrates personalized content flows, real-time feedback loops, and simplified dashboards to improve user experience before, during, and after events.
        </p>
      </section>

      <section className="py-16 px-8 max-w-5xl mx-auto grid gap-16">
        <div>
          <img src="/images/pulse-dashboard.png" alt="Pulse Dashboard" className="rounded-xl shadow-lg" />
          <div className="mt-4 bg-yellow-100 p-4 border-l-4 border-yellow-500">
            <p className="text-sm">
              ✳️ <strong>Behavioral Insight:</strong> Simplified visual clustering based on Miller's Law. Color-coded modules reduce cognitive overload and reinforce goal-completion behaviors.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/pulse-agenda-preview.png" alt="Agenda Preview" className="rounded-xl shadow-lg" />
          <div className="mt-4 bg-yellow-100 p-4 border-l-4 border-yellow-500">
            <p className="text-sm">
              ✳️ <strong>Behavioral Insight:</strong> Personalized session previews are anchored in self-determination theory, offering users both autonomy and context-sensitive prompts.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/pulse-feedback-loop.png" alt="Feedback Loop" className="rounded-xl shadow-lg" />
          <div className="mt-4 bg-yellow-100 p-4 border-l-4 border-yellow-500">
            <p className="text-sm">
              ✳️ <strong>Behavioral Insight:</strong> Continuous feedback capture taps into the IKEA effect—users value what they help shape, increasing retention and insight quality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Reflection & Outcomes</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>📈 24% increase in survey response rates after UX refinement</li>
          <li>🧠 Higher memory recall for personalized agenda items (based on post-event follow-up)</li>
          <li>🔄 Reduction in user frustration during onboarding thanks to anticipatory content guidance</li>
        </ul>
        <p className="mt-6 text-base text-neutral-600">
          Pulse demonstrates how behaviorally anchored design can create seamless, motivating experiences that scale across hybrid environments.
        </p>
      </section>
    </main>
  );
}
