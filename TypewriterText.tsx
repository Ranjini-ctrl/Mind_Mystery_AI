import { useEffect, useState } from 'react';
import { useNotebookStore } from '../store/useNotebookStore';

export default function NotebookEditor() {
  const { notes, saveNotes, createVersion, latestVersion } = useNotebookStore();
  const [draft, setDraft] = useState(notes);

  useEffect(() => {
    setDraft(notes);
  }, [notes]);

  const handleSave = () => {
    saveNotes(draft);
    createVersion();
  };

  return (
    <div className="glass-panel p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Notebook</p>
          <h3 className="text-lg font-semibold">Detective Log</h3>
        </div>
        <button onClick={handleSave} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110">
          Save
        </button>
      </div>
      <textarea
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        className="min-h-[260px] w-full resize-none rounded-3xl border border-white/10 bg-slate-950/20 px-4 py-4 text-sm text-white outline-none ring-1 ring-transparent transition focus:ring-accent/60"
        placeholder="Write your observations, clue links, and suspicious notes..."
      />
      <div className="mt-4 text-sm text-slate-400">
        Version: <span className="font-semibold text-white">{latestVersion}</span>
      </div>
    </div>
  );
}
