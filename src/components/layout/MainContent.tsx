import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../../assets/css/main.css';

// Import lesson components (will be created in next step)
const Introduction = React.lazy(() => import('../lessons/Introduction'));
const HttpBasics = React.lazy(() => import('../lessons/HttpBasics'));
const PasswordReset = React.lazy(() => import('../lessons/PasswordReset'));
const JWT = React.lazy(() => import('../lessons/JWT'));
const SqlInjection = React.lazy(() => import('../lessons/SqlInjection'));
const CommandInjection = React.lazy(() => import('../lessons/CommandInjection'));
const ReflectedXss = React.lazy(() => import('../lessons/ReflectedXss'));
const StoredXss = React.lazy(() => import('../lessons/StoredXss'));

const MainContent: React.FC = () => {
  return (
    <section className="main-content-wrapper">
      <section id="main-content">
        <div id="lesson-page" className="pages">
          <div className="row">
            <div className="col-md-8">
              <div className="col-md-12" style={{ textAlign: 'left' }}>
                <div id="lesson-content-wrapper" className="panel">
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                      <Route path="/introduction" element={<Introduction />} />
                      <Route path="/http-basics" element={<HttpBasics />} />
                      <Route path="/password-reset" element={<PasswordReset />} />
                      <Route path="/jwt" element={<JWT />} />
                      <Route path="/sql-injection" element={<SqlInjection />} />
                      <Route path="/command-injection" element={<CommandInjection />} />
                      <Route path="/reflected-xss" element={<ReflectedXss />} />
                      <Route path="/stored-xss" element={<StoredXss />} />
                      <Route path="/" element={<Introduction />} />
                    </Routes>
                  </React.Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MainContent;
