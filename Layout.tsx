import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Generate', path: '/generate' },
  { label: 'Investigation', path: '/investigation' }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl glass-panel border-white/10 shadow-lg mx-auto w-full max-w-[1500px] px-4 py-4 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="inline-flex items-center gap-3 text-white transition hover:text-accent">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-xl font-bold text-primary">M</span>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Mind Mystery</p>
            <p className="text-lg font-semibold">AI Detective Game Master</p>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition ${isActive ? 'bg-primary text-slate-950' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/auth"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-accent/30 transition hover:brightness-110"
          >
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}
