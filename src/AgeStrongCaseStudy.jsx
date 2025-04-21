import React from "react";

export default function AgeStrongCaseStudy() {
  return (
    <main className="bg-stone-50 text-neutral-900 font-sans">
      <section className="min-h-screen bg-gradient-to-br from-[#fff8e1] to-white py-24 px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">AgeStrong</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Personalized Wellness UX for Older Adults
        </p>
      </section>

      <section className="py-16 px-8 max-w-5xl mx-auto grid gap-16">
        <div>
          <img src="/images/dashboard-1.png" alt="Dashboard Morning" className="rounded-xl shadow-md" />
          <img src="/images/dashboard-2.png" alt="Dashboard Evening" className="rounded-xl shadow-md mt-4" />
          <div className="mt-4 bg-orange-100 p-4 border-l-4 border-orange-500">
            ✳️ <strong>Behavioral Insight:</strong> Time anchors support implementation intentions, helping older adults build routines tied to day parts.
          </div>
        </div>

        <div>
          <img src="/images/audio-tools.png" alt="Audio Tools" className="rounded-xl shadow-md" />
          <div className="mt-4 bg-orange-100 p-4 border-l-4 border-orange-500">
            ✳️ <strong>Behavioral Insight:</strong> Positive habit loops are reinforced through lightweight, motivational audio content.
          </div>
        </div>

        <div>
          <img src="/images/onboarding-1.png" alt="Onboarding Goals" className="rounded-xl shadow-md" />
          <img src="/images/onboarding-2.png" alt="Onboarding Support" className="rounded-xl shadow-md mt-4" />
          <div className="mt-4 bg-orange-100 p-4 border-l-4 border-orange-500">
            ✳️ <strong>Behavioral Insight:</strong> Autonomy-supportive onboarding leverages self-determination theory to drive buy-in and comfort.
          </div>
        </div>

        <div>
          <img src="/images/goal-setting.png" alt="Goal Setting" className="rounded-xl shadow-md" />
          <div className="mt-4 bg-orange-100 p-4 border-l-4 border-orange-500">
            ✳️ <strong>Behavioral Insight:</strong> Pre-selection templates ease decision fatigue while personalizing wellness flows.
          </div>
        </div>

        <div>
          <img src="/images/welcome-1.png" alt="Welcome Screen 1" className="rounded-xl shadow-md" />
          <img src="/images/welcome-2.png" alt="Welcome Screen 2" className="rounded-xl shadow-md mt-4" />
          <div className="mt-4 bg-orange-100 p-4 border-l-4 border-orange-500">
            ✳️ <strong>Behavioral Insight:</strong> Warm-tone priming and approachable CTAs lower barriers for first-time users.
          </div>
        </div>

        <div>
          <img src="/images/progress.png" alt="Progress Tracker" className="rounded-xl shadow-md" />
          <img src="/images/mood-checkin.png" alt="Mood Check-in" className="rounded-xl shadow-md mt-4" />
          <div className="mt-4 bg-orange-100 p-4 border-l-4 border-orange-500">
            ✳️ <strong>Behavioral Insight:</strong> Reflective tools reinforce emotional regulation and self-monitoring via Hawthorne effects.
          </div>
        </div>

        <div>
          <img src="/images/design-system.png" alt="Design System" className="rounded-xl shadow-md" />
          <div className="mt-4 bg-orange-100 p-4 border-l-4 border-orange-500">
            ✳️ <strong>Behavioral Insight:</strong> Consistency and readability support accessibility and cognitive ease for aging users.
          </div>
        </div>

        <div>
          <img src="/images/persona-dolores.png" alt="User Persona Dolores" className="rounded-xl shadow-md" />
          <div className="mt-4 bg-orange-100 p-4 border-l-4 border-orange-500">
            ✳️ <strong>Behavioral Insight:</strong> Personas guide empathy-driven UX choices, ensuring relevance and resonance.
          </div>
        </div>
      </section>

      <section className="py-16 px-8 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Reflection & Results</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>🎯 35% increase in audio feature engagement post-onboarding redesign</li>
          <li>💧 28% lift in hydration and step-tracking adherence after dashboard iteration</li>
          <li>🔍 Reported reduction in task fatigue and screen anxiety via readability improvements</li>
        </ul>
      </section>
    </main>
  );
}
