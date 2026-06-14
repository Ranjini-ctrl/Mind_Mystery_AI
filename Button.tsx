import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import CaseGeneratorPage from './pages/CaseGeneratorPage';
import InvestigationPage from './pages/InvestigationPage';
import SuspectChatPage from './pages/SuspectChatPage';
import EvidenceBoardPage from './pages/EvidenceBoardPage';
import NotebookPage from './pages/NotebookPage';
import ResultPage from './pages/ResultPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

const pageMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } }
};

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(108,99,255,0.08),transparent_25%),linear-gradient(180deg,#0f172a,#020617)] text-white">
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={location.pathname} {...pageMotion} className="w-full">
            <Routes location={location}>
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/generate" element={<CaseGeneratorPage />} />
              <Route path="/investigation" element={<InvestigationPage />} />
              <Route path="/suspect-chat" element={<SuspectChatPage />} />
              <Route path="/evidence" element={<EvidenceBoardPage />} />
              <Route path="/notebook" element={<NotebookPage />} />
              <Route path="/result" element={<ResultPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default App;
