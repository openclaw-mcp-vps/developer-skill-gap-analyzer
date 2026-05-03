export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          AI-Powered Skill Analysis
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know Exactly What Skills You&apos;re Missing
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste any job description. Our AI extracts required skills, compares them to your profile, and builds a personalized learning roadmap — so you can land the role faster.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $8/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for free trial. Cancel anytime.</p>

        {/* Feature highlights */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'AI Skill Extraction', desc: 'Parses job descriptions to surface every required and preferred skill automatically.' },
            { title: 'Gap Analysis', desc: 'Matches extracted skills against your profile and highlights exactly what you need.' },
            { title: 'Learning Roadmap', desc: 'Generates a prioritized, resource-backed plan to close your skill gaps fast.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$8</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited job description analyses',
              'AI-powered skill extraction',
              'Personalized learning roadmaps',
              'Skill profile management',
              'Export reports as PDF',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">&#10003;</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the skill gap analysis work?',
              a: 'You paste a job description and list your current skills. Our AI (powered by OpenAI) extracts all required and preferred skills from the job post, then compares them against your profile to show exactly what you have, what you lack, and how to learn it.',
            },
            {
              q: 'Can I analyze multiple job descriptions?',
              a: 'Yes. The Pro plan gives you unlimited analyses so you can compare yourself against as many roles as you want and track your progress over time.',
            },
            {
              q: 'What if I want to cancel?',
              a: 'You can cancel anytime from your billing dashboard. You keep access until the end of your billing period with no questions asked.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} SkillGap Analyzer. All rights reserved.
      </footer>
    </main>
  )
}
