import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCaseStore } from '../store/useCaseStore';
import Button from '../components/Button';
import NotebookEditor from '../components/NotebookEditor';
import HintPanel from '../components/HintPanel';
import SectionTitle from '../components/SectionTitle';

const steps = [
  'Review crime scene evidence.',
  'Connect suspects to motive and opportunity.',
  'Use the hint system when you need perspective.'
];

export default function InvestigationPage() {
  const { suspects, evidence, clues, selectedHint, chooseHint } = useCaseStore();
  const [activeHint, setActiveHint] = useState('');

  return (
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.4fr_0.9fr]">
      <aside className="space-y-6">
        <div className="glass-panel p-6">
          <SectionTitle eyebrow="Suspects" title="Suspect list" />
          <div className="mt-6 space-y-3">
            {suspects.map((suspect) => (
              <div key={suspect.id} className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-white">{suspect.name}</p>
                    <p className="text-sm text-slate-400">{suspect.role}</p>
                  </div>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">{suspect.status}</span>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-secondary to-primary" style={{ width: `${suspect.suspicion}%` }} />
                  </div>
                  <span className="text-sm text-slate-300">{suspect.suspicion}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-6">
          <SectionTitle eyebrow="Evidence" title="Evidence list" />
          <div className="mt-6 space-y-3">
            {evidence.map((item) => (
              <div key={item.id} className="rounded-3xl border border-white/10 bg-slate-950/60 p-4">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-400">{item.category}</p>
                <p className="mt-2 text-sm text-slate-300">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <div className="space-y-6">
        <section className="glass-panel p-8">
          <SectionTitle eyebrow="Investigation" title="Crime scene workspace" description="Use the workspace to track the investigation and gather insights from evidence." />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-accent">Crime Scene</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">Midnight gallery foyer</h3>
                </div>
                <Button variant="secondary">Review Scene</Button>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {steps.map((label) => (
                  <div key={label} className="rounded-3xl bg-white/5 p-4 text-slate-300">
                    <p className="font-semibold text-white">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Investigation Feed</p>
              <div className="mt-6 space-y-4">
                {clues.map((clue) => (
                  <div key={clue} className="rounded-3xl bg-slate-900/80 p-4 text-slate-300">
                    <p className="font-semibold text-white">{clue}</p>
                    <p className="mt-2 text-sm">Correlate this clue with suspect behavior and motive.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="glass-panel p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Evidence Board</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Connect clues and suspects</h3>
            </div>
            <Button variant="ghost">Open Evidence Board</Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Timeline</p>
              <p className="mt-4 text-3xl font-semibold text-white">07:15</p>
              <p className="mt-2 text-slate-300">Suspect last seen near the loading dock.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Clue Network</p>
              <p className="mt-4 text-3xl font-semibold text-white">5 Links</p>
              <p className="mt-2 text-slate-300">Strong connection found between assets and evidence.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Notebook</p>
              <p className="mt-4 text-3xl font-semibold text-white">Latest</p>
              <p className="mt-2 text-slate-300">Remember to cross-check witness statements.</p>
            </div>
          </div>
        </section>
      </div>

      <aside className="space-y-6">
        <NotebookEditor />
        <HintPanel level="small" onSelect={(hint) => { setActiveHint(hint); chooseHint(hint); }} />
        <div className="glass-panel p-6">
          <SectionTitle eyebrow="Accusation" title="Ready to accuse?" />
          <p className="mt-4 text-slate-300">Finalize your case by choosing the culprit, motive, and weapon in the accusation flow.</p>
          <div className="mt-6 flex flex-col gap-3">
            <Link to="/result" className="rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-slate-950 transition hover:brightness-110">
              Open Accusation Flow
            </Link>
            <button className="rounded-full bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10">Review suspect details</button>
          </div>
          <div className="mt-6 rounded-3xl bg-slate-900/70 p-4 text-sm text-slate-300">
            <p className="font-semibold text-white">Hint applied:</p>
            <p className="mt-2">{activeHint || 'No hint selected yet.'}</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
