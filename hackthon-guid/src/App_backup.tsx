import React from 'react';
import AIComparisonSlides from './components/ai-coding-assistants-simple';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HackathonHome from './components/hackathon-home';
import GitHubPresentation from './components/github-presentation';
import GitSlides from './components/git-basics-slides';
import ClinePresentation from './components/cline-presentation';
import ClineGitHubFlow from './components/cline-github-basic';

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-xl font-semibold">ハッカソン講義</Link>
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white">ホーム</Link>
              <Link to="/github-presentation" className="text-gray-300 hover:text-white">GitHub入門</Link>
              <Link to="/git-basics-slides" className="text-gray-300 hover:text-white">Git基礎</Link>
              <Link to="/cline-presentation" className="text-gray-300 hover:text-white">Cline AIアシスタント</Link>
              <Link to="/cline-github-basic" className="text-gray-300 hover:text-white">Cline + GitHub連携</Link>
              <Link to="/ai-coding-assistants" className="text-gray-300 hover:text-white">AI比較</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HackathonHome />} />
          <Route path="/github-presentation" element={<GitHubPresentation />} />
          <Route path="/git-basics-slides" element={<GitSlides />} />
          <Route path="/cline-presentation" element={<ClinePresentation />} />
          <Route path="/ai-coding-assistants" element={<AIComparisonSlides />} />
          <Route path="/cline-github-basic" element={<ClineGitHubFlow />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;