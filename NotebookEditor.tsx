import { motion } from 'framer-motion';
import { hintData } from '../data/mockHints';

interface HintPanelProps {
  level: 'small' | 'medium' | 'major';
  onSelect: (hint: string) => void;
}

export default function HintPanel({ level, onSelect }: HintPanelProps) {
  const hint = hintData[level];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Hint System</p>
          <h3 className="text-lg font-semibold">{hint.title}</h3>
        </div>
        <button
          onClick={() => onSelect(hint.text)}
          className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white transition hover:bg-secondary/90"
        >
          Reveal
        </button>
      </div>
      <p className="text-sm leading-7 text-slate-300">{hint.description}</p>
    </motion.div>
  );
}
