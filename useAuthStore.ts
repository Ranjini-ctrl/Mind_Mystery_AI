import { useAuthStore } from '../store/useAuthStore';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';

export default function ProfilePage() {
  const { user } = useAuthStore();

  return (
    <div className="mx-auto max-w-6xl space-y-10">
      <section className="glass-panel p-8">
        <SectionTitle eyebrow="Profile" title="Detective profile" description="Manage your avatar, stats, and progress settings." />
      </section>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <Card className="p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-secondary text-3xl font-bold text-slate-950">
                {user?.avatar ?? 'DM'}
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Detective</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">{user?.name ?? 'Mystery Agent'}</h2>
              <p className="text-slate-400">{user?.email ?? 'detective@mindmystery.ai'}</p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Rank</p>
              <p className="mt-3 text-2xl font-semibold text-white">Elite Detective</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">XP</p>
              <p className="mt-3 text-2xl font-semibold text-white">10,240</p>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Settings</p>
          <div className="mt-6 space-y-5">
            <div className="rounded-3xl bg-slate-950/70 p-5">
              <p className="text-sm text-slate-400">Notification preferences</p>
              <p className="mt-3 text-slate-300">Receive detective briefings and case updates in real time.</p>
            </div>
            <div className="rounded-3xl bg-slate-950/70 p-5">
              <p className="text-sm text-slate-400">Theme mode</p>
              <p className="mt-3 text-slate-300">Dark theme is enabled for premium immersion.</p>
            </div>
            <div className="rounded-3xl bg-slate-950/70 p-5">
              <p className="text-sm text-slate-400">Privacy</p>
              <p className="mt-3 text-slate-300">All progress is saved locally in this prototype experience.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
