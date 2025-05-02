import React from 'react';
import { CelebrationPage } from './components/CelebrationPage';

function App() {
  React.useEffect(() => {
    if (window.location.pathname === '/') {
      window.location.replace('/10000');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <CelebrationPage />
    </div>
  );
}

export default App;
