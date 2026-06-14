import NotebookEditor from '../components/NotebookEditor';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

export default function NotebookPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <section className="glass-panel p-8">
        <SectionTitle eyebrow="Notebook" title="Detective notes and version history" description="Take markdown-style notes, autosave your thoughts, and revisit earlier drafts." />
      </section>
      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <NotebookEditor />
        <Card className="glass-panel p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Version History</p>
          <div className="mt-6 space-y-4 text-slate-300">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
              <p className="font-semibold text-white">Version 3</p>
              <p className="mt-2 text-sm">Noted a broken timeline and suspect access window.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
              <p className="font-semibold text-white">Version 2</p>
              <p className="mt-2 text-sm">Linked security camera failure to the motive.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
              <p className="font-semibold text-white">Version 1</p>
              <p className="mt-2 text-sm">Initial notebook entry created.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
