import { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import { mockCases } from '../data/mockData';

const themes = ['High Society', 'Shipyard', 'Academy', 'Urban Noir'];
const difficulties = ['Easy', 'Medium', 'Hard'];

export default function CaseGeneratorPage() {
  const [theme, setTheme] = useState(themes[0]);
  const [difficulty, setDifficulty] = useState(difficulties[1]);
  const [isLoading, setLoading] = useState(false);
  const [caseInfo, setCaseInfo] = useState(mockCases[0]);

  const generateCase = () => {
    setLoading(true);
    setTimeout(() => {
      setCaseInfo(mockCases[Math.floor(Math.random() * mockCases.length)]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="mx-auto grid max-w-6xl gap-10">
      <div className="glass-panel p-8">
        <SectionTitle eyebrow="AI Case Generator" title="Design your investigation." description="Select difficulty and theme, then generate a premium mystery packed with suspects, clues, and motives." />
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="grid flex-1 gap-4 sm:grid-cols-2">
            <Card className="bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Difficulty</p>
              <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="mt-4 w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/30">
                {difficulties.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </Card>
            <Card className="bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Theme</p>
              <select value={theme} onChange={(e) => setTheme(e.target.value)} className="mt-4 w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/30">
                {themes.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </Card>
          </div>
          <Button onClick={generateCase} className="w-full sm:w-auto">Generate Case</Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="p-8">
          <h2 className="text-2xl font-semibold text-white">Latest Case</h2>
          {isLoading ? (
            <div className="mt-8 space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="h-20 rounded-3xl bg-slate-950/70 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="mt-8 space-y-5">
              <div className="rounded-3xl bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-accent">{caseInfo.theme}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{caseInfo.title}</h3>
                <p className="mt-3 text-slate-300">{caseInfo.description}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Difficulty</p>
                  <p className="mt-3 text-xl font-semibold text-white">{caseInfo.difficulty}</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Date</p>
                  <p className="mt-3 text-xl font-semibold text-white">{caseInfo.date}</p>
                </div>
              </div>
            </div>
          )}
        </Card>

        <Card className="p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Quick insights</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">What to expect next</h2>
          <ul className="mt-6 space-y-4 text-slate-300">
            <li>• Detailed suspect profiles and motives.</li>
            <li>• Evidence board with drag-and-drop linking.</li>
            <li>• Integrated notebook and hint system.</li>
            <li>• Final accusation flow and results page.</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
