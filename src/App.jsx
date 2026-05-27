import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NewsTicker from './components/NewsTicker';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Programs from './pages/Programs';
import Placements from './pages/Placements';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  const [currentRoute, setCurrentRoute] = useState('home');

  // Handle URL hash changes for robust client-side routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validRoutes = [
        'home', 
        'login', 
        'signup', 
        'terms', 
        'privacy', 
        'programs', 
        'placements', 
        'about', 
        'contact'
      ];
      
      if (hash && validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      } else {
        setCurrentRoute('home');
      }
      // Instantly scroll to top on navigation for premium feel
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route) => {
    window.location.hash = `#${route}`;
  };

  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <Home navigate={navigate} />;
      case 'login':
        return <Login navigate={navigate} />;
      case 'signup':
        return <SignUp navigate={navigate} />;
      case 'terms':
        return <TermsAndConditions navigate={navigate} />;
      case 'privacy':
        return <PrivacyPolicy navigate={navigate} />;
      case 'programs':
        return <Programs navigate={navigate} />;
      case 'placements':
        return <Placements navigate={navigate} />;
      case 'about':
        return <AboutUs navigate={navigate} />;
      case 'contact':
        return <Contact navigate={navigate} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  const hideHeaderFooter = currentRoute === 'login' || currentRoute === 'signup';

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      {!hideHeaderFooter && <Header currentRoute={currentRoute} navigate={navigate} />}
      {!hideHeaderFooter && <NewsTicker navigate={navigate} />}
      <main className="flex-grow">
        {renderPage()}
      </main>
      {!hideHeaderFooter && <Footer navigate={navigate} />}
    </div>
  );
}

export default App;
