export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For Local Service Businesses
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Turn Every Job Into a{" "}
          <span className="text-[#58a6ff]">5-Star Google Review</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          ReviewFlow automatically sends perfectly-timed review request emails and SMS to your customers after service completion — so you get more reviews without lifting a finger.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start Getting Reviews — $14/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">No contracts. Cancel anytime.</p>

        <div className="grid grid-cols-3 gap-6 mt-14 text-center">
          {[
            ["3x", "More reviews on average"],
            ["2 min", "Setup time"],
            ["48hr", "Smart send window"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] rounded-xl p-5 border border-[#30363d]">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$14</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited review requests",
              "Email + SMS delivery",
              "Smart timing optimization",
              "Custom message templates",
              "Webhook & API integration",
              "Review analytics dashboard"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does ReviewFlow send review requests?",
              a: "When a job is marked complete in your system, ReviewFlow triggers via webhook and sends a personalized email or SMS to your customer with a direct link to your Google review page — at the optimal time for maximum response."
            },
            {
              q: "What businesses does this work for?",
              a: "Any local service business: plumbers, dentists, HVAC, restaurants, salons, auto shops, and more. If you complete jobs or appointments and want more Google reviews, ReviewFlow is built for you."
            },
            {
              q: "Do I need technical skills to set it up?",
              a: "No. Setup takes about 2 minutes. You paste your Google review link, connect your system via a simple webhook URL, and customize your message template. We handle everything else."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} ReviewFlow. All rights reserved.
      </footer>
    </main>
  );
}
