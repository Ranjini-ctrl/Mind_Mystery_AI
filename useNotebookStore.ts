import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '../components/TypewriterText';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const suspects = [
  { id: 'suspect-01', name: 'Evelyn Cross', role: 'Gallery Director' },
  { id: 'suspect-02', name: 'Jonas Pike', role: 'Port Foreman' }
];

const quickQuestions = [
  'Where were you at midnight?',
  'Who else had access to the gallery?',
  'Did anyone see you this evening?'
];

const answerLibrary: Record<string, string> = {
  'Where were you at midnight?': 'I was in the east wing, reviewing the cameras. I never left the building.',
  'Who else had access to the gallery?': 'Only myself, the security lead, and the curator had keys that night.',
  'Did anyone see you this evening?': 'No one can confirm the exact hour. The lights were dim.'
};

export default function SuspectChatPage() {
  const [selectedSuspect, setSelectedSuspect] = useState(suspects[0]);
  const [message, setMessage] = useState('Focus on the pattern of who had the motive and the ability to move undetected.');
  const [conversation, setConversation] = useState<string[]>([
    `${selectedSuspect.name}: "How can I help you, detective?"`
  ]);

  const handleQuestion = (question: string) => {
    setConversation((prev) => [...prev, `You: "${question}"`, `${selectedSuspect.name}: "${answerLibrary[question]}"`] );
    setMessage(answerLibrary[question]);
  };

  const suspectOptions = useMemo(() => suspects.map((suspect) => suspect.name), []);

  return (
    <div className="mx-auto grid max-w-6xl gap-10">
      <section className="glass-panel p-8">
        <SectionTitle eyebrow="Interrogation" title="Suspect chat interface" description="Talk to suspects, follow the typewriter narration, and collect insights from every exchange." />
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-accent">Active suspect</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{selectedSuspect.name}</h3>
                <p className="text-slate-400">{selectedSuspect.role}</p>
              </div>
              <select
                value={selectedSuspect.name}
                onChange={(event) => {
                  const chosen = suspects.find((suspect) => suspect.name === event.target.value);
                  if (chosen) {
                    setSelectedSuspect(chosen);
                    setConversation([`${chosen.name}: "How can I help you, detective?"`]);
                  }
                }}
                className="rounded-full border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
              >
                {suspectOptions.map((name) => (
                  <option value={name} key={name}>{name}</option>
                ))}
              </select>
            </div>
            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-6">
              {conversation.map((line, index) => (
                <motion.p key={`${line}-${index}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-slate-200">
                  {line}
                </motion.p>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Narration</p>
              <div className="mt-4 rounded-3xl bg-white/5 p-6 text-slate-300">
                <TypewriterText text={message} />
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Quick Questions</p>
              <div className="mt-4 grid gap-3">
                {quickQuestions.map((question) => (
                  <button key={question} onClick={() => handleQuestion(question)} className="rounded-3xl bg-white/5 px-4 py-3 text-left text-sm text-slate-200 transition hover:bg-white/10">
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
