export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10 pt-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Mind Mystery AI. Crafted for immersive detective experiences.</p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
