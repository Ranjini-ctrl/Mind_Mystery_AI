import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center shadow-glow">
      <p className="text-sm uppercase tracking-[0.35em] text-accent">404 Error</p>
      <h1 className="text-5xl font-semibold text-white">Page Not Found</h1>
      <p className="max-w-xl text-slate-300">The case file is missing. Let’s return to the evidence board and continue the investigation from the home screen.</p>
      <Link to="/">
        <Button>Back to Landing</Button>
      </Link>
    </div>
  );
}
