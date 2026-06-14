import { mockResult } from '../data/mockResults';
import Button from '../components/Button';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';

export default function ResultPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-10">
      <section className="glass-panel p-8 text-center">
        <SectionTitle eyebrow="Accusation Result" title="Case verdict" description="Review your investigation accuracy, missed clues, and earned detective rank." />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <Card className="p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Verdict</p>
            <p className="mt-4 text-4xl font-semibold text-white">{mockResult.verdict}</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Accuracy</p>
            <p className="mt-4 text-4xl font-semibold text-white">{mockResult.accuracy}%</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">XP Earned</p>
            <p className="mt-4 text-4xl font-semibold text-white">{mockResult.xp}</p>
          </Card>
        </div>
      </section>
      <section className="glass-panel p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.6fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Report</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Your detective rank: {mockResult.rank}</h2>
            <p className="mt-5 text-slate-300">You uncovered the core clues, but a few hidden threads were missed. Review the evidence board and notebook to strengthen your next deduction.</p>
            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-white/5 p-5">
                <p className="font-semibold text-white">Missed Clues</p>
                <p className="mt-2 text-slate-300">{mockResult.missedClues} clues were left unconnected.</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-5">
                <p className="font-semibold text-white">Next steps</p>
                <p className="mt-2 text-slate-300">Use the notebook to capture hidden motives and refine your interrogation strategy.</p>
              </div>
            </div>
          </div>
          <Card className="p-6 bg-gradient-to-br from-primary/20 to-secondary/20">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Proceed</p>
            <div className="mt-6 space-y-4">
              <Link to="/dashboard">
                <Button className="w-full">Return to Dashboard</Button>
              </Link>
              <Link to="/generate">
                <Button variant="secondary" className="w-full">Generate New Case</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
