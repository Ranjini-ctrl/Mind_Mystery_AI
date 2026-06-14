import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { useAuthStore } from '../store/useAuthStore';

const tabs = ['Login', 'Register', 'Forgot Password'] as const;

type Tab = (typeof tabs)[number];

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<Tab>('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('detective@mindmystery.ai');
  const [password, setPassword] = useState('');
  const { login, register } = useAuthStore();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (activeTab === 'Login') {
      login(email, password);
    } else if (activeTab === 'Register') {
      register(name || 'Detective', email, password);
    }
  };

  return (
    <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow sm:p-12">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-accent">Authentication</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Access your detective profile.</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-sm transition ${activeTab === tab ? 'bg-primary text-slate-950' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.75fr_0.25fr]">
        <Card className="space-y-6 p-8">
          <h2 className="text-2xl font-semibold text-white">{activeTab}</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {activeTab === 'Register' ? (
              <label className="block text-sm text-slate-300">
                Name
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Detective Alias"
                />
              </label>
            ) : null}
            <label className="block text-sm text-slate-300">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="detective@mindmystery.ai"
              />
            </label>
            {activeTab !== 'Forgot Password' ? (
              <label className="block text-sm text-slate-300">
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="••••••••"
                />
              </label>
            ) : null}
            <Button type="submit">{activeTab === 'Forgot Password' ? 'Send Reset Link' : activeTab}</Button>
          </form>
        </Card>

        <Card className="space-y-6 p-8 bg-[radial-gradient(circle_at_top,_rgba(108,99,255,0.12),transparent_40%)]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Why sign in?</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Keep your detective progress safe.</h3>
          </div>
          <ul className="space-y-4 text-slate-300">
            <li>• Save case history and achievements.</li>
            <li>• Sync your investigation notebook.</li>
            <li>• Track your detective ranking.</li>
          </ul>
          <div className="rounded-3xl border border-white/5 bg-slate-950/30 p-4 text-sm text-slate-300">
            <p className="font-semibold text-white">Demo mode:</p>
            <p>Authentication is mocked locally for the prototype. Enjoy the full investigation flow.</p>
          </div>
          <Link to="/" className="inline-flex rounded-full bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Back to Landing
          </Link>
        </Card>
      </div>
    </div>
  );
}
