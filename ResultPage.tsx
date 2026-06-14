import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';
import { testimonials } from '../data/mockTestimonials';

const features = [
  { title: 'AI Case Generation', description: 'Generate vivid murder mysteries at any difficulty with immersive story structure.' },
  { title: 'Evidence Board', description: 'Drag and connect clues and suspects to uncover the truth.' },
  { title: 'Real-Time Interrogation', description: 'Chat with AI suspects and track suspicion with intuitive metrics.' },
  { title: 'Notebook & Hints', description: 'Autosave detective notes, version history, and tiered hint support.' }
];

const faqItems = [
  { question: 'Can I play on mobile?', answer: 'Yes — the interface is built mobile-first and fully responsive for tablets and phones.' },
  { question: 'Is content generated live?', answer: 'AI case generation crafts fresh narratives and adaptable suspect profiles for every investigation.' },
  { question: 'Do hints affect scoring?', answer: 'Hints help you progress; major hints will adjust your case score for realism.' }
];

export default function LandingPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-16 pb-16">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(108,99,255,0.18),transparent_30%),linear-gradient(180deg,#111827,#0b1221)] p-8 shadow-glow sm:p-12">
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="space-y-6">
          <p className="inline-flex rounded-full bg-primary/15 px-4 py-2 text-sm uppercase tracking-[0.35em] text-primary">AI Murder Mystery</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">Mind Mystery AI — become the detective behind the case.</h1>
          <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Investigate crime scenes, interrogate suspects, connect evidence, and solve AI-generated murder mysteries in a premium detective experience.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to="/generate">
              <Button className="w-full sm:w-auto">Start Investigation</Button>
            </Link>
            <Link to="/dashboard" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto">
              Explore Dashboard
            </Link>
          </div>
        </motion.div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border border-white/10 bg-white/5">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Case Count</p>
            <p className="mt-4 text-3xl font-semibold">12</p>
            <p className="mt-2 text-slate-400">Active and archived investigations</p>
          </Card>
          <Card className="border border-white/10 bg-white/5">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Success Rate</p>
            <p className="mt-4 text-3xl font-semibold">89%</p>
            <p className="mt-2 text-slate-400">Accurate deductions in your last cases</p>
          </Card>
          <Card className="border border-white/10 bg-white/5">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">AI Suspects</p>
            <p className="mt-4 text-3xl font-semibold">36</p>
            <p className="mt-2 text-slate-400">Unique personas available in the library</p>
          </Card>
          <Card className="border border-white/10 bg-white/5">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Clue Links</p>
            <p className="mt-4 text-3xl font-semibold">127</p>
            <p className="mt-2 text-slate-400">Connections formed in evidence boards</p>
          </Card>
        </div>
      </section>

      <section id="features" className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionTitle eyebrow="Features" title="Everything you need to crack the case." description="A modern detective dashboard with immersive storytelling, interactive investigation tools, and AI-powered support." />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title} className="h-full">
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-slate-300">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-panel p-8">
          <SectionTitle eyebrow="How It Works" title="Investigate with clarity and speed." />
          <div className="mt-8 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">1. Generate</p>
              <h3 className="mt-3 text-xl font-semibold">Launch a case with tailored difficulty</h3>
              <p className="mt-2 text-slate-300">Choose themes, difficulty, and start a fresh AI-generated murder scenario in seconds.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">2. Analyze</p>
              <h3 className="mt-3 text-xl font-semibold">Track suspects, evidence, and motives</h3>
              <p className="mt-2 text-slate-300">Use the investigation feed and evidence board to organize clues and build your case.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">3. Solve</p>
              <h3 className="mt-3 text-xl font-semibold">Accuse the culprit with confidence</h3>
              <p className="mt-2 text-slate-300">Bring together motive, weapon, and opportunity to deliver your verdict.</p>
            </div>
          </div>
        </div>
        <div className="glass-panel p-8">
          <SectionTitle eyebrow="Demo Investigation" title="Preview the case dashboard." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Active Cases</p>
              <p className="mt-3 text-2xl font-semibold">4</p>
            </Card>
            <Card>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Detective Score</p>
              <p className="mt-3 text-2xl font-semibold">8,200</p>
            </Card>
            <Card>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Achievements</p>
              <p className="mt-3 text-2xl font-semibold">14</p>
            </Card>
            <Card>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Hints Used</p>
              <p className="mt-3 text-2xl font-semibold">3</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionTitle eyebrow="Testimonials" title="Detectives love the immersive flow." />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.name} className="h-full">
              <p className="text-slate-300">“{item.quote}”</p>
              <div className="mt-4">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="faq" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionTitle eyebrow="FAQ" title="Questions from future detectives." />
        </div>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="glass-panel p-6">
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-2 text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-glow">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">Ready to step into the case?</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Launch your detective journey now.</h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/generate">
            <Button className="w-full sm:w-auto">Generate Case</Button>
          </Link>
          <Link to="/auth" className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto">
            Access Your Profile
          </Link>
        </div>
      </section>
    </div>
  );
}
