import { Link } from 'react-router-dom';
import { useCaseStore } from '../store/useCaseStore';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';

export default function DashboardPage() {
  const { activeCases, solvedCases, score } = useCaseStore();

  return (
    <div className="mx-auto grid max-w-6xl gap-10">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-panel p-8">
          <SectionTitle eyebrow="Dashboard" title="Your detective command center." description="Track active investigations, achievements, and your investigation momentum." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Card className="bg-white/5">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Active Cases</p>
              <p className="mt-4 text-4xl font-semibold text-white">{activeCases.length}</p>
            </Card>
            <Card className="bg-white/5">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Solved Cases</p>
              <p className="mt-4 text-4xl font-semibold text-white">{solvedCases.length}</p>
            </Card>
            <Card className="bg-white/5">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Detective Score</p>
              <p className="mt-4 text-4xl font-semibold text-white">{score}</p>
            </Card>
            <Card className="bg-white/5">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">XP Level</p>
              <p className="mt-4 text-4xl font-semibold text-white">Elite</p>
            </Card>
          </div>
        </div>

        <div className="glass-panel p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Investigation Summary</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Weekly performance</h2>
          <p className="mt-4 text-slate-300">Your statistics show consistent progress in all active investigations. Keep building evidence chains and interrogating suspects to raise your rank.</p>
          <div className="mt-8 space-y-4">
            <div className="rounded-3xl bg-white/5 p-4">
              <p className="text-sm text-slate-400">Clues collected</p>
              <p className="mt-2 text-2xl font-semibold text-white">28</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-4">
              <p className="text-sm text-slate-400">Major hints used</p>
              <p className="mt-2 text-2xl font-semibold text-white">2</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-4">
              <p className="text-sm text-slate-400">Closed leads</p>
              <p className="mt-2 text-2xl font-semibold text-white">11</p>
            </div>
          </div>
          <Link to="/generate" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">
            Start new case
          </Link>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Achievements</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Silver Sleuth</h3>
          <p className="mt-3 text-slate-300">Unlocked after solving your first three complex mysteries with high accuracy.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {['Foresight', 'Clever Deduction', 'Silent Interview'].map((badge) => (
              <span key={badge} className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                {badge}
              </span>
            ))}
          </div>
        </Card>
        <Card className="bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Active Investigation</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Midnight Gallery Heist</h3>
          <p className="mt-3 text-slate-300">Theme: High Society</p>
          <p className="mt-4 text-slate-400">Use the evidence board to connect suspects and confirm the hidden motive.</p>
        </Card>
        <Card className="bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Important Notes</p>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Review suspect timelines before accusing.</li>
            <li>• Keep notebook entries concise and searchable.</li>
            <li>• Major hints reduce case difficulty but not your rank.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
